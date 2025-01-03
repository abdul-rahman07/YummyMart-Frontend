import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ProductPage = () => {

  const images = [
    { id: '1', source: require('../../../assets/productImage.png') },
    { id: '2', source: require('../../../assets/productImage.png') },
    { id: '3', source: require('../../../assets/productImage.png') },
  ];

  return (
    <View style={styles.container}>
      <Swiper
      style={styles.swiper}
        dotColor="#FFD9BA"
        activeDotColor="#FF7300"
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={5}
    height={480}
      >
        {images.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.source} style={styles.image} />
          </View>
        ))}
      </Swiper>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
	marginTop : 8,
	borderRadius: 5,
  },
});

export default ProductPage;
