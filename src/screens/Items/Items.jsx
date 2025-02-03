import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import SearchBar from '../SearchBar/Searchbar';
import { useNavigation } from '@react-navigation/native';

export default function Items({ products }) {
  const navigation = useNavigation();

  return (
      <ScrollView
        style={styles.categoryContentBox}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.CategoriesProductListBox}>
          {
            products?.map((product, index) => {
              let prod_img = product.product_images;
              try {
                prod_img = JSON.parse(prod_img);
                prod_img = prod_img[0];
              } catch (e) {
                console.log(e);
              }
              let discount_percentage = product.mrp - product.yummy_price;
              discount_percentage = (discount_percentage / product.mrp) * 100;
              discount_percentage = Math.round(discount_percentage);
              let ellipsis_description = product.description.length > 30 ? product.description.slice(0, 30) + '...' : product.description;

              return (
                <View style={styles.CategoryProductsBox} onPress={() => navigation.navigate('CategoryPage', {productId: product.id})}>
                  <View style={styles.productContainer}>
                    <Image
                      style={styles.product}
                      source={{
                        uri: prod_img,
                      }}
                    />
                  </View>
                  <View style={styles.leftTopBox}>
                    <Text style={styles.leftTopText}>{discount_percentage}% Off</Text>
                  </View>
                  <Image
                    style={styles.plusIcon}
                    source={{
                      uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757',
                    }}
                  />

                  <View style={styles.ProductDetail}>
                    <Text style={styles.price}>₹ {product.yummy_price}</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.originalPrice}>₹ {product.mrp}</Text>
                    </View>
                    <Text style={styles.productExcerpt}>
                      {ellipsis_description}
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
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