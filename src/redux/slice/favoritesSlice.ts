import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {FavoritesState, Pet} from '../../types/types';

const initialState: FavoritesState = {
  favorites: [],
  status: 'idle',
  error: null,
};

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId: string, {rejectWithValue}) => {
    try {
      const userFavoritesRef = firestore()
        ?.collection('users')
        ?.doc(userId)
        ?.collection('favorites');

      const snapshot = await userFavoritesRef?.get();
      const favorites: Pet[] = [];

      snapshot?.forEach(doc => {
        const petData = doc?.data();
        const pet: Pet = {
          id: doc?.id,
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
        favorites?.push(pet);
      });

      return favorites;
    } catch (error) {
      return rejectWithValue('Failed to fetch favorites.');
    }
  },
);

export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (pet: Pet, {getState, rejectWithValue}) => {
    try {
      const state: any = getState();
      const userId = state?.auth?.userId;
      const favorites: Pet[] = state?.favorites?.favorites;
      const userFavoritesRef = firestore()
        .collection('users')
        .doc(userId)
        .collection('favorites');

      if (favorites?.some(favPet => favPet?.id === pet?.id)) {
        await userFavoritesRef?.doc(pet?.id)?.delete();
        return {action: 'remove', petId: pet?.id};
      } else {
        await userFavoritesRef?.doc(pet?.id)?.set({
          petName: pet?.petName,
          type: pet?.type,
          petAge: pet?.petAge,
          amount: pet?.amount,
          imageUrl: pet?.imageUrl,
        });
        return {action: 'add', pet};
      }
    } catch (error) {
      return rejectWithValue('Failed to toggle favorite.');
    }
  },
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Pet>) => {
      if (!state?.favorites?.some(pet => pet?.id === action?.payload?.id)) {
        state.favorites.push(action.payload);
        Alert.alert('Item added to your favorite list');
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state?.favorites.filter(
        pet => pet?.id !== action?.payload,
      );
      Alert.alert('Item removed from your favorite list');
    },
    setFavorites: (state, action: PayloadAction<Pet[]>) => {
      state.favorites = action?.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites?.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites?.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites?.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        Alert.alert('Error fetching favorites: ' + state.error);
      })
      .addCase(toggleFavorite?.pending, state => {
        state.status = 'loading';
      })
      .addCase(toggleFavorite?.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const {action: toggleAction, pet, petId} = action.payload;

        if (toggleAction === 'add' && pet) {
          state.favorites?.push(pet);
        } else if (toggleAction === 'remove' && petId) {
          state.favorites = state?.favorites?.filter(p => p?.id !== petId);
        }
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        Alert.alert('Failed to update favorite: ' + state.error);
      });
  },
});

export const {addFavorite, removeFavorite, setFavorites} =
  favoritesSlice?.actions;

export default favoritesSlice?.reducer;
