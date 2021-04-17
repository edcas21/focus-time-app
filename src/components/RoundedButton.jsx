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
  color = null,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size, textSize, color).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size, textSize, color).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, textSize=0, color=null) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: color ? color : colors.white,
      borderWidth: 4,
    },
    text: {
      color: color ? color : colors.white,
      fontSize: textSize ? textSize : size / 4.5,
      fontWeight: 'bold'
    },
  });
