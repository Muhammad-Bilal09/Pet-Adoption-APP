import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.lightWhite,
  },

  checkboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 32,
    color: colors.fText,
    fontWeight: 'bold',
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
    marginTop: 20,
    fontSize: 16,
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
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.fText,
    fontWeight: 'bold',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontFamily: 'Montserrat',
    marginBottom: 20,
    marginTop: 5,
    textAlign: 'right',
    color: colors.fText,
    fontSize: 16,
  },
});
