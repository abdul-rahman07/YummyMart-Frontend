import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from "react-native"; // Import FlatList here

import image1 from '../../../../assets/carousal1.jpg';
import image2 from '../../../../assets/carousal1.jpg';

const HomeCarousal = () => {

  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const caroualData = [
    {
      title: "Offers for you",
      description: "Shop now\nPay Later!",
      button: "OCTOBER7",
      image: image1,
      id : 0
    },
    {
      title: "Limited Time Deal",
      description: "Get the best\nprices now!",
      button: "OFFER2024",
      image: image2,
      id :1
    },
  ];

  useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === caroualData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 5000);

		return () => clearInterval(interval);
	});

  const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});

  const handleScroll = (event) => {
		// Get the scroll position
		const scrollPosition = event.nativeEvent.contentOffset.x;
		console.log({ scrollPosition });
		// Get the index of current active item

		const index = scrollPosition / screenWidth;

		console.log({ index });
		// Update the index

		setActiveIndex(index);
	};

  const renderDotIndicators = () => {
		return caroualData.map((dot, index) => {
			// if the active index === index

			if (activeIndex === index) {
				return (
					<View
						style={{
							backgroundColor: "green",
							height: 6,
							width: 6,
							borderRadius: 5,
							marginHorizontal: 3,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: "red",
							height: 6,
							width: 6,
							borderRadius: 5,
							marginHorizontal: 3,
						}}
					></View>
				);
			}
		});
	};

  const renderItem = ({ item }) => (
    <Image source={item.image} style={{ height: 150, width: screenWidth }} />
  );

  return (
    <>
      <View style={styles.carousalContainer}>
        <Text style={styles.headerText}>Offers for you today!</Text>
      </View>
      <FlatList
        data={caroualData} // Fixed: Correct prop name is "data"
        ref={flatlistRef}
				getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id} // Added: Ensure each item has a unique key
        onScroll={handleScroll}
      />
      			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				{renderDotIndicators()}
			</View>
    </>
  );
};

const styles = StyleSheet.create({
  carousalContainer: {
    width: "100%",
    paddingLeft: 23,
    paddingRight: 23,
    marginTop: 30,
  },
  headerText: {
    color: "#06161C",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500", // Fixed: fontWeight values should be strings
    marginBottom: 20,
  },
});

export default HomeCarousal;
