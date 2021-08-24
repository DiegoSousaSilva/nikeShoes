import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStartColor: COLORS.white,
  },
});

export default Home;
