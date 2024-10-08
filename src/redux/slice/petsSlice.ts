import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Pet, PetsState} from '../../types/types';
import firestore from '@react-native-firebase/firestore';

const initialState: PetsState = {
  selectedPet: null,
};

export const fetchPetById = createAsyncThunk(
  'pets/fetchPetById',
  async (petId: string, thunkAPI) => {
    try {
      const petDoc = await firestore()?.collection('pets')?.doc(petId)?.get();

      const petData = petDoc?.data() as Pet;

      return petData;
    } catch (error) {
      return thunkAPI?.rejectWithValue('Failed to fetch pet details');
    }
  },
);

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    selectPet(state, action: PayloadAction<Pet>) {
      state.selectedPet = action?.payload;
    },
    clearSelectedPet(state) {
      state.selectedPet = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPetById.pending, state => {
        state.selectedPet = null;
      })
      .addCase(fetchPetById.fulfilled, (state, action: PayloadAction<Pet>) => {
        state.selectedPet = action?.payload;
      })
      .addCase(fetchPetById.rejected, state => {
        state.selectedPet = null;
      });
  },
});

export const {selectPet, clearSelectedPet} = petsSlice?.actions;
export default petsSlice?.reducer;
