import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../../redux/store';
import {removeFavorite, setFavorites} from '../../redux/slice/favoritesSlice';
import {Pet} from '../../types/types';
import Toast from 'react-native-toast-message';

export const useFavorites = () => {
  const favorites = useSelector(
    (state: RootState) => state?.favorites?.favorites,
  );
  const user = useSelector((state: RootState) => state?.auth?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const userFavoritesRef = firestore()
          ?.collection('users')
          ?.doc(user?.id)
          ?.collection('favorites');

        const snapshot = await userFavoritesRef?.get();

        const allFavorites: Pet[] = snapshot.docs.map(doc => {
          const petData = doc.data();
          return {
            id: doc.id,
            petName: petData?.petName,
            gender: petData?.gender,
            vaccinated: petData?.vaccinated,
            weight: petData?.weight,
            type: petData?.type,
            petAge: petData?.petAge,
            amount: petData?.amount,
            imageUrl: petData?.imageUrl,
            description: petData?.description,
            ownerId: petData?.ownerId,
          };
        });

        dispatch(setFavorites(allFavorites));
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Could not fetch favorites. Please try again.',
        });
      }
    };

    fetchFavorites();
  }, [user, dispatch]);

  const removeFavoritePet = (petId: string) => {
    dispatch(removeFavorite(petId));
  };

  return {
    favorites,
    removeFavoritePet,
  };
};
