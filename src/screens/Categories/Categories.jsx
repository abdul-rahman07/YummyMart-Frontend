import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

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
            body: JSON.stringify({ path: '/get/categories' }),
          },
        );
        let {body} = await categoriesList.json();
        setCategories(body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <View style={styles.CategoriesContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backBtn}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l7j9k75eoks-2461%3A2578?alt=media&token=c900e811-e307-41d1-a219-c069fd597763',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Categories</Text>
        <Image
          style={styles.notificationIcon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l7j9k75eoks-2461%3A2739?alt=media&token=4eabcb90-81e5-423f-b791-96dfd41096b5',
          }}
        />
      </View>

      {/* categoriesBox */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 15,
          marginTop: 35,
        }}
      >
        {
          categories?.map((category, index) => {
            let isIndexOdd = index % 2 !== 0;

            return (
              isIndexOdd ? (<TouchableOpacity style={styles.categoriesBox} onPress={() => navigation.navigate('CategoryPage', {categoryId: category.id})}>
                <View style={styles.categoriesTextBox}>
                  <Text style={styles.categoriesHeaderText}>{category.name}</Text>
                  <Text style={styles.categoriesDescription}>
                    {category.description}
                  </Text>
                </View>
                <Image
                  style={styles.logo}
                  source={{
                    uri: category.image_url,
                  }}
                />
              </TouchableOpacity>) : (<TouchableOpacity style={styles.categoriesBox} onPress={() => navigation.navigate('CategoryPage', {categoryId: category.id})}>
                <View style={styles.categoriesBoxBlue}>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: category.image_url,
                    }}
                  />
                  <View style={styles.categoriesTextBox}>
                    <Text style={styles.categoriesHeaderText}>{category.name}</Text>
                    <Text style={styles.categoriesDescription}>
                    {category.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>)
            )
          })
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  CategoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  backBtn: {
    width: 21,
    height: 21,
  },
  headerText: {
    color: 'rgba(6,22,28,1)',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 600,
  },
  notificationIcon: {
    width: 20,
    height: 25,
  },
  categoriesBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(255,217,186,1)',
    borderRadius: 10,
  },
  categoriesBoxBlue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#F1F8FF',
    borderRadius: 10,
  },
  categoriesTextBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoriesHeaderText: {
    color: 'rgba(6,22,28,1)',
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 600,
  },
  categoriesDescription: {
    color: 'rgba(27,28,30,1)',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
    width: 230,
    marginTop: 8,
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 31,
    objectFit: 'cover',
  },
});
