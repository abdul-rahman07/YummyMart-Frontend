import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import YummyMart from '../../../assets/YummyMart.svg';

export default function Onboarding() {
  const route = useRoute();
  const navigation = useNavigation();
  const { mobile } = route.params;
  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    receiveWhatsapp: false,
    receiveSMS: false,
    receiveEmail: false,
  });
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlert = (alertMsg) => {
    setShowAlert(true);
    setAlertMessage(alertMsg);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
    }, 3000);
  };

  const handleUserDetailChange = (key, value) => {
    setUserDetail({ ...userDetail, [key]: value });
    setEnableSubmit(userDetail.name && userDetail.email);
  };

  const handleCompleteOnboard = async () => {
    console.log({ mobile, ...userDetail });
    const submitRes = await fetch('http://10.0.2.2:4000/user/onboarding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile, ...userDetail }),
    });
    if (submitRes.ok) {
      navigation.navigate('HomeScreen', { mobile });
    } else {
      handleAlert('Failed to submit details. Please try again');
    }
  };

  return (
    <>
      {showAlert && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{alertMessage}</Text>
        </View>
      )}
      <View style={styles.Onboarding}>
        <View style={styles.welcomeContainer}>
          <YummyMart />
          <Text style={styles.WelcomeToYummymart}>Welcome to YummyMart</Text>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={styles.headingText}>
              Please fill these details to proceed further
            </Text>
            <Text style={styles.description}>
              Nutella® is famous for its authentic taste of hazelnuts and cocoa,
              made even more irresistible by its unique creaminess.
            </Text>
            <TextInput
              placeholder="Enter your name"
              style={styles.input1}
              keyboardType="numeric"
              value={userDetail.name}
              accessible
              accessibilityLabel="Mobile number name"
              onChangeText={(text) => handleUserDetailChange('name', text)}
              placeholderTextColor="#979899"
            />
            <TextInput
              placeholder="Enter your email"
              style={styles.input2}
              keyboardType="numeric"
              value={userDetail.email}
              onChangeText={(text) => handleUserDetailChange('email', text)}
              placeholderTextColor="#979899"
              accessible
              accessibilityLabel="Mobile number email"
            />

            {/* checkbox */}

            <CheckBox
              title="Get regular updates via Whatsapp"
              checked={userDetail.receiveWhatsapp}
              onPress={() =>
                handleUserDetailChange(
                  'receiveWhatsapp',
                  !userDetail.receiveWhatsapp,
                )
              }
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                marginVertical: 0,
                padding: 0,
                marginTop: 20,
              }}
              textStyle={{
                margin: 0,
                padding: 0,
              }}
              checkedIcon={
                <Icon
                  name="check-box"
                  type="MaterialIcons"
                  size={24}
                  color="#0855AE"
                />
              }
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  type="MaterialIcons"
                  size={24}
                  color="gray"
                />
              }
            />

            <CheckBox
              title="Get regular updates via SMS"
              checked={userDetail.receiveSMS}
              onPress={() =>
                handleUserDetailChange('receiveSMS', !userDetail.receiveSMS)
              }
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                marginVertical: 4,
                padding: 0,
              }}
              textStyle={{
                margin: 0,
                padding: 0,
              }}
              checkedIcon={
                <Icon
                  name="check-box"
                  type="MaterialIcons"
                  size={24}
                  color="#0855AE"
                />
              }
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  type="MaterialIcons"
                  size={24}
                  color="gray"
                />
              }
            />

            <CheckBox
              title="Get regular updates via Email"
              checked={userDetail.receiveEmail}
              onPress={() =>
                handleUserDetailChange('receiveEmail', !userDetail.receiveEmail)
              }
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                marginVertical: 4,
                padding: 0,
              }}
              textStyle={{
                margin: 0,
                padding: 0,
              }}
              checkedIcon={
                <Icon
                  name="check-box"
                  type="MaterialIcons"
                  size={24}
                  color="#0855AE"
                />
              }
              uncheckedIcon={
                <Icon
                  name="check-box-outline-blank"
                  type="MaterialIcons"
                  size={24}
                  color="gray"
                />
              }
            />

            <View>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  (userDetail.name.length === 0 ||
                    userDetail.email.length === 0) && {
                    backgroundColor: 'rgba(255, 115, 0, 0.5)',
                    borderColor: 'rgba(255, 115, 0, 0.5)',
                  },
                ]}
                disabled={!enableSubmit}
                onPress={handleCompleteOnboard}
              >
                <Text style={styles.buttonText}>Complete Onboard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Onboarding: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 844,
    borderRadius: 24,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 20,
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    gap: 20,
    marginTop: 20,
  },
  logo: {
    width: 30,
    height: '100%',
  },
  WelcomeToYummymart: {
    color: 'rgba(112,112,112,1)',
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 400,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'start',
    marginTop: 60,
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
    marginTop: 8,
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
    backgroundColor: '#FF7300',
    borderColor: '#FF7300',
    borderWidth: 1,
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    borderRadius: 100,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', // Optional, for a bold text
  },
});
