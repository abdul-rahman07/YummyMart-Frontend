import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Categories() {
  return <>

      <View style={styles.CategoriesContainer}>
        <Image
          style={styles.backBtn}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l7j9k75eoks-2461%3A2578?alt=media&token=c900e811-e307-41d1-a219-c069fd597763",
          }}
        />
        <Text style={styles.headerText}>Categories</Text>
        <Image
          style={styles.notificationIcon}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l7j9k75eoks-2461%3A2739?alt=media&token=4eabcb90-81e5-423f-b791-96dfd41096b5",
          }}
        />
      </View>

    {/* categoriesBox */}

<View style={{display:"flex",flexDirection:"column",alignItems:"center",gap:15,marginTop: 35}}>

<View style={styles.categoriesBox}>
    <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
  </View>

  <View style={styles.categoriesBoxBlue}>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
            <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
  </View>

  <View style={styles.categoriesBox}>
    <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
  </View>

  <View style={styles.categoriesBoxBlue}>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
            <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
  </View>

  <View style={styles.categoriesBox}>
    <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
  </View>

  <View style={styles.categoriesBoxBlue}>
    <Image
        style={styles.logo}
        source={{
          uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=",
        }}
        />
            <View style={styles.categoriesTextBox}>
      <Text style={styles.categoriesHeaderText}>Healthy</Text>
      <Text style={styles.categoriesDescription}>
        Bell Pepper Nutella karmen lopu Karmen mon
      </Text>
    </View>
  </View>

</View>

  </>
}

const styles = StyleSheet.create({

  CategoriesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  backBtn: {
    width: 21,
    height: 21,
  },
  headerText: {
    color: "rgba(6,22,28,1)",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 600,
  },
  notificationIcon: {
    width: 20,
    height: 25,
  },
  categoriesBox:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 16,
marginLeft : 'auto',
marginRight :"auto",
    backgroundColor: "rgba(255,217,186,1)",
    borderRadius: 10,
  },
  categoriesBoxBlue:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 16,
marginLeft : 'auto',
marginRight :"auto",
    backgroundColor: "#F1F8FF",
    borderRadius: 10,
  },
  categoriesTextBox:{
    display: "flex",
    flexDirection: "column",
  },
  categoriesHeaderText:{
    color: "rgba(6,22,28,1)",
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 600,
  },
  categoriesDescription:{
    color: "rgba(27,28,30,1)",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 500,
    width: 230,
    marginTop: 8,
  },
  logo:{
    width: 62,
    height: 62,
    borderRadius: 31,
    objectFit:"cover"
  }
})
