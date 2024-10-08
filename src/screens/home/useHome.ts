import {useState, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {selectPet} from '../../redux/slice/petsSlice';
import {logout} from '../../redux/slice/authSlice';
import {RootState} from '../../redux/store';
import {Pet} from '../../types/types';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const useHome = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [menuVisible, setMenuVisible] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(['All']);
  const slideAnim = useRef(new Animated.Value(-250))?.current;
  const dispatch = useDispatch();
  const {profileImage} = useSelector((state: RootState) => state?.profile);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsSnapshot = await firestore()?.collection('pets')?.get();
        const petsList = petsSnapshot?.docs?.map(doc => ({
          id: doc?.id,
          petName: doc?.data()?.petBreed,
          vaccinated: doc?.data().vaccinated,
          weight: doc?.data()?.weight,
          type: doc?.data()?.petType,
          petAge: doc?.data()?.petAge,
          amount: doc?.data()?.amount,
          gender: doc?.data()?.gender,
          imageUrl: doc?.data()?.imageUrl,
          description: doc?.data()?.description,
          ownerId: doc?.data()?.ownerId,
        }));

        setPets(petsList);
        setFilteredPets(petsList);

        const distinctCategories = [
          'All',
          ...new Set(petsList?.map(pet => pet?.type)),
        ];
        setCategories(distinctCategories);
      } catch (error) {}
    };

    fetchPets();
  }, []);

  useEffect(() => {
    let updatedPets = pets;

    if (selectedCategory !== 'All') {
      updatedPets = updatedPets?.filter(pet => pet?.type === selectedCategory);
    }

    if (searchQuery) {
      updatedPets = updatedPets?.filter(pet =>
        pet?.petName?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
      );
    }

    setFilteredPets(updatedPets);
  }, [selectedCategory, searchQuery, pets]);

  const filterPetsByCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePetSelection = (item: Pet) => {
    dispatch(selectPet(item));
    navigation.navigate('PetAdoption', {pet: item});
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(logout());
        Alert.alert('Logout Successful', 'You have been logged out.');
      })
      .catch(error => {
        Alert.alert('Logout Failed', 'Please try again.');
      });
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated?.timing(slideAnim, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })?.start();
    }
  };

  return {
    menuVisible,
    filteredPets,
    categories,
    selectedCategory,
    searchQuery,
    slideAnim,
    profileImage,
    setSearchQuery,
    filterPetsByCategory,
    handlePetSelection,
    handleLogout,
    toggleMenu,
  };
};
