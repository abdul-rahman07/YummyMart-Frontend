import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeCarousal = () => {
  return <>
    <View style={styles.carousalContainer}>
                   <Text style={styles.headerText}>Offers for you</Text>
    </View>
                       <Image
                       style={styles.carousalImage}
                       source={{
                           uri: 'https://png.pngtree.com/background/20210711/original/pngtree-food-overlooking-simple-orange-e-commerce-poster-background-picture-image_1067799.jpg',
                         }}     
                          />
  </>
};

const styles = StyleSheet.create({
    carousalContainer: {
    width: "100%",
    paddingLeft:23,
    paddingRight:23,
    marginTop:30,
  },
  headerText: {
    color: "#06161C",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
  },
  carousalImage:{
    width:'100%',
    height: 150,
    borderRadius: 0,
    objectFit: "cover",
    marginTop:20,
  }
})

export default HomeCarousal;