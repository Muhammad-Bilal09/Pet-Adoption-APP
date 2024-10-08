import AdoptScreen from '../../screens/adopt/Adopt';
import DonateScreen from '../../screens/donate/Donate';
import AddPetScreen from '../../screens/addPet/AddPet';
import MessageScreen from '../../screens/message/Message';
import ProfileScreen from '../../screens/profile/Profile';
import FavouriteScreen from '../../screens/favourite/Favourite';
import ChangePassword from '../../screens/changePassword/ChangePassword';

export const stackScreens = [
  {name: 'PetAdoption', component: AdoptScreen},
  {name: 'Donate', component: DonateScreen},
  {name: 'AddPet', component: AddPetScreen},
  {name: 'Message', component: MessageScreen},
  {name: 'Profile', component: ProfileScreen},
  {name: 'Favourite', component: FavouriteScreen},
  {name: 'ChangePassword', component: ChangePassword},
];
