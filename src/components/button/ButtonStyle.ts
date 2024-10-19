import {colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 185,
    fontFamily: 'Montserrat',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.fText,
    paddingVertical: 15,
    borderRadius: 37,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.lightWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
