import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import YummyMart from '../../../assets/YummyMart.svg'; // Adjust the path based on your folder structure


const Login = () => {

  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (!mobile || !otp) {
      alert('Please enter all fields');
      return;
    }
    alert('Logged in successfully');
  };

  return <>
        <View style={styles.welcomeContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u47ty9jip7-2475%3A403?alt=media&token=d1695fa8-fb5d-4833-b2bc-9008f7881767",
            }}
          />
          <Text style={styles.WelcomeToYummymart}>Welcome to YummyMart</Text>
        </View>

    <View style={styles.container}>
     <View>
     <Text style={styles.headingText}>Login to Your account</Text> 
    <Text style={styles.description}>Nutella® is famous for its authentic taste of hazelnuts and cocoa, made even more irresistible by its unique creaminess.</Text>
      <TextInput
        placeholder="Enter Mobile Number"
        style={styles.input1}
        keyboardType="numeric"
        value={mobile}
        onChangeText={setMobile}
         placeholderTextColor="#979899"
      />
      <TextInput
        placeholder="Enter OTP"
        style={styles.input2}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
         placeholderTextColor="#979899"
      />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     </View>

      <View style={styles.bottomTextContainer}>
      <Text style={styles.policyText}>By clicking on “Login” you are agreeing to our <Text style={styles.linkText}>terms of use</Text> </Text>

      </View>

    </View>
    </>
};

const styles = StyleSheet.create({
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    gap: 20,
    paddingTop: 30,
    paddingLeft: 20
  },
  logo: {
    width: 30,
    height: "100%",
  },
  WelcomeToYummymart: {
    color: "rgba(112,112,112,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 400,
  },

  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'start',
    backgroundColor: '#f5f5f5',
    marginTop: 60
  },
  headingText:{
    fontSize: 40,
    fontWeight: '500',
    color: '#06161C',
  },
  description:{
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#979899',
    marginTop:8
  },
  input1: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 100,
    fontSize: 14,
    marginTop: 24,
  },
  input2: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 100,
    fontSize: 14,
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: "#FF7300",
    borderColor: "#FF7300",
    borderWidth: 1,
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    borderRadius: 100,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', // Optional, for a bold text
  },
  policyText:{
    color: '#A9A9AA',
    fontSize: 16,
    textAlign:'center'
  },
  linkText: {
    color: 'black', // Link text color
    textDecorationLine: 'underline', // Underline text
    marginTop: 0, // Remove extra margin on top of the link
  },
});

export default Login;
