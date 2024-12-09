import React, { useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

import image1 from '../../../../assets/carousal1.jpg';
import image2 from '../../../../assets/carousal1.jpg';

const data = [
  {
    title: "Offers for you",
    description: "Shop now\nPay Later!",
    button: "OCTOBER7",
    image: image1,
  },
  {
    title: "Limited Time Deal",
    description: "Get the best\nprices now!",
    button: "OFFER2024",
    image: image2,
  },
];

const HomeCarousal = () => {
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
        <Image source={item.image} style={styles.image} />
  );

  return <>
    <View style={styles.carousalContainer}>
                   <Text style={styles.headerText}>Offers for you today!</Text>
    </View>
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={400} // Adjust to your screen width
        itemWidth={300}
        autoplay={true}
        loop={true}
        autoplayInterval={3000} // 3 seconds
      />
    </View>  
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 14,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
  },
})

export default HomeCarousal;