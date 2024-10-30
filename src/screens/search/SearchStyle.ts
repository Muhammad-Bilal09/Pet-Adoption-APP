import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightWhite,
  },
  petName: {
    fontSize: 29,
    fontWeight: '800',
    color: colors.white,
  },
  petDetails: {
    fontSize: 14,
    color: colors.white,
    marginVertical: 5,
  },
  petPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.price,
  },
  searchInput: {
    borderColor: colors.adoptImageBg,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 80,
  },
  categoryButton: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.fBg,
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: colors.selectedButton,
  },
  categoryText: {
    fontSize: 16,
    color: colors.button,
  },
  selectedCategoryText: {
    color: colors.lightWhite,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  petImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  favoritedPetCard: {
    backgroundColor: colors.fPetCard,
  },
  petCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.petCard,
    marginVertical: 5,
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  petBackgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  petInfo: {
    borderRadius: 5,
    padding: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  petImageBackground: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  petInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  touchableContainer: {
    flex: 1,
  },
});
