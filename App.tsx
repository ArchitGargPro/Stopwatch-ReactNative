import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StopwatchContainer from "./stopwatch/stopwatch.container";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stopwatch</Text>
      <StopwatchContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
