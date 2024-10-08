import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    fontFamily: 'Montserrat',
    borderColor: colors.adoptImageBg,
    borderBottomWidth: 1,
    borderRadius: 5,
    color: colors.fText,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    marginTop: 20,
    fontSize: 16,
  },
  updateButton: {
    width: '100%',
    padding: 5,
    marginTop: 5,
    backgroundColor: colors.fText,
  },
});
