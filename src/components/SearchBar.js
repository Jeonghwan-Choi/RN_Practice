import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
      <View style={styles.barContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" style={styles.icon} size={24} color="#595959" />
          <TextInput style={styles.input} placeholder="검색" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" style={styles.icon} size={24} color="#595959" />
          <Ionicons name="cart-outline" style={styles.icon} size={24} color="#595959" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row', // Aligns children horizontally
    alignItems: 'center', // Centers vertically
    justifyContent: 'space-between', // Space between elements
    paddingHorizontal: 10, // Adds some padding to the sides
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: 'row', // Aligns children in a row (icon and input)
    alignItems: 'center', // Vertically center items
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flex: 1, // Takes up the maximum available width
    marginRight: 3, // Adds some space between the search bar and the icons
    paddingHorizontal: 0, // Adds padding inside the search bar
    height: '90%', // Ensures the search bar fills the parent height
  },
  input: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 20,
    color: '#595959', // Text color
    flex: 1, // Take up the remaining space inside the search bar
    marginLeft: 10, // Space between the icon and the text input
    height: '90%',
  },
  iconContainer: {
    flexDirection: 'row', // Arrange notification and cart icons in a row
    alignItems: 'center', // Vertically center icons
  },
  icon: {
    marginLeft: 5, // Adds spacing between the icons
    marginRight: 5, // Adds spacing between the icons
  }
});
