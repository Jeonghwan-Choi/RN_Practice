import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function AdBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const adImages = [
    { id: '1', uri: 'https://img.a-bly.com/banner/images/banner_image_1693188661946844.png' },
    { id: '2', uri: 'https://img.a-bly.com/banner/images/banner_image_1724113353644797.gif' },
    { id: '3', uri: 'https://img.a-bly.com/banner/images/banner_image_1724204239061204.png' },
  ];

  const totalImages = adImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      let nextIndex = currentIndex + 1;
      if (nextIndex >= totalImages) {
        nextIndex = 0; // Reset to first image if at the end
      }

      // Scroll to the next image
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });

      // Update current index state
      setCurrentIndex(nextIndex);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, totalImages]);

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
      <View style={styles.container}>
        <FlatList
            ref={flatListRef}
            data={adImages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Image source={{ uri: item.uri }} style={styles.adImage} />
            )}
        />
        <View style={styles.paginationContainer}>
          <Text style={styles.paginationText}>{currentIndex + 1} / {totalImages}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },
  adImage: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 5,
    borderRadius: 5,
  },
  paginationText: {
    fontFamily: 'Pretendard-Medium',
    color: '#fff',
    fontSize: 16,
  },
});
