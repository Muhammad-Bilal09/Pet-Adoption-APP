import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type Pet = {
  id: string;
  vaccinated: string;
  weight: number;
  gender: string;
  petName: string;
  type: string;
  petAge: string;
  amount: string;
  imageUrl: string;
  description: string;
  ownerId: string;
};

export type AuthStackParamList = {
  Login: {};
  SignUp: {};
  ForgotPassword: {};
  ChangePassword: {};
};

export type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
};

export type GoogleSignInButtonProps = {
  onPress: () => void;
};

export type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
};

export type AppStackParamList = {
  Home: {};
  Adopt: {};
  PetAdoption: {pet: Pet};
  Donate: {};
  Profile: {userId: string};
  AddPet: {};
  Message: {conversationId: string};
  Favourite: {};
  BottomTabs: {};
  SideBar: {};
  ChangePassword: {};
};

export type ProfileStates = {
  username: string;
  email: string;
  profileImage: string | null;
  loading: boolean;
  error: string | null;
};

export type ProfileState = {
  username: string;
  email: string;
  profileImage: string | null;
};

export type User = {
  userId: string;
  id: string;
  email: string | null;
  name: string | null;
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
};

export type Message = {
  sender: string;
  message: string;
  timestamp: FirebaseFirestoreTypes.Timestamp | null;
};

export type ConversationState = {
  isActive: boolean;
  petOwnerId: string | null;
  petName: string | null;
  messages: Message[];
};

export type FavoritesState = {
  favorites: Pet[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type PetsState = {
  selectedPet: Pet | null;
};

export type RootStackParamAdoptList = {
  Home: {};
  Adopt: {};
  Donate: {};
  AddPet: {};
  Favourite: {};
  Message: {petOwnerId: string; petName: string};
  Profile: {userId: string};
};

export type RootStackParamList = {
  Home: {} | undefined;
  Adopt: {} | undefined;
  Donate: {} | undefined;
  AddPet: {} | undefined;
  Favourite: {} | undefined;
  Message: {conversationId: string} | undefined;
  Profile: {userId: string} | undefined;
  PetAdoption: {pet: Pet} | undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamAdoptList,
  'Home'
>;

export type Option = {
  label: string;
  value: string;
};

export type PetFormProps = {
  petType: string | null;
  setPetType: (value: string) => void;
  petBreed: string;
  setPetBreed: (value: string) => void;
  petAge: string;
  setPetAge: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  vaccinated: string | null;
  setVaccinated: (value: string) => void;
  gender: string | null;
  setGender: (value: string) => void;
  weight: string;
  setWeight: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  imageUri: string | null;
  pickImage: () => void;
  handleSubmit: () => void;
  uploading: boolean;
  petTypes: Option[];
  yesNoOptions: Option[];
  genderOptions: Option[];
  buttonText: string;
};
