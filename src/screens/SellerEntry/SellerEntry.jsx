import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useRoute } from '@react-navigation/native';

export default function SellerEntry() {
  const navigation = useNavigation()
  const route = useRoute();
  const { resubmit, mobile } = route.params || { resubmit: false, mobile: '' }; // Add fallback to avoid undefined
  const [gst_number, setGst_number] = useState('')  //31837917363
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
    gstnumber: '',
    gstnumber_url: '',
    mobile: mobile, // read-only (keep the same as user's phone number)
    fssai_license_number: '',
    fssai_cert_url: '',
    msme_license_number: '',
    msme_cert_url: '',
    dealer_cert_url: '', // show only if seller_type is dealer
    distributor_cert_url: '', // show only if seller_type is distributor    
  });

  useEffect(async () => {
    if(resubmit) {
      const response = await fetch('http://10.0.2.2:4000/seller-submitted-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });
      const sellerData = await response.json();
      setSellerDetails(sellerData);
    }
  }, []);

  const submitGSTNumber = () => {
    let validateGST = true;
    let gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    if (gst_number.length !== 15) {
      validateGST = false;
    }
    if (!gstPattern.test(gst_number)) {
      validateGST = false;
    }

    if(validateGST) {
      setShowForm(true);
    } else {
      alert('Invalid GST number');
    }
  }

  const registerSeller = async () => {
    if (!sellerDetails.name || !sellerDetails.seller_type || !sellerDetails.address || !sellerDetails.pancard || !sellerDetails.fssai_license_number || !sellerDetails.msme_license_number || !sellerDetails.gstnumber || !sellerDetails.pancard_url || !sellerDetails.gstnumber_url || !sellerDetails.fssai_cert_url || !sellerDetails.msme_cert_url) {
      alert('Please enter all fields');
      return;
    }
    if(sellerDetails.seller_type === 'dealer' && !sellerDetails.dealer_cert_url) {
      alert('Please upload dealer certificate');
      return;
    }
    if(sellerDetails.seller_type === 'distributor' && !sellerDetails.distributor_cert_url) {
      alert('Please upload distributor certificate');
      return;
    }

    const response = await fetch('http://10.0.2.2:4000/register/seller', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...sellerDetails, gstnumber: gst_number, mobile, resubmit }),
    });
    const responseData = await response.json();
    if(responseData.success) {
      alert('Seller registered successfully');
    } else {
      alert('Failed to register seller');
    }

  }

  return <>
    <View style={styles.accountSettingsHeader}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 21 }}>
        <Image
          style={styles.Left1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x7ur30fzyi-2436%3A71?alt=media&token=6e35c7f0-68b7-4c4a-95f2-d201882dae65",
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
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/e07t3rjl96-2539%3A182?alt=media&token=ebcb999c-dfc7-4d4b-a81f-f1d9ae88e672",
            }}
          />
          <Text style={styles.headerText}>
            Want to sell your products here ?
          </Text>
        </View>
        <Text style={styles.inputLabel}>GST NUMBER</Text>
        <TextInput
          placeholder="Enter OTP"
          style={styles.input2}
          keyboardType="numeric"
          value={gst_number}
          placeholderTextColor="#979899"
        />
        <TouchableOpacity style={styles.loginButton} onPress={submitGSTNumber}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    {
      showForm ? <>
        <View style={styles.SellerUIContainer}>
          <View style={styles.SellerUIContent}>
            <Text style={styles.inputLabel}>Seller Name</Text>
            <TextInput
              placeholder="Enter Seller Name"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.name}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Seller Type</Text>
            {/* Change the below to dropdown - react-native-picker-select */}
            <TextInput
              placeholder="Enter Seller Type"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.seller_type}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Seller Address</Text>
            <TextInput
              placeholder="Enter Full Address"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.address}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.mobile}
              placeholderTextColor="#979899"
              readOnly
            />
            <Text style={styles.inputLabel}>Store Image</Text>
            {/* Change the below to file upload - react-native-document-picker */}
            <TextInput
              placeholder="Upload Store Image"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.image_url}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Google Rating</Text>
            <TextInput
              placeholder="Enter Google Rating"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.rating}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Google Reviews</Text>
            <TextInput
              placeholder="Enter Google Reviews"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.reviews}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Pancard Number</Text>
            <TextInput
              placeholder="Enter Pancard Number"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.pancard}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>FSSAI License Number</Text>
            <TextInput
              placeholder="Enter FSSAI License Number"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.fssai_license_number}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>MSME License Number</Text>
            <TextInput
              placeholder="Enter MSME License Number"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.msme_license_number}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>GST Number</Text>
            <TextInput
              placeholder="Enter GST Number"
              style={styles.input2}
              keyboardType="numeric"
              value={gst_number}
              placeholderTextColor="#979899"
              readOnly
            />
            <Text style={styles.inputLabel}>Upload GST Certificate</Text>
            {/* Change the below to file upload - react-native-document-picker */}
            <TextInput
              placeholder="Upload GST Certificate"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.gstnumber_url}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Upload Pancard</Text>
            {/* Change the below to file upload - react-native-document-picker */}
            <TextInput
              placeholder="Upload Pancard"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.pancard_url}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Upload FSSAI Certificate</Text>
            {/* Change the below to file upload - react-native-document-picker */}
            <TextInput
              placeholder="Upload FSSAI Certificate"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.fssai_cert_url}
              placeholderTextColor="#979899"
            />
            <Text style={styles.inputLabel}>Upload MSME Certificate</Text>
            {/* Change the below to file upload - react-native-document-picker */}
            <TextInput
              placeholder="Upload MSME Certificate"
              style={styles.input2}
              keyboardType="numeric"
              value={sellerDetails.msme_cert_url}
              placeholderTextColor="#979899"
            />
            {
              sellerDetails.seller_type === 'dealer' ? <>
                <Text style={styles.inputLabel}>Upload Dealer Certificate</Text>
                {/* Change the below to file upload - react-native-document-picker */}
                <TextInput
                  placeholder="Upload Dealer Certificate"
                  style={styles.input2}
                  keyboardType="numeric"
                  value={sellerDetails.dealer_cert_url}
                  placeholderTextColor="#979899"
                />
              </> : null
            }
            {
              sellerDetails.seller_type === 'distributor' ? <>
                <Text style={styles.inputLabel}>Upload Distributor Certificate</Text>
                {/* Change the below to file upload - react-native-document-picker */}
                <TextInput
                  placeholder="Upload Distributor Certificate"
                  style={styles.input2}
                  keyboardType="numeric"
                  value={sellerDetails.distributor_cert_url}
                  placeholderTextColor="#979899"
                />
              </> : null
            }
            <TouchableOpacity style={styles.loginButton} onPress={registerSeller}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </> : null

    }
  </>
}

const styles = StyleSheet.create({
  accountSettingsHeader: {
    width: 251,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
  },
  Left1: {
    width: 21,
    height: "100%",
  },
  AccountSettings: {
    color: "rgba(6,22,28,1)",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 600,
  },
  SellerUIContainer: {
    width: "90%",
    height: 210,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 15,
    paddingBottom: 23,
    borderWidth: 1,
    borderColor: "rgba(255,178,116,1)",
    borderRadius: 6,
    backgroundColor: "rgba(255,217,186,1)",
    marginHorizontal: 'auto',
    marginTop: 30
  },
  SellerUIContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    width: "100%",
  },
  sellerIcon: {
    width: 20,
    height: 20,
    objectFit: "cover"
  },
  headerText: {
    color: "rgba(6,22,28,1)",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 600,
  },
  inputLabel: {
    color: "rgba(6,22,28,1)",
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
    backgroundColor: "#FFB274",
    borderRadius: 6,
    fontSize: 14,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#0856AF",
    borderColor: "#0856AF",
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
})
