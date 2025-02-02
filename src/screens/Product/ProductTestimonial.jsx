import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import Star from '../../../assets/stars.svg';

export default function TestimonialContainer({reviews}) {
  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const intervals = {
        year: 31536000,  // 60 * 60 * 24 * 365
        month: 2592000,  // 60 * 60 * 24 * 30
        week: 604800,    // 60 * 60 * 24 * 7
        day: 86400,      // 60 * 60 * 24
        hour: 3600,      // 60 * 60
        minute: 60,
        second: 1,
    };

    for (let key in intervals) {
        const interval = Math.floor(diffInSeconds / intervals[key]);
        if (interval > 0) {
            return `${interval} ${key}${interval !== 1 ? 's' : ''} ago`;
        }
    }
    return "Just now";
};

  return (
    reviews?.map((review, index) => (
      <View style={styles.testimonialContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.reviwer}>{review.user}</Text>
        <Text style={styles.timeline}>
          {
            timeAgo(review.date)
          }
        </Text>
      </View>

      <View style={styles.testimonialDetailSection}>
        <Star width={80} height={20} />
        <View style={styles.productImageSection}>
          <View style={styles.productReviewImage} />
          <View style={styles.productReviewImage} />
          <View style={styles.productReviewImage} />
        </View>
        <Text style={styles.ProductDescription}>
          {review.comments}
        </Text>
        <Text style={styles.readMoreLink}>Read more...</Text>
      </View>
    </View>
    ))
  );
}

const styles = StyleSheet.create({
  testimonialContainer: {
    width: '90%',
    paddingVertical: 30,
    marginHorizontal: 'auto',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  reviwer: {
    color: 'rgba(27,28,30,1)',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 400,
  },
  timeline: {
    color: 'rgba(151,152,153,1)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 400,
  },
  testimonialDetailSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginTop: 6,
  },
  productImageSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    width: '100%',
  },
  productReviewImage: {
    width: 27,
    height: 27,
    borderRadius: 3,
    backgroundColor: 'rgba(217,217,217,1)',
  },
  ProductDescription: {
    color: 'rgba(91,91,91,1)',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 400,
  },
  readMoreLink: {
    color: 'rgba(8,86,175,1)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 400,
  },
});
