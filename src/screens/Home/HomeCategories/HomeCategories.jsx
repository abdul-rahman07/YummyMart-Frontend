import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"

export default function Group1000004396() {
  return (
    <View style={styles.CategoriesContainer}>

          <View style={styles.CategoriesHeader}>
            <Text style={styles.headerText}>Shop by Categories</Text>
            <TouchableOpacity style={styles.ViewAll} >
             <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>

{/* categories */}
          <View style={styles.CategoriesListBox}>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
         </View>
         <View style={styles.CategoryBox}>
        <Image
          style={styles.CategoryImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/2l9vqlmvhmc-2501%3A211?alt=media&token=4dab2cba-d530-463f-a44c-6829e9c525aa",
          }}
        />
        <Text style={styles.CategoryText}>Fruits</Text>
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
     gap : 13,
    alignItems: "center",
    marginTop:25,
  },
  CategoryBox: {
    width:81.6,
    display: "flex",
    flexDirection: "column",
    gap:12,
    alignItems: "center",
    height: 102,
  },
  CategoryImage:{
    width: "100%",
    height: 73,
    objectFit:"contain"
  },
  CategoryText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#06161C",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 400,
    textAlign: "center",
  },
})
