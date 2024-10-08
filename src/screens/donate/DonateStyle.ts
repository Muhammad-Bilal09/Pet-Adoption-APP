import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.bgColor,
    marginVertical: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  uploadButton: {
    height: 200,
    borderWidth: 1,
    borderColor: colors.bColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: colors.bgColor,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
