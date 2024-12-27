import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity,TextInput,ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import ProductBackBtn from  '../../../assets/productBackBtn.svg'
import ProductCart from  '../../../assets/productCart.svg'
import ProductWishlist from  '../../../assets/productWishlist.svg'
import ProductCarousal from './ProductCarousal'
import ProductDescription from './ProductDescription'
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts'
import ProductRating from './ProductRatings'
import TestimonialContainer from './ProductTestimonial'
import ProductBottomBar from './ProductBottomBar'

const Product = () => {
    const navigation = useNavigation();
    return <>
    <ScrollView>
    <View style={styles.productHeader}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
     <ProductBackBtn />
     </TouchableOpacity>
     <View style={styles.topRightBox}>
    <ProductCart onPress={() => navigation.navigate('Cart')}/>
    <ProductWishlist />
     </View>
    </View>
    <ProductCarousal/>
    <ProductDescription/>
    <FeaturedProducts productHeading={'Similar Products'} topMargin={22}/>
    <ProductRating/>
    <TestimonialContainer/>
    <ProductBottomBar/>
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    productHeader:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 22,
        paddingHorizontal: 22,
        position:'relative'
},
topRightBox : {
    display:'flex',
    alignItems:'center',
    gap:12,
    flexDirection: 'row', 
},
})
export default Product