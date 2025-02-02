import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AddWishlist from '../../../assets/AddWishlist.svg';
import ShareIcon from '../../../assets/shareIcon.svg';
import Logo from '../../../assets/YummyMart.svg';
import RupeeIcon from '../../../assets/RupeeIcon.svg';
import Tick from '../../../assets/tick.svg';
import Stars from '../../../assets/stars.svg';

const ProductDescription = ({product}) => {
  let discount = Math.floor(((product.mrp - product.yummy_price) / product.mrp) * 100);
  return (
    <>
      <View style={{ position: 'relative', marginTop: 8 }}>
        <View style={styles.productDetailContainer}>
          <View style={styles.productDetailHeader}>
            <Text style={styles.productName}>
              {product.name}
            </Text>
            <View style={styles.productHeaderIcons}>
              <AddWishlist width={18} height={18} />
              <ShareIcon width={18} height={18} />
            </View>
          </View>

          <View style={styles.sellerDetail}>
            <Logo />
            <Text style={styles.seller}>{product.store.name}</Text>
          </View>

          <View style={styles.priceDetailContainer}>
            <View style={styles.productPriceContainer}>
              <RupeeIcon style={styles.RupeeIcon} />
              <Text style={styles.price}>₹ {product.yummy_price}</Text>
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

            <View style={styles.QuantityContainer}>
              {
                product.stock === 'in-stock' ? (
                  <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>QTY : 1</Text>
                <Image
                  style={styles.DownArrowWhite}
                  source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d',
                  }}
                />
              </View>
                ) : (
                  <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>Product unavailable</Text>
              </View>
                )
              }
            </View>
          </View>

          <View style={styles.stockDetails}>
            {
              product.stock === 'in-stock' ? (
                <>
                  <Text>In stock</Text>
                  <Tick width={14} height={14} />
                </>
              ) : (
                <Text>Out of stock</Text>
              )
            }
          </View>

          <Text style={styles.descriptionText}>
            {
              product.description
            }
          </Text>
        </View>

        <View style={styles.starsBox}>
          <Stars width={70} height={20} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: '90%',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    borderRadius: 6,
    position: 'relative',
  },
  productDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productHeaderIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  productName: {
    color: '#1B1C1E',
    fontSize: 14,
    fontWeight: 600,
    width: '60%',
  },
  sellerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 7,
  },
  seller: {
    color: '#FF5E00',
    fontSize: 14,
    fontWeight: 500,
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
  QuantityTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 18,
    paddingLeft: 1,
    paddingBottom: 3,
  },
  QuantityText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 700,
    textAlign: 'center',
  },
  DownArrowWhite: {
    width: 10,
    height: 5,
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
  stockDetails: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  descriptionText: {
    color: '#979899',
    fontSize: 12,
    fontWeight: 400,
    marginTop: 5,
  },
  starsBox: {
    paddingTop: 10,
    paddingBottom: 6,
    paddingRight: 6,
    paddingLeft: 6,
    backgroundColor: 'white',
    borderRadius: 6,
    position: 'absolute',
    right: 40,
    bottom: -24,
  },
});

export default ProductDescription;
