import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ImageComponent } from "../../ImageComponent";
import { FavoritedIcon } from "../../Shared/FavoritedIcon";

export const Card = (props) => {
  const { Name, AvgScore, Specialties } = props;
  const maxSpecialties = 2;
  const displayedSpecialties = Specialties.slice(0, maxSpecialties);
  const hasMoreSpecialties = Specialties.length > maxSpecialties;

  return (
    <View style={styles.cardContainer}>
      <FavoritedIcon />

      <View style={styles.contentContainer}>
        <ImageComponent type="rounded" src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?t=st=1729962486~exp=1729966086~hmac=6d7d46015f8a3a64e048c9cede80594b32504c498d83f8b7a2f41189d5626f8c&w=740" />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{Name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" color="#FFD700" size={16} />
            <Text style={styles.rating}>{AvgScore}</Text>
            <Text style={styles.distance}>• 1.2 km</Text>
          </View>
          <Text style={styles.specialty}>
            Especialidade: {displayedSpecialties.join(', ')}
            {hasMoreSpecialties && ` ...`}
          </Text>
        </View>
      </View>
    </View>
  );
}