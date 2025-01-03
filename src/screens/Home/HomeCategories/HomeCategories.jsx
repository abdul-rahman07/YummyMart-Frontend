import React, { useState, useEffect } from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"
import {
  useNavigation,
} from '@react-navigation/native';

export default function HomeCategories() {
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    try{
      const categoriesList = await fetch('http://10.0.2.2:4000/get/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let categoriesListData = await categoriesList.json();
      setCategories(categoriesListData)
    }catch(err){
    console.log(err)
    }
  }

  useEffect(() => {
    fetchCategories()
  },[])

  const navigation = useNavigation();
  return (
    <View style={styles.CategoriesContainer}>

          <View style={styles.CategoriesHeader}>
            <Text style={styles.headerText}>Shop by Categories</Text>
            <TouchableOpacity style={styles.ViewAll} onPress={() => navigation.navigate('CategoryPage')}>
             <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* categories */}
          <View style={styles.CategoriesListBox}>
            {
              categories.map((category) => (
                <View style={styles.CategoryBox} key={category.id}>
                  <Image
                    style={styles.CategoryImage}
                    source={{
                      uri: category.image_url,
                    }}
                  />
                  <Text style={styles.CategoryText}>{category.name}</Text>
                </View>
              ))
            }
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
