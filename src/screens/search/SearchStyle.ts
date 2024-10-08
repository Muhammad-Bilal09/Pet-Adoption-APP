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
  petCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.petCard,
    marginVertical: 5,
    borderRadius: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  favoritedPetCard: {
    backgroundColor: colors.fPetCard,
  },
});
