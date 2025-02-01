import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, Image, View, Text } from 'react-native';

import image1 from '../../../../assets/carousal1.jpg';
import image2 from '../../../../assets/carousal1.jpg';

const HomeCarousal = () => {
  const caroualData = [
    {
      id: 1,
      title: 'Offers for you',
      description: 'Shop now\nPay Later!',
      button: 'OCTOBER7',
      image: image1,
    },
    {
      id: 2,
      title: 'Limited Time Deal',
      description: 'Get the best\nprices now!',
      button: 'OFFER2024',
      image: image2,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Offers for you today!</Text>
      <Swiper
        dotColor="#FFD9BA"
        activeDotColor="#FF7300"
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={5}
        height={185}
      >
        {caroualData.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            {/* <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.button}>{item.button}</Text>
            </View> */}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default HomeCarousal;

const styles = StyleSheet.create({
  headerText: {
    color: '#06161C',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '90%',
    height: 125,
    resizeMode: 'cover',
    marginTop: 8,
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 5,
  },
  //   textContainer: {
  //     position: "absolute",
  //     bottom: 20,
  //     left: 20,
  //     right: 20,
  //     backgroundColor: "rgba(0, 0, 0, 0.5)",
  //     padding: 10,
  //     borderRadius: 8,
  // 	width:"100%",
  //   },
  //   title: {
  //     color: "#fff",
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
  //   description: {
  //     color: "#fff",
  //     fontSize: 14,
  //     marginVertical: 5,
  //   },
  //   button: {
  //     color: "#FFD700",
  //     fontSize: 14,
  //     fontWeight: "bold",
  //   },
});
