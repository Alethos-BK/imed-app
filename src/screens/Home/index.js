import React from "react";
import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "../../components/Home/Card";
import { RecommendationCard } from "../../components/Home/RecommendationCard";

export const Home = () => {

  const mockCards = [
    {
      Id: 1,
      Name: 'Dr. João Silva',
      AvgScore: 4.5,
      Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
    },
    {
      Id: 2,
      Name: 'Dr. João Silva',
      AvgScore: 4.5,
      Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
    },
    {
      Id: 3,
      Name: 'Dr. João Silva',
      AvgScore: 4.5,
      Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
    },
    {
      Id: 4,
      Name: 'Dr. João Silva',
      AvgScore: 4.5,
      Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
    },
    {
      Id: 5,
      Name: 'Dr. João Silva',
      AvgScore: 4.5,
      Specialties: ['Cardiologia', 'Pediatria', 'Dermatologia'],
    }
  ]

  const mockRecomendation = [
    {
      Id: 1,
      Name: "Janaina Silva",
      AvgScore: 4.8,
      MainSpecialtie: "Cardiologia"
    },
    {
      Id: 2,
      Name: "Janaina Silva",
      AvgScore: 4.8,
      MainSpecialtie: "Cardiologia"
    },
    {
      Id: 3,
      Name: "Janaina Silva",
      AvgScore: 4.8,
      MainSpecialtie: "Cardiologia"
    }
  ]

  const renderRecommendation = ({ item }) => {
    return (
      <RecommendationCard
        Name={item.Name}
        AvgScore={item.AvgScore}
        MainSpecialtie={item.MainSpecialtie}
      />
    );
  };

  const renderGeneral = ({ item }) => {
    return (
      <Card
        key={item.Id}
        Name={item.Name}
        AvgScore={item.AvgScore}
        Specialties={item.Specialties}
      />
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.firstTitleContainer}>
        <Text style={styles.h1Title}>Médico Recomendados</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatListRecommendation}>
        <FlatList
          data={mockRecomendation}
          renderItem={renderRecommendation}
          keyExtractor={(item) => item.Id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </View>

      <View style={styles.firstTitleContainer}>
        <Text style={styles.h1Title}>Clínicas e Hospitais</Text>
      </View>


      <View style={styles.flatListGeneral}>
        {mockCards.map((item) => renderGeneral({ item }))}
      </View>

    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#f9f9f9",
  },
  flatListRecommendation: {
    paddingHorizontal: 20
  },
  flatListGeneral: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  firstTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  h1Title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  linkText: {
    color: "#2198BA",
    fontSize: 17
  }
});