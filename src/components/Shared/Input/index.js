import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

export const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType || "default"}
    />
  )
}