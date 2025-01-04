import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity,TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function SellerEntry() {
    const navigation = useNavigation()
    const [gst_number, setGst_number] = React.useState('')  //31837917363
    
  return <>
    <View style={styles.accountSettingsHeader}>
<TouchableOpacity onPress={() => navigation.goBack()} style={{height: 21}}>
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
            <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
            {
              // form
              // 1. Seller Name,
              // 2. Contact details,
              // 3. Sellers type (Manufacturer, Distrubutor, Delar, Wholesale, Retail, Trading). 
              // 4. GST number
              // 5. Pan card number give Auto write from GST number itself. 
              // 5. Seller Address (Auto location verification is better or give manual entry itself)
              // 5. Fssai license number. 
              // 6. Udyam (MSME lisence number).

              // Uploading of documents except bank details 
              // 1. If a seller is Delar or Distributer auto enable option to upload Delar or Distributer certificate lisence from their brands.
              // 2. GST certificate 
              // 3. Fssai license 
              // 4. Udyam MSME certificate. 


            }
  </>
}

const styles = StyleSheet.create({
    accountSettingsHeader: {
    width: 251,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingTop:20,
    paddingLeft:20,
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
    alignItems:"center",
    gap: 16,
    width: "100%",
  },
  sellerIcon: {
    width: 20,
    height: 20,
    objectFit:"cover"
  },
  headerText: {
    color: "rgba(6,22,28,1)",
    fontSize:14,
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
