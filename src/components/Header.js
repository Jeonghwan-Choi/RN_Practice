// Header.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from "./SearchBar";

export default function Header({ title }) {
  return (
      <View style={styles.headerContainer}>
        <SearchBar />
      </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffd5d5', // You can adjust the background color to your theme
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    width: '100%',
    height: 50,
    paddingTop: 8,
    paddingLeft: 5
  },
  headerText: {
    fontFamily: 'Pretendard-Bold',
    // fontSize: 24,
  },
});
