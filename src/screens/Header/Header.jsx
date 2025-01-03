import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Header({userDetails}) {
  return (


      <View style={styles.headerContainer}>

      <View style={styles.mainBox}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png",
            }}
          />
          <View style={styles.detailsContainer}>
           <Text style={styles.userName}>Hi {userDetails.name}</Text>
            <View style={styles.locationContainer}>
              <Image
                style={styles.LocationLogo}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/t1bao5whhy9-2464%3A4266?alt=media&token=3ef9ca9f-3d09-4e7e-bfc8-27b8ef50cb57",
                }}
              />

                <Text style={styles.address}>{userDetails.location}</Text>
            </View>
          </View>

        </View>

        <Image
          style={styles.notification}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/t1bao5whhy9-2464%3A3971?alt=media&token=923b9c6a-de25-4348-9882-9af25ffc9c09",
          }}
        />
      </View>

  )
}

const styles = StyleSheet.create({

    headerContainer: {
    width:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft:20,
    paddingRight:20,
    height:100,
  },
  mainBox: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: 7,
  },
  logo: {
    width: 42,
    height: "100%",
    objectFit: "contain",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 7,
    height: "100%",
  },
  userName: {
    color: "#06161C",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
gap: 4,
  },
  LocationLogo: {
    width: 20,
    height: 20,
    objectFit:"contain"
  },
  address: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#313233",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 500,
    textAlign: "center",
  },
  notification: {
    width: 20,
    height: 25,
  },
})
