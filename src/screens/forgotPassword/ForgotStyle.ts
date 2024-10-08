import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: colors.adoptImageBg,
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.authButton,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToLoginText: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.authButton,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});
