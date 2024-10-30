import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {petTypes, yesNoOptions, genderOptions} from '../../constants/Constant';

export const useAddPet = () => {
  const [formData, setFormData] = useState({
    petAge: '',
    petType: null as string | null,
    petBreed: '',
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
      if (response?.assets && response.assets?.length > 0) {
        handleChange('imageUri', response?.assets[0].uri || null);
      }
    });
  };

  const uploadImage = async (uri: string) => {
    if (!uri) return null;

    const uploadUri = uri;
    const fileName = uploadUri?.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage()?.ref(`pets/${fileName}`);
    setUploading(true);

    try {
      const task = storageRef?.putFile(uploadUri);
      await task;

      const downloadURL = await storageRef?.getDownloadURL();
      return downloadURL;
    } catch (error) {
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    const {petAge, petType, petBreed, amount, location, description, imageUri} =
      formData;

    if (
      !petAge ||
      !petType ||
      !petBreed ||
      !amount ||
      !location ||
      !description ||
      !imageUri
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields.',
      });
      return;
    }

    const user = auth()?.currentUser;
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'You must be logged in to add a pet.',
      });
      return;
    }

    try {
      const uploadedImageUrl = await uploadImage(imageUri);

      if (!uploadedImageUrl) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Image upload failed. Please try again.',
        });
        return;
      }

      const submissionData = {
        ...formData,
        imageUrl: uploadedImageUrl,
        ownerId: user?.uid,
        ownerEmail: user?.email,
        createdAt: firestore?.FieldValue?.serverTimestamp(),
      };

      await firestore()?.collection('pets')?.add(submissionData);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Pet added successfully!',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Error adding pet. Please try again.',
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
    yesNoOptions,
    genderOptions,
  };
};
