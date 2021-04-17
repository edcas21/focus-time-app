import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import { Focus } from "./src/features/focus/Focus";
import { Timer } from "./src/features/timer/Timer";

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = () => {

  }

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          clearSubject={() => setFocusSubject(null)}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
    backgroundColor: colors.ltBlue,
  },
});
