import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity,TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import WishlistHeart from '../../../assets/Heart.svg';
import LocationOn from '../../../assets/location.svg';
import DownArrow from '../../../assets/DownArrow.svg';
import WishlistArrow from '../../../assets/WishlistArrow.svg';
import DeleteIcon from '../../../assets/deleteIcon.svg';
import RupeeIcon from '../../../assets/RupeeIcon.svg';
import Tick from '../../../assets/tick.svg';
import Xicon from '../../../assets/Xicon.svg';

export default function Cart() {
    const navigation = useNavigation()
  return <>
    <View style={styles.accountSettingsHeader}>
<View style={{display:'flex',alignItems:"center", gap: 16,flexDirection:"row"}}>
<TouchableOpacity onPress={() => navigation.goBack()} style={{height: 21}}>
<Image
          style={styles.Left1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x7ur30fzyi-2436%3A71?alt=media&token=6e35c7f0-68b7-4c4a-95f2-d201882dae65",
          }}
        />
</TouchableOpacity>
        <Text style={styles.AccountSettings}>Your cart</Text>
</View>

<TouchableOpacity  style={styles.wishlistBox}>
<WishlistHeart />
<Text style={styles.wishlistText}>Wishlist</Text>
<WishlistArrow/>
</TouchableOpacity>
    </View>

    {/* locationBox */}

    <View style={styles.LocationChangeContainer}>
      <View style={styles.LocationDetailContainer}>
        <LocationOn style={styles.Location_on}/>
        <Text style={styles.DeliverTo}>Deliver to</Text>
        <Text style={styles.Address}>
          20c, syed roshan street, panagudi, Tirunelveli...
        </Text>
        <DownArrow style={styles.DownArrow} />
      </View>
    </View>

    {/* cartItems */}

    <View style={[styles.cartListBox,{marginTop: 14,}]}>

        <View>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
            <View style={styles.QuantityContainer}>
      <View style={styles.QuantityTextContainer}>
        <Text style={styles.QuantityText}>QTY : 1</Text>
        <Image
          style={styles.DownArrowWhite}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d",
          }}
        />
      </View>
      </View>

        </View>

        <View style={styles.cartDetailsBox}>

             <View style={styles.cartHeader}>
                <Text style={styles.cartHeaderText}>Spicy</Text>
                <DeleteIcon width={12} height={12} style={styles.deleteIcon}/>
             </View>

           <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

    <View style={styles.productPriceContainer}>
            <RupeeIcon  style={styles.RupeeIcon}/>
            <Text style={styles.price}>
            420
    </Text>
     <View style={styles.MRPBox}>
      <Text style={styles.heading}>MRP</Text>
      <Image
        style={styles.CurrencyRupee}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e",
        }}
      />
      <Text style={styles.mrpprice}>500</Text>
    </View>
    <View style={styles.offerBox}>
      <Text style={styles.offerText}>52% OFF</Text>
    </View>
          </View>

          <View style={styles.dealineContainer}>
          <Text style={styles.detailtext}>Get it by</Text>
          <Text style={styles.arrivaleTime}>Tomorrow</Text>
          </View>
          <View style={styles.warrantyBox}>
           <Tick width={12} height={12}/>
           <Text style={styles.warrantyText}>1 year warranty</Text>
          </View>
          <View style={styles.RestrictionBox}>
           <Xicon width={12} height={12}/>
           <Text style={styles.restrictionText}>This item cannot be exchanged or return</Text>
          </View>

        </View>
    </View>

    {/* 2 */}

    
    <View style={[styles.cartListBox,{marginTop: 14,}]}>

<View>
<Image
  style={styles.CategoryImage}
  source={{
    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
  }}
/>
    <View style={styles.QuantityContainer}>
<View style={styles.QuantityTextContainer}>
<Text style={styles.QuantityText}>QTY : 1</Text>
<Image
  style={styles.DownArrowWhite}
  source={{
    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d",
  }}
/>
</View>
</View>

</View>

<View style={styles.cartDetailsBox}>

     <View style={styles.cartHeader}>
        <Text style={styles.cartHeaderText}>Spicy</Text>
        <DeleteIcon width={12} height={12} style={styles.deleteIcon}/>
     </View>

   <Text style={styles.productName}>
    Bell Pepper Nutella karmen lopu Karmen mon
  </Text>

<View style={styles.productPriceContainer}>
    <RupeeIcon  style={styles.RupeeIcon}/>
    <Text style={styles.price}>
    420
</Text>
<View style={styles.MRPBox}>
<Text style={styles.heading}>MRP</Text>
<Image
style={styles.CurrencyRupee}
source={{
  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e",
}}
/>
<Text style={styles.mrpprice}>500</Text>
</View>
<View style={styles.offerBox}>
<Text style={styles.offerText}>52% OFF</Text>
</View>
  </View>

  <View style={styles.dealineContainer}>
  <Text style={styles.detailtext}>Get it by</Text>
  <Text style={styles.arrivaleTime}>Tomorrow</Text>
  </View>
  <View style={styles.warrantyBox}>
   <Tick width={12} height={12}/>
   <Text style={styles.warrantyText}>1 year warranty</Text>
  </View>
  <View style={styles.RestrictionBox}>
   <Xicon width={12} height={12}/>
   <Text style={styles.restrictionText}>This item cannot be exchanged or return</Text>
  </View>

</View>
</View>

{/* 3 */}

