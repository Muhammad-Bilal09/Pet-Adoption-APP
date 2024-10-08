import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Montserrat',
    color: colors.fText,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: colors.fText,
    borderBottomWidth: 1,
    borderBottomColor: colors.adoptImageBg,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
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
    color: colors.adoptImageBg,
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    marginTop: 10,
    padding: 30,
    borderRadius: 37,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    alignSelf: 'center',
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.fText,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
