import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';
import {
  petTypes,
  yesNoOption,
  genderOptions,
  vaccinationOptions,
} from '../../constants/Constant';

export const useDonatePet = () => {
  const [formData, setFormData] = useState({
    petType: null as string | null,
    petBreed: '',
    petAge: '',
    amount: '',
    vaccinated: null as string | null,
    gender: null as string | null,
    weight: '',
    location: '',
    description: '',
    imageUri: null as string | null,
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (key: string, value: any) => {
    setFormData(prevData => ({...prevData, [key]: value}));
  };

  const pickImage = () => {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response?.assets && response.assets.length > 0) {
        handleChange('imageUri', response.assets[0]?.uri || null);
      }
    });
  };

  const uploadImage = async (uri: string) => {
    if (!uri) return null;

    const uploadUri = uri;
    const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`pets/${fileName}`);
    setUploading(true);

    try {
      const task = storageRef.putFile(uploadUri);
      await task;

      const downloadURL = await storageRef.getDownloadURL();
      return downloadURL;
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to upload image. Please try again.',
      });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    const {petType, petBreed, amount, location, description, imageUri} =
      formData;

    if (
      !petType ||
      !petBreed ||
      !amount ||
      !location ||
      !description ||
      !imageUri
    ) {
      Toast.show({
        type: 'error',
        text1: 'Missing Information',
        text2: 'Please fill in all fields.',
      });
      return;
    }

    try {
      const uploadedImageUrl = await uploadImage(imageUri);

      if (!uploadedImageUrl) {
        Toast.show({
          type: 'error',
          text1: 'Image Upload Failed',
          text2: 'Please try again.',
        });
        return;
      }

      const submissionData = {
        ...formData,
        imageUrl: uploadedImageUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
      };

      await firestore().collection('pets').add(submissionData);
      Toast.show({
        type: 'success',
        text1: 'Pet Added',
        text2: 'Your pet donation has been added successfully!',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Submission Error',
        text2: 'There was an error adding your pet. Please try again.',
      });
    }
  };

  return {
    formData,
    handleChange,
    pickImage,
    uploadImage,
    handleSubmit,
    uploading,
    petTypes,
    yesNoOption,
    vaccinationOptions,
    genderOptions,
  };
};
