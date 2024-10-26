import React, { useState } from "react"
import { styles } from "./style"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const FavoritedIcon = (props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  function toggleFavorite() {
    setIsFavorited(!isFavorited)
  }

  return (
    <TouchableOpacity
      style={props.iconContainer}
      onPress={toggleFavorite}>
      <Ionicons
        style={props.favoriteIcon}
        name={isFavorited ? "heart" : "heart-outline"}
        color={isFavorited ? "red" : props.color}
        size={23}
      />
    </TouchableOpacity>
  )
}