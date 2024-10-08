import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useHome} from './useHome';
import {styles} from './HomeStyle';
import {Pet, RootStackParamList} from '../../types/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {
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
  } = useHome();

  const renderCategory = ({item}: {item: string}) => (
    <TouchableOpacity
      style={[
        styles.categoryCircle,
        selectedCategory === item && styles.selectedCategory,
      ]}
      onPress={() => filterPetsByCategory(item)}>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && styles.selectedCategoryText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderPet = ({item}: {item: Pet}) => (
    <TouchableOpacity
      style={styles.petCard}
      onPress={() => handlePetSelection(item)}>
      <View>
        <Text style={styles.petName}>{item?.petName}</Text>
        <Text style={styles.petDetails}>Age: {item?.petAge}</Text>
        <Text style={styles.petPrice}>Price: {item?.amount}$</Text>
      </View>
      <View>
        <Image source={{uri: item?.imageUrl}} style={styles.petImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('../../assets/Images/toggle.png')} />
        </TouchableOpacity>
        {profileImage ? (
          <Avatar.Image
            size={40}
            source={{uri: profileImage}}
            style={styles.avatar}
          />
        ) : (
          <Avatar.Icon size={40} icon="account" style={styles.avatar} />
        )}
      </View>

      <Text style={styles.title}>Find an Awesome Pet for You</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a pet"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={require('../../assets/Images/search.png')}
            style={styles.menuSearchIcon}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={renderCategory}
          style={styles.categoryList}
        />

        <Text style={styles.forYouTitle}>For you</Text>

        <FlatList
          data={filteredPets}
          keyExtractor={item => item?.id}
          renderItem={renderPet}
          style={styles.petList}
        />
      </View>

      <Animated.View
        style={[styles.menuContainer, {transform: [{translateX: slideAnim}]}]}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={require('../../assets/Images/cross.png')}
            style={styles.crossToggle}
          />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.menuSearchInput}
            placeholder="Search for a pet"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('../../assets/Images/search.png')}
              style={styles.menuSearchIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity onPress={() => navigation.navigate('PetAdoption')}>
            <Text style={styles.menuItem}>Adopt</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
            <Text style={styles.menuItem}>Donate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddPet')}>
            <Text style={styles.menuItem}>Add Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
            <Text style={styles.menuItem}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <Text style={styles.menuItem}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
