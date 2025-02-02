import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function FeaturedProducts({ products, mobile }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile,
          path: '/get/cart',
        })
      });
      const { body } = await response.json();
      if (body) {
        setCartItems(body);
      }
    }
    fetchCartItems();
  }, []);

  const addToCart = async (productId) => {
    const response = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile,
        product_id: productId,
        quantity: 1,
        path: '/add/cart',
      })
    });
    const { body } = await response.json();
    if (body) {
      // body.length is the cart count
    }
  };

  const updateCart = async (productId, quantity) => {
    const response = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile,
        product_id: productId,
        quantity,
        path: '/update/cart',
      })
    });
    const { body } = await response.json();
    if (body) {
      // body.length is the cart count
    }
  }

  const deleteFromCart = async (productId) => {
    const response = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile,
        product_id: productId,
        path: '/remove/cart',
      })
    });
    const { body } = await response.json();
    if (body) {
      // body.length is the cart count
    }
  }

  return (
    <View style={styles.CategoriesContainer}>
      <View style={styles.CategoriesHeader}>
        <Text style={styles.headerText}>Daily Deals</Text>
        <TouchableOpacity style={styles.ViewAll}>
          <Text style={styles.buttonText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 14 }}>
        <Text style={styles.mainText}>Discounts</Text>
      </View>

      {/* categories */}
      <View style={styles.CategoriesListBox}>
        {
          products?.map((product) => {
            let prod_img = product.product_images;
            try {
              prod_img = JSON.parse(prod_img);
              prod_img = prod_img[0];
            } catch (err) {
              console.log(err);
            }
            let discount = (product.mrp - product.yummy_price) / product.mrp * 100;
            discount = Math.floor(discount);

            let isProductAlreadyInCart = cartItems.find(item => item.product_id === product.id);
            let quantity = isProductAlreadyInCart ? cartItems.find(item => item.product_id === product.id).quantity : 0;

            return <View style={styles.CategoryBox}>
              <View style={styles.productContainer}>
                <Image
                  style={styles.product}
                  source={{
                    uri: prod_img,
                  }}
                />
              </View>
              <View style={styles.leftTopBox}>
                <Text style={styles.leftTopText}>{discount}% Off</Text>
              </View>
              {
                isProductAlreadyInCart ?
                  <View style={styles.QuantityContainer}>
                    <View style={styles.QuantityTextContainer}>
                      <Text style={styles.QuantityText}>QTY : {quantity}</Text>
                      <Image
                        style={styles.DownArrowWhite}
                        source={{
                          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d',
                        }}
                      />
                    </View>

                    <View style={styles.QuantityTextContainer}>
                      <RNPickerSelect
                        placeholder={{
                          label: 'QTY',
                          value: quantity,
                          color: '#979899',
                        }}
                        onValueChange={(value) =>
                          updateCart(product.id, value)
                        }
                        items={Array.from({ length: product.max_quantity }, (_, index) => ({
                          label: `${index + 1}`,
                          value: index + 1,
                        })).slice(product.min_quantity - 1)}
                        value={quantity}
                      />
                    </View>

                    <View style={styles.QuantityTextContainer}>
                      <Text style={styles.QuantityText}>QTY : {quantity}</Text>
                      <Image
                        style={styles.DownArrowWhite}
                        source={{
                          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1o9hs4a6wfz-2541%3A258?alt=media&token=39706c75-ca50-46d0-ba9d-96df2fec4b5d',
                        }}
                      />
                    </View>

                  </View> :
                  <TouchableOpacity
                    onPress={() => addToCart(product.id)}
                  >
                    <Image
                      style={styles.plusIcon}
                      source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/af3wlt5bplt-2411%3A305?alt=media&token=76e8b418-0888-4443-8a25-b1ae87d1f757',
                      }}
                    />
                  </TouchableOpacity>
              }

              <View style={styles.ProductDetail}>
                <Text style={styles.price}>₹ {product.yummy_price}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>₹ {product.mrp}</Text>
                </View>
                <Text style={styles.productExcerpt}>
                  {product.description.length > 30 ? product.description.slice(0, 30) + '...' : product.description}
                </Text>
              </View>
            </View>
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoriesContainer: {
    width: '100%',
    paddingLeft: 23,
    paddingRight: 23,
    paddingTop: 20,
    paddingBottom: 90,
  },
  CategoriesHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 42,
  },
  headerText: {
    color: '#06161C',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
  },
  ViewAll: {
    backgroundColor: '#0856AF',
    width: 65,
    height: 20,
    borderRadius: 6,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
  },
  buttonText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 500, // Optional, for a bold text
  },
  CategoriesListBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 17.7,
    alignItems: 'center',
    marginTop: 25,
  },
  CategoryBox: {
    width: 110,
    height: 140,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 16,
    backgroundColor: 'white',
    position: 'relative',
  },
  productContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    width: 40,
    height: 55.17,
    marginTop: 20,
  },
  leftTopBox: {
    width: 21.18,
    height: 21,
    paddingLeft: 6,
    paddingRight: 3.18,
    paddingTop: 7,
    paddingBottom: 4,
    borderTopLeftRadius: 16,
    backgroundColor: 'rgba(255,217,186,1)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  leftTopText: {
    color: 'rgba(255,115,0,1)',
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 600,
  },
  mainText: {
    color: '#FF7300',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  plusIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 6,
    right: 6,
  },
  ProductDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    width: 70,
    gap: 5,
    position: 'absolute',
    left: 10,
    top: 80,
  },
  price: {
    color: 'rgba(8,86,175,1)',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 700,
  },
  originalPrice: {
    color: 'rgba(27,28,30,0.48)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 400,
    textDecoration: 'line-through',
  },
  productExcerpt: {
    color: 'rgba(27,28,30,1)',
    fontSize: 8,
    lineHeight: 8,
    fontWeight: 400,
  },
  QuantityContainer: {
    width: 73,
    height: 23,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 13,
    backgroundColor: 'rgba(8,86,175,1)',
    marginTop: 16,
  },
  QuantityTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 18,
    paddingLeft: 1,
    paddingBottom: 3,
  },
  QuantityText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: 700,
    textAlign: 'center',
  },
  DownArrowWhite: {
    width: 10,
    height: 5,
  }
});
