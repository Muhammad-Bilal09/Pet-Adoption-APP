import {colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Button,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.lightWhite,
    fontSize: 16,
    textAlign: 'center',
  },
});
