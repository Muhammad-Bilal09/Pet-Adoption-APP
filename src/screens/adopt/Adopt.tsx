import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './AdoptStyle';
import useAdopt from './useAdopt';

const AdoptScreen = () => {
  const {selectedPet, handleAdoptNow} = useAdopt();

  if (!selectedPet) {
    return (
      <View style={styles.noPet}>
        <Text>No pet selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: selectedPet.imageUrl}} style={styles.petImage} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.petInfo}>
          <Text style={styles.petName}>{selectedPet?.petName}</Text>
          <Text style={styles.price}>${selectedPet?.amount}</Text>
        </View>

        <View style={styles.specificationsContainer}>
          <View style={styles.specificationBox}>
            <Text style={styles.specTitle}>Age</Text>
            <Text style={styles.specValue}>{selectedPet?.petAge}</Text>
          </View>
          <View style={styles.specificationBox}>
            <Text style={styles.specTitle}>Gender</Text>
            <Text style={styles.specValue}>{selectedPet?.gender}</Text>
          </View>
          <View style={styles.specificationBox}>
            <Text style={styles.specTitle}>Weight</Text>
            <Text style={styles.specValue}>{selectedPet?.weight} Kg</Text>
          </View>
          <View style={styles.specificationBox}>
            <Text style={styles.specTitle}>Vaccine</Text>
            <Text style={styles.specValue}>{selectedPet?.vaccinated}</Text>
          </View>
        </View>

        <View style={styles.ownerInfo}>
          <View style={styles.ownerAvatar}></View>
          <Text style={styles.ownerName}>{selectedPet?.ownerId}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>FSD</Text>
          </View>
        </View>

        <Text style={styles.description}>
          {selectedPet?.description}
          <Text style={styles.readMore}> Read More</Text>
        </Text>

        <TouchableOpacity style={styles.adoptButton} onPress={handleAdoptNow}>
          <Text style={styles.adoptButtonText}>Adopt Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdoptScreen;
