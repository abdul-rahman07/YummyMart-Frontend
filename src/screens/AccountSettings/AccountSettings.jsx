import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"

export default function AccountSettings() {
  return <>
    <View style={styles.accountSettingsHeader}>

        <Image
          style={styles.Left1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x7ur30fzyi-2436%3A71?alt=media&token=6e35c7f0-68b7-4c4a-95f2-d201882dae65",
          }}
        />
        <Text style={styles.AccountSettings}>Account Settings</Text>
    </View>

   {/* settingsList */}

    <View style={styles.OrdersContainer}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A826?alt=media&token=8c7461ef-d8b2-416d-8d20-746a7011c5c6",
            }}
          />
          <Text style={styles.settingText}>My Orders</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainer1}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4m5glb0qmgw-2431%3A850?alt=media&token=5c1933e6-01dc-4edc-a532-71bb0769ad07",
            }}
          />
          <Text style={styles.settingText}>My Address</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainer1}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dgx1ma9dhib-2431%3A855?alt=media&token=bfc0774a-794a-44e1-82e5-f51b22ade4f9",
            }}
          />
          <Text style={styles.settingText}>Profile</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainer1}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/wbm2e4cnpv-2431%3A841?alt=media&token=ec14a1c1-51d6-4af8-9285-8d3314f90082",
            }}
          />
          <Text style={styles.settingText}>About us</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainer1}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ysckb22e04e-2431%3A835?alt=media&token=74724413-483c-4c98-afc3-b3b3b2f0be2e",
            }}
          />
          <Text style={styles.settingText}>New Products</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainer1}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/geznl6h4736-2431%3A830?alt=media&token=df274859-34d4-4cf7-8ea5-be297c57edb9",
            }}
          />
          <Text style={styles.settingText}>Notifications</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainerDelivery}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/io244rl3hve-2453%3A841?alt=media&token=94601881-57ca-4bfc-8523-494be9261a3e",
            }}
          />
          <Text style={styles.settingText}>Become a delivery partner</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.OrdersContainerSeller}>
    <View style={{display:"flex",alignItems:"center",gap:16,flexDirection:"row"}}>
    <Image
            style={styles.settingIcon}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4wnhdcc5k2k-2453%3A834?alt=media&token=6ce642eb-64b3-4afd-a2eb-0186e2eb07ee",
            }}
          />
          <Text style={styles.settingText}>Become a seller</Text>
    </View>
          <Image
            style={styles.ChevronRight}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/btk8ip08a1k-2431%3A824?alt=media&token=2a79b883-3106-41e9-9a2a-cc87ff9b9dfc",
            }}
          />
        </View>
        <View style={styles.Rectangle4428} />

        <View style={styles.UserDetailContainer}>
        <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
        <Image
        style={styles.logo}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ora2mibtar-2431%3A1011?alt=media&token=7b681939-a392-47c3-8d80-12c1ebe9658e",
        }}
      />
        <Text style={styles.companyName}>YummyMart</Text>
        <Text style={styles.appVersion}>V1.0.1</Text>
    </View>
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
  OrdersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    marginTop: 30,
  },
  OrdersContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    marginTop: 10,
  },
  OrdersContainerDelivery: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    paddingTop: 10,
    backgroundColor: "#F1F8FF",
  },
  OrdersContainerSeller: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    width: "100%",
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    paddingTop: 10,
    backgroundColor: "#FFF3E9",
  },
  settingText: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
    marginTop:6,
  },
  ChevronRight: {
    width: 21.42,
    height: 19.41,
  },
  settingIcon: {
    width: 16,
    height: 16,
    objectFit:"contain"
  },
  Rectangle4428: {
    width: 350,
    height:1.11,
    borderRadius: 6,
    backgroundColor: "#D0CFCF",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginButton: {
    backgroundColor: "#FF7300",
    borderColor: "#FF7300",
    borderWidth: 1,
    width: 93,
height : 31,
    borderRadius: 6,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', // Optional, for a bold text
  },
  logo: {
    width: 42,
    height: 42,
  },
  companyName: {
    color: "rgba(164,164,164,1)",
    fontSize: 13,
    lineHeight: 13,
    fontWeight: 600,
    textAlign:'center'
  },
  appVersion: {
    color: "rgba(0,0,0,1)",
    fontSize: 6,
    lineHeight: 6,
    fontWeight: 500,
     textAlign:'center'
  },
  UserDetailContainer:{
    display:'flex',
    flexDirection:'column',
alignItems:'center',
justifyContent:'center',
gap:6,
marginTop: 60,
}
})
