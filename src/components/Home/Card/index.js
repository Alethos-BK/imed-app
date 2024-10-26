import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export const Card = () => {
  return (
    <View>
      <View>
        <Text>imagem aqui</Text>
        <Text>Titulo</Text>
      </View>
      <View>
        <Ionicons name="heart-outline" color="red" size={12} />
      </View>
    </View>
  );
}