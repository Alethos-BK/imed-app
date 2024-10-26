import React from "react";
import { Text, View } from "react-native";
import { Card } from "../../components/Home/Card";
import { ImageComponent } from "../../components/ImageComponent";

export const Home = () => {
  return (
    <View>
      <ImageComponent src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?t=st=1729962486~exp=1729966086~hmac=6d7d46015f8a3a64e048c9cede80594b32504c498d83f8b7a2f41189d5626f8c&w=740" />
      <Card />
      <Text>Tela Main</Text>
    </View>
  )
}