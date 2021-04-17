import React from "react";
import { View, StyleSheet } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";

const TEXT_SIZE = 27;
export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" textSize={TEXT_SIZE} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="30" textSize={TEXT_SIZE} onPress={() => onChangeTime(30)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="45" textSize={TEXT_SIZE} onPress={() => onChangeTime(45)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
