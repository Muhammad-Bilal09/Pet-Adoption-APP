import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {startConversation} from '../../redux/slice/conversationSlice';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../types/types';

const useAdopt = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const selectedPet = useSelector(
    (state: RootState) => state?.pets?.selectedPet,
  );

  const handleAdoptNow = () => {
    if (selectedPet) {
      dispatch(
        startConversation({
          petOwnerId: selectedPet?.ownerId,
          petName: selectedPet?.petName,
        }),
      );

      navigation?.navigate('Message', {
        petOwnerId: selectedPet?.ownerId,
        petName: selectedPet?.petName,
      });
    }
  };

  return {
    selectedPet,
    handleAdoptNow,
  };
};

export default useAdopt;
