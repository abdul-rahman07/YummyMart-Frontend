import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Filters from '../../../assets/filters.svg';
import Stars from '../../../assets/stars.svg';
import SearchBar from '../SearchBar/Searchbar';
import RupeeIcon from '../../../assets/RupeeIcon.svg';

export default function Orders() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.accountSettingsHeader}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ height: 21 }}
          >
            <Image
              style={styles.Left1}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x7ur30fzyi-2436%3A71?alt=media&token=6e35c7f0-68b7-4c4a-95f2-d201882dae65',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.AccountSettings}>Your orders</Text>
        </View>

        <TouchableOpacity style={styles.wishlistBox}>
          <Filters width={17} height={17} />
        </TouchableOpacity>
      </View>

      {/* cartItems */}

      <View style={[styles.cartListBox, { marginTop: 14 }]}>
        <View>
          <Image
            style={styles.CategoryImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa',
            }}
          />
        </View>

        <View style={styles.cartDetailsBox}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartHeaderText}>Spicy</Text>
            <Stars width={55} height={10} />
          </View>

          <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

          <View style={styles.productPriceContainer}>
            <RupeeIcon style={styles.RupeeIcon} />
            <Text style={styles.price}>420</Text>
            <View style={styles.MRPBox}>
              <Text style={styles.heading}>MRP</Text>
              <Image
                style={styles.CurrencyRupee}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e',
                }}
              />
              <Text style={styles.mrpprice}>500</Text>
            </View>
            <View style={styles.offerBox}>
              <Text style={styles.offerText}>52% OFF</Text>
            </View>
          </View>

          <View style={styles.overAllTestimonials}>
            <Text style={styles.overAllTestimonialtext}>Loved by 3.1k+</Text>
          </View>
        </View>
      </View>

      {/* 2 */}

      <View style={[styles.cartListBox, { marginTop: 14 }]}>
        <View>
          <Image
            style={styles.CategoryImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa',
            }}
          />
        </View>

        <View style={styles.cartDetailsBox}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartHeaderText}>Spicy</Text>
            <Stars width={55} height={10} />
          </View>

          <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

          <View style={styles.productPriceContainer}>
            <RupeeIcon style={styles.RupeeIcon} />
            <Text style={styles.price}>420</Text>
            <View style={styles.MRPBox}>
              <Text style={styles.heading}>MRP</Text>
              <Image
                style={styles.CurrencyRupee}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e',
                }}
              />
              <Text style={styles.mrpprice}>500</Text>
            </View>
            <View style={styles.offerBox}>
              <Text style={styles.offerText}>52% OFF</Text>
            </View>
          </View>

          <View style={styles.overAllTestimonials}>
            <Text style={styles.overAllTestimonialtext}>Loved by 3.1k+</Text>
          </View>
        </View>
      </View>

      {/* 3 */}

      <View style={[styles.cartListBox, { marginTop: 14 }]}>
        <View>
          <Image
            style={styles.CategoryImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa',
            }}
          />
        </View>

        <View style={styles.cartDetailsBox}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartHeaderText}>Spicy</Text>
            <Stars width={55} height={10} />
          </View>

          <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

          <View style={styles.productPriceContainer}>
            <RupeeIcon style={styles.RupeeIcon} />
            <Text style={styles.price}>420</Text>
            <View style={styles.MRPBox}>
              <Text style={styles.heading}>MRP</Text>
              <Image
                style={styles.CurrencyRupee}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e',
                }}
              />
              <Text style={styles.mrpprice}>500</Text>
            </View>
            <View style={styles.offerBox}>
              <Text style={styles.offerText}>52% OFF</Text>
            </View>
          </View>

          <View style={styles.overAllTestimonials}>
            <Text style={styles.overAllTestimonialtext}>Loved by 3.1k+</Text>
          </View>
        </View>
      </View>

      {/* 4 */}

      <View style={[styles.cartListBox, { marginTop: 14 }]}>
        <View>
          <Image
            style={styles.CategoryImage}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa',
            }}
          />
        </View>

        <View style={styles.cartDetailsBox}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartHeaderText}>Spicy</Text>
            <Stars width={55} height={10} />
          </View>

          <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

          <View style={styles.productPriceContainer}>
            <RupeeIcon style={styles.RupeeIcon} />
            <Text style={styles.price}>420</Text>
            <View style={styles.MRPBox}>
              <Text style={styles.heading}>MRP</Text>
              <Image
                style={styles.CurrencyRupee}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e',
                }}
              />
              <Text style={styles.mrpprice}>500</Text>
            </View>
            <View style={styles.offerBox}>
              <Text style={styles.offerText}>52% OFF</Text>
            </View>
          </View>

          <View style={styles.overAllTestimonials}>
            <Text style={styles.overAllTestimonialtext}>Loved by 3.1k+</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  accountSettingsHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  Left1: {
    width: 21,
    height: '100%',
  },
  AccountSettings: {
    color: 'rgba(6,22,28,1)',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 600,
  },
  wishlistBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  CategoryImage: {
    width: 73,
    height: 73,
    objectFit: 'contain',
  },
  cartListBox: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 6,
  },
  cartDetailsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
  },
  cartHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartHeaderText: {
    color: '#979899',
    fontSize: 12,
    fontWeight: 600,
  },
  productName: {
    color: 'rgba(27,28,30,1)',
    fontSize: 13,
    lineHeight: 13,
    fontWeight: 500,
    marginTop: 8,
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
  overAllTestimonials: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  overAllTestimonialtext: {
    color: '#1B1C1E',
    fontSize: 11,
    fontWeight: 500,
  },
});
