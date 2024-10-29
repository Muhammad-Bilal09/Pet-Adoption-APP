import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './AdoptStyle';
import useAdopt from './useAdopt';
import {SPECIFICATIONS} from '../../constants/Constant';

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
          <Text style={styles.petName}>{selectedPet.petName}</Text>
          <Text style={styles.price}>${selectedPet.amount}</Text>
        </View>

        <View style={styles.specificationsContainer}>
          {SPECIFICATIONS(selectedPet).map((spec, index) => (
            <View key={index} style={styles.specificationBox}>
              <Text style={styles.specTitle}>{spec.title}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.ownerInfo}>
          <View style={styles.ownerAvatar}></View>
          <Text style={styles.ownerName}>{selectedPet.ownerId}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>FSD</Text>
          </View>
        </View>

        <Text style={styles.description}>
          {selectedPet.description}
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
