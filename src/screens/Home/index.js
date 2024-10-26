import React from "react";
import { Text, View } from "react-native";
import { Card } from "../../components/Home/Card";
import { RecommendationCard } from "../../components/Home/RecommendationCard";

export const Home = () => {

  const mockData = {
    Name: 'Dr. João Silva',
    AvgScore: 4.5,
    Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
  };

  const mockRecomendation = {
    Name: "Janaina Silva",
    AvgScore: 4.8,
    MainSpecialtie: "Cardiologia"
  }

  return (
    <View>
      <RecommendationCard
        Name={mockRecomendation.Name}
        AvgScore={mockRecomendation.AvgScore}
        MainSpecialtie={mockRecomendation.MainSpecialtie}
      />
      <Card
        Name={mockData.Name}
        AvgScore={mockData.AvgScore}
        Specialties={mockData.Specialties}
      />
    </View>
  )
}

export const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  }
})