import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import Verify from '../../../assets/verify.svg'; // Adjust the path based on your folder structure
import YummyMart from '../../../assets/YummyMart.svg';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isOtpEnabled, setOtpEnabled] = useState(false);

  const handleAlert = (alertMsg) => {
    setShowAlert(true);
    setAlertMessage(alertMsg);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  }

  const sendOTP = async () => {
    if (!mobile) {
      handleAlert('Please enter mobile number');
      return;
    }

    try {
      const sendOTPRes = await fetch('http://10.0.2.2:4000/send/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });
    
      if (sendOTPRes.ok) {
        handleAlert('OTP sent successfully');
        setOtpEnabled(true);
      } else {
        const errorData = await sendOTPRes.json();
        console.log('Response error data:', errorData);
        handleAlert('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      handleAlert('An error occurred while sending OTP');
    }
  };  

  const handleLogin = async () => {
    if (!mobile || !otp) {
      handleAlert('Please enter all fields');
      return;
    }
    try{
      const verifyOTPRes = await fetch('http://10.0.2.2:4000/verify/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp }),
      });
      const verifyOTPData = await verifyOTPRes.json();
      handleAlert(verifyOTPData.message);
      if (verifyOTPData.isVerified && verifyOTPData.isNewUser) {
        navigation.navigate('Onboarding', { mobile });
      } else if (verifyOTPData.isVerified && !verifyOTPData.isNewUser) {
        navigation.navigate('HomeScreen', { mobile });
      }
    }catch(err){
      handleAlert('Error while login')
    }
  };

  return <>
    {showAlert && <View style={styles.alertContainer}>
      <Text style={styles.alertText}>{alertMessage}</Text>
    </View>}
    <View style={styles.welcomeContainer}>
      <YummyMart />
      <Text style={styles.WelcomeToYummymart}>Welcome to YummyMart</Text>
    </View>

    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Login to Your account</Text>
        <Text style={styles.description}>Nutella® is famous for its authentic taste of hazelnuts and cocoa, made even more irresistible by its unique creaminess.</Text>
        <View style={{ position: 'relative' }}>
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
          {mobile.length === 10 && !isOtpEnabled ? (
       
             <Text style={styles.send} onPress={sendOTP}>send</Text>
        
          ) : mobile.length === 10 && isOtpEnabled  ? (
            <TouchableOpacity  style={styles.verifyIcon}><Verify /></TouchableOpacity>
          ) : (
            null
          )}
        </View>
        <TextInput
          placeholder="Enter OTP"
          style={[styles.input2, !isOtpEnabled && { backgroundColor: '#rgba(249, 249, 249, 1)' }]}
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
  headingText: {
    fontSize: 40,
    fontWeight: '500',
    color: '#06161C',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#979899',
    marginTop: 8
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
  sendOTPButton: {
    backgroundColor: "#FF7300",
    borderColor: "#FF7300",
    borderWidth: 1,
    width: '30%',
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
  policyText: {
    color: '#A9A9AA',
    fontSize: 16,
    textAlign: 'center'
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 0,
  },
  alertContainer: {
    position: 'absolute',
    top: '10px',
    left: 0,
    right: 0,
    backgroundColor: '#4f4b48',
    padding: 10,
  },
  alertText: {
    color: '#fff',
    textAlign: 'center',
  },
  verifyIcon: {
    position: 'absolute',
    top: 39,
    right: 20
  },
  send: {
    position: 'absolute',
    top: 40,
    left: 300,
    color:"#0856AF",
  }
});

export default Login;
