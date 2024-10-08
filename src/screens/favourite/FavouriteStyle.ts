import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  favourite: {
    display: 'flex',
    margin: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  favouriteText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.fText,
  },
  favoriteCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.fBg,
    marginBottom: 10,
  },
  petImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  petInfo: {
    flex: 1,
    justifyContent: 'center',
  },
});
