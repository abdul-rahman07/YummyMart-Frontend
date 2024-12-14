import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Verify from '../../../assets/verify.svg'; // Adjust the path based on your folder structure
import YummyMart from '../../../assets/YummyMart.svg';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpEnabled, setOtpEnabled] = useState(false);

  const handleLogin = () => {
    if (!mobile || !otp) {
      alert('Please enter all fields');
      return;
    }
    navigation.navigate('Onboarding')
  };

  const handleSendOTP = () => {
   setOtpEnabled(true);
  }

  return <>
        <View style={styles.welcomeContainer}>
          <YummyMart />
          <Text style={styles.WelcomeToYummymart}>Welcome to YummyMart</Text>
        </View>

    <View style={styles.container}>
     <View>
     <Text style={styles.headingText}>Login to Your account</Text> 
    <Text style={styles.description}>Nutella® is famous for its authentic taste of hazelnuts and cocoa, made even more irresistible by its unique creaminess.</Text>
<View style={{position: 'relative'}}>
<TextInput
        placeholder="Enter Mobile Number"
        style={styles.input1}
        keyboardType="numeric"
        value={mobile}
        onChangeText={setMobile}
         placeholderTextColor="#979899"
         accessible
accessibilityLabel="Mobile number input field"
      />
{mobile.length === 10 && <TouchableOpacity onPress={handleSendOTP} style={styles.verifyIcon}><Verify /></TouchableOpacity>}
</View>
      <TextInput
        placeholder="Enter OTP"
        style={[styles.input2, !isOtpEnabled && {backgroundColor: '#rgba(249, 249, 249, 1)'}]}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
         placeholderTextColor="#979899"
         editable={isOtpEnabled}
         accessible
accessibilityLabel="Otp input field"
      />
<TouchableOpacity
  style={[styles.loginButton, otp.length < 4 && { backgroundColor: 'rgba(255, 115, 0, 0.5)', borderColor: 'rgba(255, 115, 0, 0.5)' }]}
  onPress={handleLogin}
  disabled={otp.length < 4}
>
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
    color: 'black', 
    textDecorationLine: 'underline', 
    marginTop: 0, 
  },
  verifyIcon:{
    position:'absolute',
    top:39,
    right: 20
  }
});

export default Login;
