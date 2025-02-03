import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import GradientBack from '../../../assets/GradientBackBtn.svg';
import SearchBar from '../SearchBar/Searchbar';
import { useNavigation } from '@react-navigation/native';
import Items from '../Items/Items';

export default function WishlistPage() {
  const mobile = '1234567890'; // Replace with actual mobile number
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesList = await fetch(
          'https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: '/get/wishlist', mobile }),
          },
        );
        let { body } = await categoriesList.json();
        setProducts(body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  const closeSearch = () => {
    setSearchText('');
  }

  const onSearch = () => {}


  return (
    <>
      <View style={styles.categoryHeroContainer}>
        <View style={styles.imageContainer}>
          <GradientBack
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.categorycontentBox}>
          <View style={styles.offerbuttonSection}>
            <Text style={styles.categoryName}>My Wishlist</Text>
          </View>
          <Text style={styles.DiscountText}>View your wishlist items here</Text>
        </View>
      </View>

      <ScrollView
        style={styles.categoryContentBox}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SearchBar searchText={searchText} setSearchText={setSearchText} closeSearch={closeSearch} onSearch={onSearch} />
        <Items products={products.filter(prod => JSON.stringify(prod).includes(searchText))} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  categoryHeroContainer: {
    width: '100%',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 22,
    paddingBottom: 22,
    backgroundColor: 'rgba(8,86,175,1)',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    right: -24,
    top: -6,
    transform: [{ translateY: -12.5 }],
  },
  categorycontentBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    marginTop: -35,
  },
  offerbuttonSection: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 8,
  },
  tagline: {
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  categoryName: {
    color: 'rgba(255,255,255,1)',
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '500',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#FF7300',
    borderColor: '#FF7300',
    borderWidth: 1,
    width: '70%',
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  DiscountText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '500',
    marginBottom: 11,
  },
  categoryContentBox: {
    paddingTop: 22,
  },
  tabContainer: {
    paddingHorizontal: 10,
    marginTop: 22,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
  },
  activeTab: {
    backgroundColor: '#1e56a0',
  },
  tabText: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7300',
  },
  CategoriesListBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
    marginTop: 25,
  },
  CategoryBox: {
    width: 81.6,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    height: 102,
  },
  CategoryImage: {
    width: '100%',
    height: 73,
    objectFit: 'contain',
  },
  CategoryText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#06161C',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 400,
    textAlign: 'center',
  },
  CategoriesProductListBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 17.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  CategoryProductsBox: {
    width: 170,
    height: 200,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 16,
    backgroundColor: 'white',
    position: 'relative',
  },
  productContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    width: 55,
    height: 70.17,
    marginTop: 20,
  },
  leftTopBox: {
    width: 31,
    height: 31,
    paddingLeft: 6,
    paddingRight: 3.18,
    paddingTop: 7,
    paddingBottom: 4,
    borderTopLeftRadius: 16,
    backgroundColor: 'rgba(255,217,186,1)',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftTopText: {
    color: 'rgba(255,115,0,1)',
    fontSize: 9,
    lineHeight: 9,
    fontWeight: 600,
  },
  plusIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  ProductDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    width: 90,
    gap: 5,
    position: 'absolute',
    left: 16,
    top: 110,
  },
  price: {
    color: 'rgba(8,86,175,1)',
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 700,
  },
  originalPrice: {
    color: 'rgba(27,28,30,0.48)',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 400,
    textDecoration: 'line-through',
  },
  productExcerpt: {
    color: 'rgba(27,28,30,1)',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 400,
    width: '100%',
  },
});