<View style={[styles.cartListBox,{marginTop: 14,}]}>

        <View>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
            <View style={styles.QuantityContainer}>
      <View style={styles.QuantityTextContainer}>
        <Text style={styles.QuantityText}>QTY : 1</Text>
        <Image
          style={styles.DownArrowWhite}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d",
          }}
        />
      </View>
      </View>

        </View>

        <View style={styles.cartDetailsBox}>

             <View style={styles.cartHeader}>
                <Text style={styles.cartHeaderText}>Spicy</Text>
                <DeleteIcon width={12} height={12} style={styles.deleteIcon}/>
             </View>

           <Text style={styles.productName}>
            Bell Pepper Nutella karmen lopu Karmen mon
          </Text>

    <View style={styles.productPriceContainer}>
            <RupeeIcon  style={styles.RupeeIcon}/>
            <Text style={styles.price}>
            420
    </Text>
     <View style={styles.MRPBox}>
      <Text style={styles.heading}>MRP</Text>
      <Image
        style={styles.CurrencyRupee}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/34gxxk286wr-2541%3A232?alt=media&token=b4547613-3b24-49fb-8b50-090b7fba058e",
        }}
      />
      <Text style={styles.mrpprice}>500</Text>
    </View>
    <View style={styles.offerBox}>
      <Text style={styles.offerText}>52% OFF</Text>
    </View>
          </View>

          <View style={styles.dealineContainer}>
          <Text style={styles.detailtext}>Get it by</Text>
          <Text style={styles.arrivaleTime}>Tomorrow</Text>
          </View>
          <View style={styles.warrantyBox}>
           <Tick width={12} height={12}/>
           <Text style={styles.warrantyText}>1 year warranty</Text>
          </View>
          <View style={styles.RestrictionBox}>
           <Xicon width={12} height={12}/>
           <Text style={styles.restrictionText}>This item cannot be exchanged or return</Text>
          </View>

        </View>
    </View>


  </>
}

const styles = StyleSheet.create({
    accountSettingsHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:20,
      },
      Left1: {
        width: 21,
        height: "100%",
      },
      AccountSettings: {
        color: "rgba(6,22,28,1)",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 600,
      },
    wishlistBox: {
    width: 105,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal:7,
    paddingVertical: 4,
    backgroundColor:"white",
    borderRadius: 6
  },
  LocationChangeContainer: {
    width: "90%",
    height: 31,
    paddingLeft: 7,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 7,
    borderRadius: 3,
    backgroundColor: "rgba(237,237,237,1)",
    marginHorizontal:"auto",
    marginTop: 5
  },
  LocationDetailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    height: "100%",
  },
  Location_on: {
    width: 18,
    height: 18,
  },
  DeliverTo: {
    color: "rgba(151,152,153,1)",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 400,
  },
  Address: {
    color: "rgba(0,0,0,1)",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 500,
  },
  DownArrow: {
    width: 13,
    height: 7,
  },
  CategoryImage:{
    width: 73,
    height: 73,
    objectFit:"contain"
  },
  cartListBox:{
    paddingHorizontal:14,
    paddingVertical: 22,
    borderWidth : 1,
    borderColor: "#D9D9D9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginHorizontal: 'auto',
    borderRadius: 6,
  },

  QuantityContainer: {
    width: 73,
    height: 23,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 13,
    backgroundColor: "rgba(8,86,175,1)",
    marginTop: 16,
  },
  QuantityTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 18,
    paddingLeft: 1,
    paddingBottom: 3,
  },
  QuantityText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 700,
    textAlign: "center",
  },
  DownArrowWhite: {
    width: 10,
    height: 5,
  },
  cartDetailsBox:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "70%"
  },
  cartHeader:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartHeaderText:{
  color: "#979899",
  fontSize: 12,
  fontWeight: 600,
  },
  productName:{
    color: "rgba(27,28,30,1)",
    fontSize: 13,
    lineHeight: 13,
    fontWeight:500,
    marginTop: 8
  },
  productPriceContainer:{
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 2,
    alignItems: "center",
  },
  RupeeIcon:{
    width: 16,
    height: 16
  },
  price:{
    color: "#0856AF",
    fontSize: 14,
    fontWeight: 600
  },
  offerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 20,
    borderRadius: 64,
    backgroundColor: "rgba(255,217,186,1)",
    marginLeft: 4,
  },
  offerText: {
    color: "rgba(255,94,0,1)",
    fontSize: 9,
    lineHeight: 9,
    fontWeight: 600,
  },
  MRPBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
    marginTop: 3,
  },
  heading: {
    color: "rgba(151,152,153,1)",
    fontSize: 9,
    lineHeight: 9,
    fontWeight: "400",
  },
  mrpprice: {
    color: "rgba(151,152,153,1)",
    fontSize: 9,
    lineHeight: 9,
    fontWeight: 400,
  },
  CurrencyRupee: {
    width: 13,
    height: 13,
    objectFit:"contain"
  },
  dealineContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4
  },
  detailtext:{
    color:"#1B1C1E",
    fontSize: 11,
    fontWeight: 500
  },
  arrivaleTime:{
    color:"#0856AF",
    fontSize: 11,
    fontWeight: 500
  },
  warrantyBox:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  RestrictionBox:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 2,
  },
  warrantyText:{
    color:"#FF5E00",
    fontSize: 11,
    fontWeight: 400
  },
  restrictionText:{
    color:"#979899",
    fontSize: 11,
    fontWeight: 500
  }
})
