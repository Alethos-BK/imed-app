import React, { useState } from "react"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const FavoritedIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  function toggleFavorite() {
    setIsFavorited(!isFavorited)
  }

  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={toggleFavorite}>
      <Ionicons
        style={styles.favoriteIcon}
        name={isFavorited ? "heart" : "heart-outline"}
        color="red"
        size={23}
      />
    </TouchableOpacity>
  )
}