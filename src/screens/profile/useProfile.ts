import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  setProfile,
  updateUsernameAsync,
  updateProfileImageAsync,
} from '../../redux/slice/profileSlice';
import auth from '@react-native-firebase/auth';
import * as ImagePicker from 'react-native-image-picker';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../hooks/reducerHooks';
import {useState, useEffect} from 'react';

const useProfile = () => {
  const dispatch = useAppDispatch();
  const {username, email, profileImage, loading, error} = useSelector(
    (state: RootState) => state.profile,
  );

  const [imageUploading, setImageUploading] = useState(false);

  useEffect(() => {
    const user = auth()?.currentUser;
    if (user) {
      dispatch(
        setProfile({
          username: user?.displayName || '',
          email: user?.email || '',
          profileImage: user?.photoURL || null,
        }),
      );
    }
  }, [dispatch]);

  const handleImagePick = () => {
    const options: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, async response => {
      if (response?.didCancel || !response?.assets) return;

      const image = response.assets[0].uri;
      if (image) {
        setImageUploading(true);
        await dispatch(updateProfileImageAsync(image));
        setImageUploading(false);
      } else {
        Alert.alert('Error', 'No image selected.');
      }
    });
  };

  const handleProfileUpdate = async (newUsername: string) => {
    if (newUsername?.trim() === '') {
      Alert.alert('Error', 'Username cannot be empty.');
      return;
    }

    const user = auth()?.currentUser;
    if (user) {
      try {
        await user.updateProfile({displayName: newUsername});
        dispatch(updateUsernameAsync(newUsername));
        Alert.alert('Success', 'Username updated successfully!');
      } catch (error) {
        Alert.alert('Error', 'Failed to update username.');
        console.error('Error updating username:', error);
      }
    }
  };
  return {
    username,
    email,
    profileImage,
    loading,
    error,
    handleImagePick,
    handleProfileUpdate,
    imageUploading,
  };
};
export default useProfile;
