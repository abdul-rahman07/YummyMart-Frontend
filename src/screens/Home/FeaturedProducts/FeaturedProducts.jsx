import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function FeaturedProducts({productHeading,topMargin}) {
  const navigation = useNavigation();
  return (
    <View style={styles.CategoriesContainer}>

<View style={[styles.CategoriesHeader, {marginTop: topMargin || 0}]}>
          <Text style={styles.headerText}>{productHeading ? productHeading : 'Featured Products'}</Text>
            <TouchableOpacity style={styles.ViewAll} >
             <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:14}}>
          <Text style={styles.mainText}>Sponsored</Text>
          </View>

{/* categories */}
          <View style={styles.CategoriesListBox}>
         <TouchableOpacity style={styles.CategoryBox} onPress={() => navigation.navigate('Product')}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </TouchableOpacity>

         <View style={styles.CategoryBox}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </View>

         <View style={styles.CategoryBox}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </View>

         <View style={styles.CategoryBox}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </View>

         <View style={styles.CategoryBox}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </View>

         <View style={styles.CategoryBox}>
         <View style={styles.productContainer}>
         <Image
            style={styles.product}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bmmwjz3h67u-2411%3A301?alt=media&token=fd8b3323-4d91-4fcb-9324-07f7cb5575b6",
            }}
            />
         </View>
         <View style={styles.leftTopBox}>
      <Text style={styles.leftTopText}>52% Off</Text>
    </View>
    <Image
      style={styles.plusIcon}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757",
      }}
    />

      <View style={styles.ProductDetail}>
        <Text style={styles.price}>480da</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>630da</Text>
        </View>
        <Text style={styles.productExcerpt}>Bell Pepper Nutella karmen lopu...</Text>
      </View>

         </View>

        </View>
        </View>


  )
}

const styles = StyleSheet.create({
    CategoriesContainer: {
    width: "100%",
    paddingLeft:23,
    paddingRight:23,
    paddingTop:20,
  },
  CategoriesHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 42,
  },
  headerText: {
    color: "#06161C",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
  },
  ViewAll: {
    backgroundColor: "#0856AF",
    width: 65,
    height: 20,
    borderRadius: 6,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
  },
  buttonText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 500, // Optional, for a bold text
  },
  CategoriesListBox:{
    display: "flex",
    flexWrap:"wrap",
    flexDirection: "row",
     gap : 17.7,
    alignItems: "center",
    marginTop:25,
  },
  CategoryBox: {
    width:110,
    height: 140,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius:16,
    backgroundColor:"white",
    position:"relative",
  },
  productContainer:{
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
  },
  product:{
    width: 40,
    height: 55.17,
    marginTop:20,
  },
  leftTopBox:{
    width: 21.18,
    height: 21,
    paddingLeft: 6,
    paddingRight: 3.18,
    paddingTop: 7,
    paddingBottom: 4,
    borderTopLeftRadius: 16,
    backgroundColor: "rgba(255,217,186,1)",
    position:"absolute",
    top:0,
    left:0
  },
  leftTopText: {
    color: "rgba(255,115,0,1)",
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 600,
  },
  mainText:{
    color:"#FF7300",
    fontSize: 16,
    fontWeight: 500,
    textAlign:"center"
  },
  plusIcon:{
    width: 18,
    height: 18,
    position:"absolute",
    top:6,
    right:6
  },
  ProductDetail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    width:70,
    gap:5,
    position:"absolute",
    left:10,
    top: 80
  },
  price: {
    color: "rgba(8,86,175,1)",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 700,
  },
  originalPrice: {
    color: "rgba(27,28,30,0.48)",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 400,
    textDecoration: "line-through",
  },
  productExcerpt: {
    color: "rgba(27,28,30,1)",
    fontSize: 8,
    lineHeight: 8,
    fontWeight: 400,
  },
})
