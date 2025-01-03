import React, { useState,useEffect } from "react"
import { ActivityIndicator } from "react-native"
import Header from '../Header/Header'
import SearchBar from '../SearchBar/Searchbar'
import HomeCategories from '../Home/HomeCategories/HomeCategories'
import HomeCarousal from '../Home/HomeCarousal/HomeCarousal'
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts'
import Deals from '../Home/Deals/DealsSection'
import { Platform, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Geolocation from "react-native-geolocation-service";
import { PERMISSIONS, request, check, RESULTS } from "react-native-permissions";

export default function HomeCustomer() {
  const route = useRoute();
  const { mobile } = route.params || {mobile :"9600528513"}; // Add fallback to avoid undefined
  
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    isBuyer: false,
    location: ''
  });
  const [loading, setLoading] = useState(true);
  console.log(userDetails)

  const fetchUserDetails = async () => {
    const userDetailsRes = await fetch('http://10.0.2.2:4000/get/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile }),
    });
    let userDetailsData = await userDetailsRes.json();
    if (userDetailsData.store) {
      userDetailsData.isBuyer = true;
    }
    setUserDetails({ ...userDetails, ...userDetailsData });
    setLoading(false)

    if (userDetailsData.location === '') {
      requestLocationPermission();
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const permission =
        Platform.OS === "ios"
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
      console.error("Error requesting location permission:", error);
      showManualEntry();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            setUserDetails({ ...userDetails, location: data.locality });
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching location:", error);
            Alert.alert("Error", "Unable to fetch location. Please enter manually.");
            setLoading(false);
          });
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        Alert.alert("Error", "Unable to fetch location. Please enter manually.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const showManualEntry = () => {
    setLoading(false);
    Alert.alert("Location Required", "Please enter your location manually.");
  };

  return <>
    <ScrollView>
      {
        loading ? <ActivityIndicator size="large" color="#0000ff" /> : <>
          <Header userDetails={userDetails} />
          <SearchBar />
          <HomeCategories />
          <HomeCarousal />
          <FeaturedProducts topMargin={0}/>
          <Deals />
        </>
      }
    </ScrollView>
  </>
}

