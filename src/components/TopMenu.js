import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function TopMenu() {
  const [selectedItem, setSelectedItem] = useState('투데이'); // Default selected item

  const menuItems = ['투데이', '쇼핑몰', '삭-출발', '스트릿', '코디', '베스트', '핫'];

  return (
      <View style={styles.barContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {menuItems.map((menuItem, index) => (
              <TouchableOpacity
                  key={index}
                  style={[
                    styles.menuItem,
                    selectedItem === menuItem && styles.selectedMenuItem
                  ]}
                  onPress={() => setSelectedItem(menuItem)}
              >
                <Text
                    style={[
                      styles.menuText,
                      selectedItem === menuItem && styles.selectedMenuText
                    ]}
                >
                  {menuItem}
                </Text>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedMenuItem: {
    borderBottomColor: '#000',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Pretendard-Medium',
  },
  selectedMenuText: {
    fontFamily: 'Pretendard-Bold',
  },
});
