import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Star5 from '../../../assets/star5';
import Star4 from '../../../assets/star4';
import Star3 from '../../../assets/star3';
import Star2 from '../../../assets/star2';
import Star1 from '../../../assets/star1';
import ProductReviews from './ProductReviews';

const ProductRating = ({product}) => {
  let fiveStar = product.reviews.filter((review) => review.rating === 5);
  let fourStar = product.reviews.filter((review) => review.rating === 4);
  let threeStar = product.reviews.filter((review) => review.rating === 3);
  let twoStar = product.reviews.filter((review) => review.rating === 2);
  let oneStar = product.reviews.filter((review) => review.rating === 1);

  let fiveStarPercentage = (fiveStar.length / product.reviews.length) * 100;
  let fourStarPercentage = (fourStar.length / product.reviews.length) * 100;
  let threeStarPercentage = (threeStar.length / product.reviews.length) * 100;
  let twoStarPercentage = (twoStar.length / product.reviews.length) * 100;
  let oneStarPercentage = (oneStar.length / product.reviews.length) * 100;

  return (
    <>
      <Text style={styles.headerText}>Product Rating & reviews</Text>
      <View
        style={{
          width: '90%',
          marginHorizontal: 'auto',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View style={styles.eachRatingContainer}>
            <View style={styles.ratingTextContainer}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
              >
                <Text style={styles.ratingText}>5</Text>
                <Star5 />
              </View>
              <Text style={styles.ratingPercentage}>{fiveStarPercentage}%</Text>
            </View>
            <View style={styles.parentRatingBar}>
              <View style={[styles.childRatingBar, { width: `${fiveStarPercentage}%` }]}></View>
            </View>
          </View>

          <View style={[styles.eachRatingContainer, { marginTop: 8 }]}>
            <View style={styles.ratingTextContainer}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
              >
                <Text style={styles.ratingText}>4</Text>
                <Star4 />
              </View>
              <Text style={styles.ratingPercentage}>{fourStarPercentage}%</Text>
            </View>
            <View style={styles.parentRatingBar}>
              <View style={[styles.childRatingBar, { width: `${fourStarPercentage}%` }]}></View>
            </View>
          </View>

          <View style={[styles.eachRatingContainer, { marginTop: 8 }]}>
            <View style={styles.ratingTextContainer}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
              >
                <Text style={styles.ratingText}>3</Text>
                <Star3 />
              </View>
              <Text style={styles.ratingPercentage}>{threeStarPercentage}%</Text>
            </View>
            <View style={styles.parentRatingBar}>
              <View style={[styles.childRatingBar, { width: `${threeStarPercentage}%` }]}></View>
            </View>
          </View>

          <View style={[styles.eachRatingContainer, { marginTop: 8 }]}>
            <View style={styles.ratingTextContainer}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
              >
                <Text style={styles.ratingText}>2</Text>
                <Star2 />
              </View>
              <Text style={styles.ratingPercentage}>{twoStarPercentage}%</Text>
            </View>
            <View style={styles.parentRatingBar}>
              <View style={[styles.childRatingBar, { width: '25%' }]}></View>
            </View>
          </View>

          <View style={[styles.eachRatingContainer, { marginTop: 8 }]}>
            <View style={styles.ratingTextContainer}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}
              >
                <Text style={styles.ratingText}>1</Text>
                <Star1 />
              </View>
              <Text style={styles.ratingPercentage}>{oneStarPercentage}%</Text>
            </View>
            <View style={styles.parentRatingBar}>
              <View style={[styles.childRatingBar, { width: `${oneStarPercentage}%` }]}></View>
            </View>
          </View>
        </View>

        <ProductReviews />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 22,
    width: '90%',
    marginHorizontal: 'auto',
  },
  eachRatingContainer: {
    flexDirection: 'column',
    gap: 7,
    width: 143,
  },
  ratingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontSize: 10,
    fontWeight: 400,
    color: '#1B1C1E',
  },
  ratingPercentage: {
    fontSize: 10,
    fontWeight: 400,
    color: '#1B1C1E',
  },
  parentRatingBar: {
    width: '100%',
    height: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 2,
  },
  childRatingBar: {
    height: 5,
    backgroundColor: '#FF7300',
    borderRadius: 2,
  },
});

export default ProductRating;
