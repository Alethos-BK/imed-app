import React from "react";
import { Text, View, SafeAreaView, ScrollView, TextInput } from "react-native";
import { Soon } from "../../components/Shared/Soon";
import { styles } from "./style";
import { ImageComponent } from "../../components/ImageComponent";
import { Ionicons } from "@expo/vector-icons"

export const Check = () => {
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.headerContentContainer}>
          <ImageComponent isLogo='true' type='rounded' width={60} height={60}/>
          <Text style={styles.h1Title}>Consultas</Text>
        </View>
      </SafeAreaView>
      <View style={styles.centralizaSoon}>
        <Soon></Soon>
      </View>
    </ScrollView>

  )
}

