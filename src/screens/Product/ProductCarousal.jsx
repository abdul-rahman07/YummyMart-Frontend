import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AddWishlist from '../../../assets/AddWishlist.svg'
import ShareIcon from '../../../assets/shareIcon.svg'
import Logo from '../../../assets/YummyMart.svg'
import RupeeIcon from '../../../assets/RupeeIcon.svg';


const ProductPage = () => {
  const images = [
    { id: '1', source: require('../../../assets/productImage.png') },
    { id: '2', source: require('../../../assets/productImage.png') },
    { id: '3', source: require('../../../assets/productImage.png') },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderDots = () => {
    return images.map((_, index) => (
      <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
        <View
          style={[
            styles.dot,
            activeIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        // <Text>sjdcbiovnhvi jncudwhvuiwhfowejf iuechiwehfwifwe ukiehfioewfhuiwo hjvdyucv</Text>
        )}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(contentOffsetX / styles.image.width);
          setActiveIndex(newIndex);
        }}
      />

      <View style={styles.dotContainer}>{renderDots()}</View>

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
  image: {
    width: 400,
    height: 400,

  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal : 16,
    paddingVertical : 12,
    borderRadius: 6
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },

});

export default ProductPage;
