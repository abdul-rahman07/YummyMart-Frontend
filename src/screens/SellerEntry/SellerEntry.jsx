import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { launchImageLibrary } from 'react-native-image-picker';

export default function SellerEntry() {
  const navigation = useNavigation();
  const route = useRoute();
  const { resubmit, mobile } = route.params || { resubmit: false, mobile: '' }; // Add fallback to avoid undefined
  const [gst_number, setGst_number] = useState(''); //31837917363
  const [showForm, setShowForm] = useState(false);
  const [sellerDetails, setSellerDetails] = useState({
    name: '',
    seller_type: '', // show these in dropdown - dealer, distributor, manufacturer, wholesaler, retailer
    image_url: '', // upload store image
    address: '',
    rating: '', // google rating (optional)
    reviews: '', // google reviews (optional)
    pancard: '',
    pancard_url: '',
    gstnumber: gst_number || '22ABCDE1234F1Z5', // read-only (keep the same as entered GST number)
    gstnumber_url: '',
    mobile: mobile, // read-only (keep the same as user's phone number)
    fssai_license_number: '',
    fssai_cert_url: '',
    msme_license_number: '',
    msme_cert_url: '',
    dealer_cert_url: '', // show only if seller_type is dealer
    distributor_cert_url: '', // show only if seller_type is distributor
  });

  const sellerTypes = [
    { label: 'Seller', value: 'seller' },
    { label: 'Dealer', value: 'dealer' },
    { label: 'Distributor', value: 'distributor' },
  ];

  useEffect(() => {
    const fetchSellerDetails = async () => {
      if (resubmit) {
        try {
          const response = await fetch(
            'https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ mobile, path: '/seller-submitted-details' }),
            },
          );
          const {body} = await response.json();
          setSellerDetails(body);
        } catch (error) {
          console.error('Error fetching seller details:', error);
        }
      }
    };

    fetchSellerDetails();
  }, [resubmit]);

  const submitGSTNumber = () => {
    let validateGST = true;
    let gstPattern =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    if (gst_number.length !== 15) {
      // GST number should be 15 characters = (22ABCDE1234F1Z5) example number
      validateGST = false;
    }
    if (!gstPattern.test(gst_number)) {
      validateGST = false;
    }

    if (validateGST) {
      setShowForm(true);
    } else {
      alert('Invalid GST number');
    }
  };

  const registerSeller = async () => {
    if (
      !sellerDetails.name ||
      !sellerDetails.seller_type ||
      !sellerDetails.address ||
      !sellerDetails.pancard ||
      !sellerDetails.fssai_license_number ||
      !sellerDetails.msme_license_number ||
      !sellerDetails.gstnumber ||
      !sellerDetails.pancard_url ||
      !sellerDetails.gstnumber_url ||
      !sellerDetails.fssai_cert_url ||
      !sellerDetails.msme_cert_url
    ) {
      alert('Please enter all fields');
      return;
    }
    if (
      sellerDetails.seller_type === 'dealer' &&
      !sellerDetails.dealer_cert_url
    ) {
      alert('Please upload dealer certificate');
      return;
    }
    if (
      sellerDetails.seller_type === 'distributor' &&
      !sellerDetails.distributor_cert_url
    ) {
      alert('Please upload distributor certificate');
      return;
    }

    const response = await fetch('https://akk31sm8ig.execute-api.us-east-1.amazonaws.com/default', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...sellerDetails,
        gstnumber: gst_number,
        mobile,
        resubmit,
        path: '/register/seller'
      }),
    });
    const {body} = await response.json();
    if (body.success) {
      alert('Seller registered successfully');
    } else {
      alert('Failed to register seller');
    }
  };

  const handleImageUpload = (field) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else {
        // Update the state with the image URL
        setSellerDetails((prevDetails) => ({
          ...prevDetails,
          [field]: response.assets[0].uri, // Store the image URI in sellerDetails
        }));
      }
    });
  };

  return (
    <>
      <View style={styles.accountSettingsHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ height: 21 }}
        >
          <Image
            style={styles.Left1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x7ur30fzyi-2436%3A71?alt=media&token=6e35c7f0-68b7-4c4a-95f2-d201882dae65',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.AccountSettings}>Seller Entry</Text>
      </View>

      {/* SellerForm */}

      <View style={styles.SellerUIContainer}>
        <View style={styles.SellerUIContent}>
          <View style={styles.Header}>
            <Image
              style={styles.sellerIcon}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/e07t3rjl96-2539%3A182?alt=media&token=ebcb999c-dfc7-4d4b-a81f-f1d9ae88e672',
              }}
            />
            <Text style={styles.headerText}>
              Want to sell your products here ?
            </Text>
          </View>
          <Text style={styles.inputLabel}>GST NUMBER</Text>
          <TextInput
            placeholder="Enter GST Number"
            style={styles.input2}
            keyboardType="numeric"
            value={gst_number}
            placeholderTextColor="#979899"
            onChangeText={(text) => setGst_number(text)}
          />
          <TouchableOpacity
            style={[styles.loginButton, showForm && styles.disabledButton]}
            onPress={submitGSTNumber}
            disabled={showForm}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showForm ? (
        <>
          <ScrollView
            style={[
              styles.SellerUIContainer,
              { height: '100%', marginBottom: 20 },
            ]}
          >
            <View style={styles.SellerUIContent}>
              <Text style={styles.inputLabel}>Seller Name</Text>
              <TextInput
                placeholder="Enter Seller Name"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.name}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, name: text })
                }
              />

              <Text style={styles.inputLabel}>Seller Type</Text>
              {/* For dropdown puth this RNPickerSelect inisde View*/}
              <View style={styles.inputDropdown}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Select Seller Type',
                    value: null,
                    color: '#979899',
                  }}
                  onValueChange={(value) =>
                    setSellerDetails({ ...sellerDetails, seller_type: value })
                  }
                  items={sellerTypes}
                  value={sellerDetails.seller_type}
                />
              </View>

              <Text style={styles.inputLabel}>Seller Address</Text>
              <TextInput
                placeholder="Enter Full Address"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.address}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, address: text })
                }
              />
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <TextInput
                placeholder="Enter Mobile Number"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.mobile}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, mobile: text })
                }
                //readOnly
              />
              <Text style={styles.inputLabel}>Store Image</Text>
              {/* Change the below to file upload - react-native-document-picker */}
              <TouchableOpacity
                style={styles.input2}
                onPress={() => handleImageUpload('image_url')}
              >
                {sellerDetails.image_url ? (
                  <Image
                    source={{ uri: sellerDetails.image_url }}
                    style={styles.image}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      { color: '#979899', fontWeight: 500 },
                    ]}
                  >
                    No image selected
                  </Text>
                )}
              </TouchableOpacity>
              <Text style={styles.inputLabel}>Google Rating</Text>
              <TextInput
                placeholder="Enter Google Rating"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.rating}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, rating: text })
                }
              />
              <Text style={styles.inputLabel}>Google Reviews</Text>
              <TextInput
                placeholder="Enter Google Reviews"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.reviews}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, reviews: text })
                }
              />
              <Text style={styles.inputLabel}>Pancard Number</Text>
              <TextInput
                placeholder="Enter Pancard Number"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.pancard}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, pancard: text })
                }
              />
              <Text style={styles.inputLabel}>FSSAI License Number</Text>
              <TextInput
                placeholder="Enter FSSAI License Number"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.fssai_license_number}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({
                    ...sellerDetails,
                    fssai_license_number: text,
                  })
                }
              />
              <Text style={styles.inputLabel}>MSME License Number</Text>
              <TextInput
                placeholder="Enter MSME License Number"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.msme_license_number}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({
                    ...sellerDetails,
                    msme_license_number: text,
                  })
                }
              />
              <Text style={styles.inputLabel}>GST Number</Text>
              <TextInput
                placeholder="Enter GST Number"
                style={styles.input2}
                keyboardType="numeric"
                value={sellerDetails.gstnumber}
                placeholderTextColor="#979899"
                onChangeText={(text) =>
                  setSellerDetails({ ...sellerDetails, gstnumber: text })
                }
                //readOnly
              />
              <Text style={styles.inputLabel}>Upload GST Certificate</Text>
              {/* Change the below to file upload - react-native-document-picker */}
              <TouchableOpacity
                style={styles.input2}
                onPress={() => handleImageUpload('gstnumber_url')}
              >
                {sellerDetails.gstnumber_url ? (
                  <Image
                    source={{ uri: sellerDetails.gstnumber_url }}
                    style={styles.image}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      { color: '#979899', fontWeight: 500 },
                    ]}
                  >
                    No image selected
                  </Text>
                )}
              </TouchableOpacity>
              <Text style={styles.inputLabel}>Upload Pancard</Text>
              {/* Change the below to file upload - react-native-document-picker */}
              <TouchableOpacity
                style={styles.input2}
                onPress={() => handleImageUpload('pancard_url')}
              >
                {sellerDetails.pancard_url ? (
                  <Image
                    source={{ uri: sellerDetails.pancard_url }}
                    style={styles.image}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      { color: '#979899', fontWeight: 500 },
                    ]}
                  >
                    No image selected
                  </Text>
                )}
              </TouchableOpacity>
              <Text style={styles.inputLabel}>Upload FSSAI Certificate</Text>
              {/* Change the below to file upload - react-native-document-picker */}
              <TouchableOpacity
                style={styles.input2}
                onPress={() => handleImageUpload('fssai_cert_url')}
              >
                {sellerDetails.fssai_cert_url ? (
                  <Image
                    source={{ uri: sellerDetails.fssai_cert_url }}
                    style={styles.image}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      { color: '#979899', fontWeight: 500 },
                    ]}
                  >
                    No image selected
                  </Text>
                )}
              </TouchableOpacity>
              <Text style={styles.inputLabel}>Upload MSME Certificate</Text>
              {/* Change the below to file upload - react-native-document-picker */}
              <TouchableOpacity
                style={styles.input2}
                onPress={() => handleImageUpload('msme_cert_url')}
              >
                {sellerDetails.msme_cert_url ? (
                  <Image
                    source={{ uri: sellerDetails.msme_cert_url }}
                    style={styles.image}
                  />
                ) : (
                  <Text
                    style={[
                      styles.buttonText,
                      { color: '#979899', fontWeight: 500 },
                    ]}
                  >
                    No image selected
                  </Text>
                )}
              </TouchableOpacity>
              {sellerDetails.seller_type === 'dealer' ? (
                <>
                  <Text style={styles.inputLabel}>
                    Upload Dealer Certificate
                  </Text>
                  {/* Change the below to file upload - react-native-document-picker */}
                  <TouchableOpacity
                    style={styles.input2}
                    onPress={() => handleImageUpload('dealer_cert_url')}
                  >
                    {sellerDetails.dealer_cert_url ? (
                      <Image
                        source={{ uri: sellerDetails.dealer_cert_url }}
                        style={styles.image}
                      />
                    ) : (
                      <Text
                        style={[
                          styles.buttonText,
                          { color: '#979899', fontWeight: 500 },
                        ]}
                      >
                        No image selected
                      </Text>
                    )}
                  </TouchableOpacity>
                </>
              ) : null}
              {sellerDetails.seller_type === 'distributor' ? (
                <>
                  <Text style={styles.inputLabel}>
                    Upload Distributor Certificate
                  </Text>
                  {/* Change the below to file upload - react-native-document-picker */}
                  <TouchableOpacity
                    style={styles.input2}
                    onPress={( ) => handleImageUpload('distributor_cert_url')}
                  >
                    {sellerDetails.distributor_cert_url ? (
                      <Image
                        source={{ uri: sellerDetails.distributor_cert_url }}
                        style={styles.image}
                      />
                    ) : (
                      <Text
                        style={[
                          styles.buttonText,
                          { color: '#979899', fontWeight: 500 },
                        ]}
                      >
                        No image selected
                      </Text>
                    )}
                  </TouchableOpacity>
                </>
              ) : null}
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { marginBottom: 40, marginTop: 10 },
                ]}
                onPress={registerSeller}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  accountSettingsHeader: {
    width: 251,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
  },
  Left1: {
    width: 21,
    height: '100%',
  },
  AccountSettings: {
    color: 'rgba(6,22,28,1)',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 600,
  },
  SellerUIContainer: {
    width: '90%',
    height: 210,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 15,
    paddingBottom: 23,
    borderWidth: 1,
    borderColor: 'rgba(255,178,116,1)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,217,186,1)',
    marginHorizontal: 'auto',
    marginTop: 30,
  },
  SellerUIContainerForm: {
    width: '90%',
    height: '100%',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,178,116,1)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,217,186,1)',
    marginHorizontal: 'auto',
    marginTop: 30,
  },
  SellerUIContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  sellerIcon: {
    width: 20,
    height: 20,
    objectFit: 'cover',
  },
  headerText: {
    color: 'rgba(6,22,28,1)',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 600,
  },
  inputLabel: {
    color: 'rgba(6,22,28,1)',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 600,
    marginTop: 18,
  },
  input2: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginVertical: 10,
    backgroundColor: '#FFB274',
    borderRadius: 6,
    fontSize: 14,
    marginTop: 10,
  },
  inputDropdown: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#FFB274',
    borderRadius: 6,
    fontSize: 14,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#0856AF',
    borderColor: '#0856AF',
    borderWidth: 1,
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    borderRadius: 6,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
    marginTop: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', // Optional, for a bold text
  },
  disabledButton: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginVertical: 4,
  },
});
