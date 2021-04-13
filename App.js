import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusObject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where I'm going to focus on {focusSubject}</Text>
      ) : (
        <Focus />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88d0eb"
  },
});
