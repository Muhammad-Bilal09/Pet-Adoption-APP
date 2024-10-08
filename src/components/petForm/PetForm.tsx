import React from 'react';
import {
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Button} from 'react-native-paper';
import {styles} from '../../screens/addPet/AddStyles';
import {PetFormProps} from '../../types/types';

const PetForm: React.FC<PetFormProps> = ({
  petType,
  setPetType,
  petBreed,
  setPetBreed,
  petAge,
  setPetAge,
  amount,
  setAmount,
  vaccinated,
  setVaccinated,
  gender,
  setGender,
  weight,
  setWeight,
  location,
  setLocation,
  description,
  setDescription,
  imageUri,
  pickImage,
  handleSubmit,
  uploading,
  petTypes,
  yesNoOptions,
  genderOptions,
  buttonText,
}) => {
  return (
    <ScrollView style={styles.container as ViewStyle}>
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Pet Age"
        value={petAge}
        onChangeText={setPetAge}
      />
      <Dropdown
        style={styles.input as ViewStyle}
        data={petTypes}
        labelField="label"
        valueField="value"
        placeholder="Pet Type"
        value={petType}
        onChange={item => setPetType(item.value)}
      />
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Pet Breed"
        value={petBreed}
        onChangeText={setPetBreed}
      />
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Amount $"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Dropdown
        style={styles.input as ViewStyle}
        data={yesNoOptions}
        labelField="label"
        valueField="value"
        placeholder="Vaccinated"
        value={vaccinated}
        onChange={item => setVaccinated(item.value)}
      />
      <Dropdown
        style={styles.input as ViewStyle}
        data={genderOptions}
        labelField="label"
        valueField="value"
        placeholder="Gender"
        value={gender}
        onChange={item => setGender(item.value)}
      />
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Weight KG"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input as ViewStyle}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity
        style={styles.uploadButton as ViewStyle}
        onPress={pickImage}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image as ImageStyle} />
        ) : (
          <Text>Upload Image</Text>
        )}
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button as ViewStyle}
        disabled={uploading}>
        {uploading ? 'Uploading...' : buttonText}
      </Button>
    </ScrollView>
  );
};

export default PetForm;
