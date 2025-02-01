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
import Star from '../../../assets/stars.svg';

const ProductReviews = () => {
  return (
    <>
      <View style={styles.reviewSectionContainer}>
        <View style={styles.reviewDetailsContainer}>
          <Text style={styles.ratingPoint}>4.0</Text>
          <Star width={80} height={20} />
          <Text style={styles.ratingByPeople}>Loved by 3.1k+</Text>
        </View>

        <View style={styles.enterReviewSection}>
          <TextInput
            placeholder="Type your feedback"
            style={styles.input2}
            keyboardType="text"
            value={''}
            placeholderTextColor="#979899"
          />
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Add review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input2: {
    width: '100%',
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    fontSize: 12,
  },
  reviewButton: {
    backgroundColor: '#0856AF',
    borderColor: '#0856AF',
    borderWidth: 1,
    width: '100%',
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    borderRadius: 5,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 500, // Optional, for a bold text
  },
  reviewSectionContainer: {
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'flex-end',
    gap: 10,
  },
  reviewDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 5,
  },
  enterReviewSection: {
    flexDirection: 'column',
    gap: 10,
  },
  ratingPoint: {
    color: '#3B3B3B',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'right',
  },
  ratingByPeople: {
    color: '#1B1C1E',
    fontSize: 10,
    fontWeight: 400,
    textAlign: 'right',
  },
});

export default ProductReviews;
