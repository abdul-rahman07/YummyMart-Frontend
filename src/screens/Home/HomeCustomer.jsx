import React from "react"
import Header from '../Header/Header'
import SearchBar from '../SearchBar/Searchbar'
import HomeCategories from '../Home/HomeCategories/HomeCategories'
import HomeCarousal from '../Home/HomeCarousal/HomeCarousal'
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts'
import Deals from '../Home/Deals/DealsSection'
import { ScrollView } from 'react-native';


export default function HomeCustomer() {
  return <>
  <ScrollView>
  <Header/>
  <SearchBar/>
  <HomeCategories />
  <HomeCarousal/>
  <FeaturedProducts />
  <Deals />
  </ScrollView>
  </>
}

