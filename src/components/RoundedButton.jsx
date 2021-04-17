import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
} from "react-native";
import { colors } from '../utils/colors';

// Stateless function that takes in props from another class
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  textSize = 0,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size, textSize).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, textSize=0) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 5.5,
    },
    text: {
      color: colors.white,
      fontSize: textSize ? textSize : size / 4.5,
      fontWeight: 'bold'
    },
  });
