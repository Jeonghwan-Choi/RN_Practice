import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Line from "./custom/Line";

// Get screen dimensions
const screenWidth = Dimensions.get('window').width;

export default function BottomMenu() {
  const menuItems = [
    { id: '1', title: '남자패션', uri: 'https://img.a-bly.com/shortcut/shortcut_image_1676511639199031.png' },
    { id: '2', title: '의류', uri: 'https://img.a-bly.com/shortcuts/icon_category_top.png' },
    { id: '3', title: '주얼리', uri: 'https://img.a-bly.com/shortcuts/icon_category_jewelry.png' },
    { id: '4', title: '패션소품', uri: 'https://img.a-bly.com/shortcuts/icon_category_accessory.png' },
    { id: '5', title: '라이프', uri: 'https://img.a-bly.com/shortcut/shortcut_image_1644228144993922.png' },
    { id: '6', title: '신발', uri: 'https://img.a-bly.com/shortcuts/icon_category_shoes.png' },
    { id: '7', title: '디지털/핸드폰', uri: 'https://img.a-bly.com/shortcuts/icon_category_phone.png' },
    { id: '8', title: '가방', uri: 'https://img.a-bly.com/shortcuts/icon_category_bag.png' },
    { id: '9', title: '빅사이즈', uri: 'https://img.a-bly.com/shortcuts/icon_category_bigsize.png' },
  ];

  const itemWidth = screenWidth / 5; // 5 items per row

  return (
      <View style={styles.container}>
        <View style={styles.row}>
          {menuItems.slice(0, 5).map((item) => (
              <TouchableOpacity key={item.id} style={[styles.menuItem, { width: itemWidth }]}>
                <Image source={{ uri: item.uri }} style={styles.icon} />
                <Text style={styles.label}>{item.title}</Text>
              </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {menuItems.slice(5).map((item) => (
              <TouchableOpacity key={item.id} style={[styles.menuItem, { width: itemWidth }]}>
                <Image source={{ uri: item.uri }} style={styles.icon} />
                <Text style={styles.label}>{item.title}</Text>
              </TouchableOpacity>
          ))}
          {/* Placeholder for empty space */}
          <View style={[styles.placeholder, { width: itemWidth }]} />
        </View>
        <Line />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  label: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  placeholder: {
    // Empty placeholder
  },
});
