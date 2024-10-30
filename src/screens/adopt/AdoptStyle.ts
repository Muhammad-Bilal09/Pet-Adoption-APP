import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.adoptBg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.header,
  },
  imageContainer: {
    height: 300,
    backgroundColor: colors.adoptImageBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  petImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  petInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  petName: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  petType: {
    fontSize: 16,
    color: colors.bColor,
  },
  price: {
    fontSize: 24,
    color: colors.readMore,
    fontWeight: 'bold',
  },
  specificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  specificationBox: {
    alignItems: 'center',
  },
  specTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: colors.bColor,
  },
  specValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ownerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  ownerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.adoptImageBg,
    marginRight: 10,
  },
  ownerName: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationText: {
    fontSize: 14,
    color: colors.bColor,
  },
  description: {
    fontFamily: 'Montserrat',
    marginTop: 20,
    color: colors.description,
  },
  readMore: {
    color: colors.readMore,
    fontWeight: 'bold',
  },
  adoptButton: {
    backgroundColor: colors.button,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  adoptButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  noPet: {
    flex: 1,
    fontFamily: 'Montserrat',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
