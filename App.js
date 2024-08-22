import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import SearchBar from "./src/components/SearchBar";
import TopMenu from "./src/components/TopMenu";
import AdBar from "./src/components/AdBar";
import BottomMenu from "./src/components/BottomMenu";
import ItemList from "./src/components/item/ItemList";

// Get the screen width (if needed for any specific calculations)
const screenWidth = Dimensions.get('window').width;

export default function App() {
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('./assets/fonts/Pretendard-Black.ttf'),
    'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-ExtraBold': require('./assets/fonts/Pretendard-ExtraBold.ttf'),
    'Pretendard-ExtraLight': require('./assets/fonts/Pretendard-ExtraLight.ttf'),
    'Pretendard-Light': require('./assets/fonts/Pretendard-Light.ttf'),
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Regular': require('./assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.ttf'),
    'Pretendard-Thin': require('./assets/fonts/Pretendard-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <SafeAreaView style={styles.safeArea}>
        {/* Fixed Header */}
        <View style={styles.fixedHeader}>
          <SearchBar />
          <TopMenu />
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <AdBar />
          <BottomMenu />
          <ItemList />
          <Text style={styles.body}>
            본문 내용이 여기 표시됩니다. 적절한 폰트 크기와 줄 간격을 유지합니다.
          </Text>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedHeader: {
    width: '100%',
    backgroundColor: '#fff', // Ensure the background color matches the page
    zIndex: 1000, // Ensures the header is always above scrollable content
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    alignItems: 'center',
  },
  body: {
    width: '90%', // Ensure some padding from the sides
    fontFamily: 'Pretendard-Regular',
    fontSize: 18,
    lineHeight: 28,
    color: '#555555',
    paddingVertical: 16,
    textAlign: 'center',
  },
});
