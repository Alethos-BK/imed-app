import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

export const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      width={props.width || "100%"}
      height={props.height || 50}
      marginBottom={props.marginBottom || 0}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType || "default"}
    />
  )
}