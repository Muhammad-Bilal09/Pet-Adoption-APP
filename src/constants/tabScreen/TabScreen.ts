import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../screens/home/Home';
import SearchScreen from '../../screens/search/Search';
import FavouriteScreen from '../../screens/favourite/Favourite';
import ProfileScreen from '../../screens/profile/Profile';

const SCREENS = {
  AUTH: {
    LOGIN: 'Login',
    SIGNUP: 'SignUp',
    FORGOT_PASSWORD: 'ForgotPassword',
  },
  APP: {
    HOME: 'Home',
    SEARCH: 'Search',
    FAVOURITE: 'Favourite',
    PROFILE: 'Profile',
    PET_ADOPTION: 'PetAdoption',
    DONATE: 'Donate',
    ADD_PET: 'AddPet',
    MESSAGE: 'Message',
    BOTTOM_TABS: 'BottomTabs',
    SIDE_BAR: 'SideBar',
  },
};

const TAB_ICONS = {
  HOME: 'home',
  SEARCH: 'search1',
  FAVOURITE: 'hearto',
  PROFILE: 'user',
};

export const tabScreens = [
  {
    name: SCREENS.APP.HOME,
    component: HomeScreen,
    icon: AntDesign,
    iconName: TAB_ICONS.HOME,
  },
  {
    name: SCREENS.APP.SEARCH,
    component: SearchScreen,
    icon: AntDesign,
    iconName: TAB_ICONS.SEARCH,
  },
  {
    name: SCREENS.APP.FAVOURITE,
    component: FavouriteScreen,
    icon: AntDesign,
    iconName: TAB_ICONS.FAVOURITE,
  },
  {
    name: SCREENS.APP.PROFILE,
    component: ProfileScreen,
    icon: AntDesign,
    iconName: TAB_ICONS.PROFILE,
  },
];
