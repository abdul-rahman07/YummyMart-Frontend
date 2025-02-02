import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RupeeIcon from '../../../assets/RupeeIcon.svg';

const ProductBottomBar = ({ product }) => {
  const navigation = useNavigation();
  let discount = Math.round(((product.mrp - product.yummy_price) / product.mrp) * 100);

  return (
    <>
      <View style={styles.bottomBarContainer}>
        <View style={styles.priceDetailContainer}>
          <View style={styles.productPriceContainer}>
            <RupeeIcon style={styles.RupeeIcon} />
            <Text style={styles.price}>{product.yummy_price}</Text>
            <View style={styles.MRPBox}>
              <Text style={styles.heading}>MRP</Text>
              <Image
                style={styles.CurrencyRupee}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e',
                }}
              />
              <Text style={styles.mrpprice}>{product.mrp}</Text>
            </View>
            <View style={styles.offerBox}>
              <Text style={styles.offerText}>{discount}% OFF</Text>
            </View>
          </View>
        </View>

        {
          product.stock === 'in-stock' ? (
            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buttonText}>Buy now</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.buttonText}>Product Unavailable</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 22,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  priceDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
  QuantityContainer: {
    width: 73,
    height: 23,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 13,
    backgroundColor: 'rgba(8,86,175,1)',
  },
  productPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    marginTop: 2,
    alignItems: 'center',
  },
  RupeeIcon: {
    width: 16,
    height: 16,
  },
  price: {
    color: '#0856AF',
    fontSize: 14,
    fontWeight: 600,
  },
  offerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 20,
    borderRadius: 64,
    backgroundColor: 'rgba(255,217,186,1)',
    marginLeft: 4,
  },
  offerText: {
    color: 'rgba(255,94,0,1)',
    fontSize: 9,
    lineHeight: 9,
    fontWeight: 600,
  },
  MRPBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 3,
  },
  heading: {
    color: 'rgba(151,152,153,1)',
    fontSize: 9,
    lineHeight: 9,
    fontWeight: '400',
  },
  mrpprice: {
    color: 'rgba(151,152,153,1)',
    fontSize: 9,
    lineHeight: 9,
    fontWeight: 400,
  },
  CurrencyRupee: {
    width: 13,
    height: 13,
    objectFit: 'contain',
  },
  bottomButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#0856AF',
    borderColor: '#0856AF',
    borderWidth: 1,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 100,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
  },
  buyButton: {
    backgroundColor: '#FF7300',
    borderColor: '#FF7300',
    borderWidth: 1,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 100,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold', // Optional, for a bold text
  },
});
export default ProductBottomBar;
