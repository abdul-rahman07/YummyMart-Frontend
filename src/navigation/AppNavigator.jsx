import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsIcon from '../../assets/YummyMart.svg'; 
import HomeActive from '../../assets/HomeActive.svg'; 
import HomeInactive from '../../assets/HomeInactive.svg'; 
import CartActive from '../../assets/CartActive.svg'; 
import CartInactive from '../../assets/CartInactive.svg'; 
import AccountActive from '../../assets/AccountActive.svg'; 
import AccountInactive from '../../assets/AccountInactive.svg'; 

import LoginScreen from '../screens/Login/Login';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import HomeCustomer from '../screens/Home/HomeCustomer';
import AccountSettings from '../screens/AccountSettings/AccountSettings';
import Catgeories from '../screens/Categories/Categories'
import CategoryPage from '../screens/Categories/CategoryPage'
import SellerEntry from '../screens/SellerEntry/SellerEntry';
import Cart from '../screens/Cart/Cart'
import Orders from '../screens/Orders/Orders';
import Product from '../screens/Product/Product'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#007aff',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        paddingBottom: 10, // Add space below icons
        paddingTop: 15,    // Add space above icons
        borderTopLeftRadius: 20, // Rounded corners
        borderTopRightRadius: 20, 
        height: 70,        // Increase the height of the tab bar
        position: 'absolute', // Make it float above the screen
        borderTopWidth: 0, // Remove default border
      },
    }}
    >
      <Tab.Screen name="Home"
       component={HomeCustomer} 
       options={{
        tabBarIcon: ({ focused, color, size }) => (
          focused ? (
            <HomeActive width={24} height={24} />
          ) : (
            <HomeInactive width={24} height={24} />
          )
        ),
        tabBarShowLabel: false,
      }}
       />
       <Tab.Screen
  name="Catgeories"
  component={Catgeories}
  options={{
    tabBarIcon: ({ focused }) => (
      <SettingsIcon
        width={24}
        height={24}
        fill={focused ? '#007aff' : 'gray'} // Dynamic color for active/inactive states
        opacity={focused ? 1 : 0.6} // Reduce opacity for inactive state
      />
    ),
    tabBarShowLabel: false,
  }}
/>
<Tab.Screen 
  name="Cart"
  component={Cart} 
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      focused ? (
        <CartActive width={24} height={24} />
      ) : (
        <CartInactive width={24} height={24} />
      )
    ),
    tabBarShowLabel: false,
  }} 
/>
<Tab.Screen 
  name="Settings"
  component={AccountSettings} 
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      focused ? (
        <AccountActive width={24} height={24} />
      ) : (
        <AccountInactive width={24} height={24} />
      )
    ),
    tabBarShowLabel: false,
  }} 
/>
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} options={{ headerShown: false }} />
        <Stack.Screen name="SellerEntry" component={SellerEntry} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
