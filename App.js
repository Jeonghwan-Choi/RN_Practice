import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';
import Header from './src/components/Header'
import SearchBar from "./src/components/SearchBar";

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
        <View style={styles.container}>
          {/* Use the Header component */}
          {/*<Header title="헤더 부분" />*/}
          <SearchBar />
          <Text style={styles.body}>
            본문 내용이 여기 표시됩니다. 적절한 폰트 크기와 줄 간격을 유지합니다.
          </Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eae9ff', // 배경색을 SafeArea에도 적용
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 18,
    lineHeight: 28,
    color: '#555555',
  },
});
