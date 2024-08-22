import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ItemList() {
  const items = [
    {
      id: '1',
      imageUri: 'https://d3ha2047wt6x28.cloudfront.net/SNxS1gL38Y8/pr:NEW_GOODS_THUMB_WEBP/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzEyMjhlZTkyYmJhMGU2MDg3MmE3ZjczYjE3OWY5YjRjLmdpZg',
      discount: '25%',
      price: '27,000',
      title: '아뜨랑스',
      description: 'bs6674 여리한 시스루...',
    },
    {
      id: '2',
      imageUri: 'https://d3ha2047wt6x28.cloudfront.net/bTv7fJirgi8/pr:NEW_GOODS_THUMB_WEBP/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzgyZjk2ZWY4MGNiOWQwZTA4NmNhYWI5YzczNDYyNDFjLmpwZw',
      discount: '48%',
      price: '19,800',
      title: '그레이스뮤즈',
      description: '[인생원피스]라랄 플라...',
    },
    {
      id: '3',
      imageUri: 'https://d3ha2047wt6x28.cloudfront.net/LUKGphQoRJo/pr:NEW_GOODS_THUMB_WEBP/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzL2ZmNzI0Nzc5ZTg3OGFlNDk4OGFmMTNhZjEzZDU4Nzk1LmdpZg',
      discount: '50%',
      price: '19,000',
      title: '어썸엘르',
      description: '르니 요루 쉬폰 블라우...',
    },
  ];

  return (
      <View style={styles.container}>
        <View style={styles.rowTitle}>
          <Text style={styles.headerText}>디자이너스님을 위한 추천상품</Text>
          <Text style={styles.sponsoredText}>sponsored</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item) => (
              <TouchableOpacity key={item.id} style={styles.itemContainer}>
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
                  <View style={styles.favoriteIcon}>
                    <Text>❤️</Text>
                  </View>
                </View>
                <View style={styles.itemDetails}>
                  <View style={styles.row}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                    <Text style={styles.priceText}>{item.price}</Text>
                  </View>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 23,
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sponsoredText: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
    color: '#999',
    marginBottom: 12,
  },
  itemContainer: {
    marginRight: 16,
    width: 150,
  },
  imageWrapper: {
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 4,
  },
  itemDetails: {
    fontFamily: 'Pretendard-Medium',
    marginTop: 8,
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between header and sponsored
    alignItems: 'center', // Align items in the center vertically (optional)
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items in the center vertically (optional)
  },
  discountText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 17,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 7,
  },
  priceText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#3f3f3f',
  },
  titleText: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    color: '#7e7d7d',
    marginBottom: 3,
  },
  descriptionText: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
    color: '#7c7c7c',
  },
});
