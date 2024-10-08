import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.adoptImageBg,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    width: 240,
    color: colors.fText,
    fontFamily: 'Montserrat',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBg,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 62,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchIcon: {
    backgroundColor: colors.bgColor,
    borderRadius: 20,
    width: 80,
    padding: 13,
    marginLeft: 10,
  },
  categoryList: {
    color: colors.white,
    marginBottom: 10,
  },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    color: colors.white,
    backgroundColor: colors.categoryBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 10,
  },
  forYouTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  petList: {
    marginBottom: 20,
  },
  petCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.categoryBg,
    borderRadius: 20,
    marginBottom: 10,
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
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: colors.white,
    zIndex: 1,
    padding: 20,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  closeIcon: {
    marginBottom: 20,
  },
  menuSearchInput: {
    backgroundColor: colors.searchBg,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  menuSearchIcon: {},
  menuItems: {
    flex: 1,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 15,
  },
  logoutButton: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: colors.categoryBg,
  },
  logoutText: {
    color: 'red',
    fontSize: 18,
  },
  selectedCategory: {
    color: colors.white,
    backgroundColor: colors.fText,
  },
  crossToggle: {
    margin: 15,
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.adoptImageBg,
  },
  categoryText: {
    color: colors.bgColor,
  },
  selectedCategoryText: {
    color: colors.white,
  },
});