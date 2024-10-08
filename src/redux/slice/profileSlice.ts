import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import {ProfileStates} from '../../types/types';

const initialState: ProfileStates = {
  username: '',
  email: '',
  profileImage: null,
  loading: false,
  error: null,
};

export const updateUsernameAsync = createAsyncThunk(
  'profile/updateUsername',
  async (newUsername: string, {rejectWithValue}) => {
    const user = auth()?.currentUser;
    if (user) {
      try {
        await user?.updateProfile({displayName: newUsername});
        return newUsername;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue('No user logged in');
  },
);

export const updateProfileImageAsync = createAsyncThunk(
  'profile/updateProfileImage',
  async (imageUri: string, {rejectWithValue}) => {
    const user = auth()?.currentUser;
    if (user && imageUri) {
      const storageRef = storage()?.ref(`profile_images/${user?.uid}`);
      try {
        await storageRef?.putFile(imageUri);
        const downloadURL = await storageRef?.getDownloadURL();
        await user?.updateProfile({photoURL: downloadURL});
        return downloadURL;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue('No user logged in');
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(
      state,
      action: PayloadAction<{
        username: string;
        email: string;
        profileImage: string | null;
      }>,
    ) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
    },
  },
  extraReducers: builder => {
    builder.addCase(updateUsernameAsync.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUsernameAsync.fulfilled, (state, action) => {
      state.username = action.payload;
      state.loading = false;
    });
    builder.addCase(updateUsernameAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(updateProfileImageAsync.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProfileImageAsync.fulfilled, (state, action) => {
      state.profileImage = action.payload;
      state.loading = false;
    });
    builder.addCase(updateProfileImageAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;
