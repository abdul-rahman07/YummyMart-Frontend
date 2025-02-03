import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/Searchbar';
import HomeCategories from '../Home/HomeCategories/HomeCategories';
import HomeCarousal from '../Home/HomeCarousal/HomeCarousal';
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts';
import Deals from '../Home/Deals/DealsSection';
import { Platform, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';
import Items from '../Items/Items';

export default function HomeCustomer() {
  const route = useRoute();
  const { mobile } = route.params || { mobile: '9600528513' }; // Add fallback to avoid undefined

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    isBuyer: false,
    location: '',
  });
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [dailyDeals, setDailyDeals] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const fetchUserDetails = async () => {
    const userDetailsRes = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile, path: '/get/user' }),
    });
    let {body} = await userDetailsRes.json();
    if (body.store) {
      body.isBuyer = true;
    }
    setUserDetails({ ...userDetails, ...body });
    setLoading(false);

    if (body.location === '') {
      requestLocationPermission();
    }
  };

    const fetchHomeDetails = async () => {
      try {
        const categoriesList = await fetch(
          'https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: '/get/home' }),
          },
        );
        let {body} = await categoriesList.json();
        setCategories(body.categories.slice(0,8));
        setStores(body.stores.slice(0,8));
        let featuredProducts = body.products.sort(() => Math.random() - 0.5).slice(0, 8);
        setFeaturedProducts(featuredProducts);
        let featuredProdIds = featuredProducts.map(prod => prod.id);
        let dailyDeals = body.products.sort((a, b) => a.yummy_price - b.yummy_price).filter(prod => !featuredProdIds.includes(prod.id)).slice(0, 8);
        setDailyDeals(dailyDeals);
        setAllProducts(body.products);
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(async () => {
    await fetchUserDetails();
    await fetchHomeDetails();
  }, []);



  const requestLocationPermission = async () => {
    try {
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const status = await check(permission);

      if (status === RESULTS.DENIED) {
        const result = await request(permission);
        if (result !== RESULTS.GRANTED) {
          showManualEntry();
          return;
        }
      } else if (status !== RESULTS.GRANTED) {
        showManualEntry();
        return;
      }

      getCurrentLocation();
    } catch (error) {
      console.error('Error requesting location permission:', error);
      showManualEntry();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
        )
          .then((response) => response.json())
          .then((data) => {
            setUserDetails({ ...userDetails, location: data.locality });
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching location:', error);
            Alert.alert(
              'Error',
              'Unable to fetch location. Please enter manually.',
            );
            setLoading(false);
          });
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching location:', error);
        Alert.alert(
          'Error',
          'Unable to fetch location. Please enter manually.',
        );
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const showManualEntry = () => {
    setLoading(false);
    Alert.alert('Location Required', 'Please enter your location manually.');
  };

  return (
    <>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Header userDetails={userDetails} />
            <SearchBar /> {/* On clicking take to Search Page */}
            <HomeCategories type={"category"} categories={categories} />
            <HomeCarousal />
            <FeaturedProducts mobile={mobile} products={featuredProducts} topMargin={0} />
            <HomeCategories type={"store"} categories={stores} />
            <Deals mobile={mobile} products={dailyDeals} />
            <Items products={allProducts} />
          </>
        )}
      </ScrollView>
    </>
  );
}
