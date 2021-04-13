import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
} from "react-native";

// Stateless function that takes in props from another class
export const RoundedButton = ({
  style: {},
  textStyle: {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });
