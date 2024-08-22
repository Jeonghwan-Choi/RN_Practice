import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Line() {
  return (
      <View style={styles.lineContainer}></View>
  );
}

const styles = StyleSheet.create({
  lineContainer: {
    width: '96%',
    height: 1.5,
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',
  }
});
