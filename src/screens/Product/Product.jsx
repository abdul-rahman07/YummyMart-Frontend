import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductBackBtn from '../../../assets/productBackBtn.svg';
import ProductCart from '../../../assets/productCart.svg';
import ProductWishlist from '../../../assets/productWishlist.svg';
import ProductCarousal from './ProductCarousal';
import ProductDescription from './ProductDescription';
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts';
import ProductRating from './ProductRatings';
import TestimonialContainer from './ProductTestimonial';
import ProductBottomBar from './ProductBottomBar';

const Product = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params || {};
  const [product, setProduct] = useState({});
  const [prodImageCarousel, setProdImageCarousel] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await fetch(
          'https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: '/get/product', id: productId }),
          },
        );
        let { body } = await productRes.json();
        setProduct(body);
        let product_images = body.product_images.map((image, index) => {
          return {
            id: index +1,
            source: require(image),
          }
        });
        setProdImageCarousel(product_images);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.productHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ProductBackBtn />
          </TouchableOpacity>
          <View style={styles.topRightBox}>
            <ProductCart onPress={() => navigation.navigate('Cart')} />
            <ProductWishlist />
          </View>
        </View>
        <ProductCarousal images={prodImageCarousel} />
        <ProductDescription product={product} />
        <FeaturedProducts products={product.similarProducts} productHeading={'Similar Products'} topMargin={22} />
        <ProductRating product={product} />
        <TestimonialContainer reviews={product.reviews} />
      </ScrollView>
      <ProductBottomBar product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  productHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 22,
    paddingHorizontal: 22,
    position: 'relative',
  },
  topRightBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexDirection: 'row',
  },
});

export default Product;
