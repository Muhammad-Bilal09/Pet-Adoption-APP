import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    flexGrow: 1,
  },
  avatarContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 10,
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
  emailInput: {
    marginTop: 10,
  },
  buttonContainer: {
    padding: 20,
  },
  updateButton: {
    width: '100%',
    padding: 5,
    marginTop: 5,
    backgroundColor: colors.fText,
  },
  changePasswordButton: {
    width: '100%',
    padding: 5,
    backgroundColor: colors.fText,
    color: colors.white,
  },
  iconButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 130,

    borderRadius: 50,
  },
  iconButton: {
    backgroundColor: colors.white,
  },
});
