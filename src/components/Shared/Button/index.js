import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

export const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}