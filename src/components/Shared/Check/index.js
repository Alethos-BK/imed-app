import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style";

export const Check = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    props.onValueChange(!isSelected);
  };

  return (
    <TouchableOpacity
      style={[
        styles.checkboxContainer,
        { backgroundColor: isSelected ? '#2490b7' : '#f5f5f5' } // Cor de fundo muda conforme selecionado
      ]}
      onPress={toggleSelection}>

      <View style={styles.row}>
        <Text style={[
          styles.label,
          { color: isSelected ? 'white' : '#333' }
        ]}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}