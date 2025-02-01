import React from 'react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';

export default function Group1000004395() {
  return (
    <View style={styles.SearchBoxContainer}>
      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="What are you looking for"
          style={styles.searchInput}
          keyboardType="numeric"
          value={''}
          placeholderTextColor="#979899"
        />
        <Image
          style={styles.searchIcon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5afhhgdhak8-2499%3A196?alt=media&token=6cfcb687-513c-438b-9620-3af3e9dc270a',
          }}
        />
        <Image
          style={styles.CloseIcon}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5afhhgdhak8-2499%3A200?alt=media&token=5c511f94-9ddb-40f7-9357-540774a3125b',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBoxContainer: {
    width: '100%',
    height: 42,
    paddingRight: 20,
    paddingLeft: 20,
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: 'rgba(222,222,222,1)',
    borderRadius: 67,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 8,
    position: 'absolute',
    top: 13,
    left: 15,
  },
  CloseIcon: {
    position: 'absolute',
    top: 9,
    left: 330,
    width: 24,
    height: 24,
  },
});
