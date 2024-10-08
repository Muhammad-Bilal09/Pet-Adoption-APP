import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {AuthState, User} from '../../types/types';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await auth()?.signInWithEmailAndPassword(
        email,
        password,
      );
      const user = response?.user;

      return {
        id: user?.uid,
        name: user?.displayName ?? '',
        email: user?.email ?? '',
      } as User;
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found') {
        return rejectWithValue('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        return rejectWithValue('Incorrect password.');
      } else {
        return rejectWithValue('Login failed. Please try again.');
      }
    }
  },
);

export const signUpUser = createAsyncThunk(
  'auth/signUp',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = response?.user;
      return {
        id: user?.uid,
        name: user?.displayName ?? '',
        email: user?.email ?? '',
      } as User;
    } catch (error: any) {
      if (error?.code === 'auth/email-already-in-use') {
        return rejectWithValue('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        return rejectWithValue('That email address is invalid!');
      } else {
        return rejectWithValue('Sign up failed. Please try again.');
      }
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email: string, {rejectWithValue}) => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Password Reset',
        'A password reset link has been sent to your email.',
      );
      return;
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found') {
        return rejectWithValue('No user found with this email.');
      } else if (error.code === 'auth/invalid-email') {
        return rejectWithValue('Invalid email format.');
      } else {
        return rejectWithValue(
          'Failed to send reset email. Please try again later.',
        );
      }
    }
  },
);
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    {
      currentPassword,
      newPassword,
    }: {currentPassword: string; newPassword: string},
    {rejectWithValue},
  ) => {
    try {
      const user = auth().currentUser;
      if (user?.email) {
        const credential = auth.EmailAuthProvider.credential(
          user?.email,
          currentPassword,
        );
        await user?.reauthenticateWithCredential(credential);
        await user?.updatePassword(newPassword);
        Alert.alert('Success', 'Password updated successfully');
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      .addCase(resetPassword.fulfilled, state => {
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      .addCase(changePassword.fulfilled, state => {
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
