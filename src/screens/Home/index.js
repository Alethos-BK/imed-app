import {React, useState} from "react";
import { Text, View, FlatList, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Card } from "../../components/Home/Card";
import { RecommendationCard } from "../../components/Home/RecommendationCard";
import { ImageComponent } from "../../components/ImageComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../components/Shared/Input";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

export const Home = ({ navigation }) => {

  
  const [searchQuery, setSearchQuery] = useState('');


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

  const handleFocus = () => {
    navigation.navigate("Search")
  };

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

      {/* Header */}
      <SafeAreaView style={styles.header}>
        <View style={styles.headerContentContainer}>
          <ImageComponent isLogo='true' type='rounded' width={60} height={60}/>
          <View style={styles.containerSearch}>
            <View style={styles.inputContainer}>
              <Ionicons name="search" size={20} color="#7C7D7D"/>
              <TextInput
                  style={styles.inputSearch}
                  placeholder="Encontre um especialista"
                  value={searchQuery}
                  onChangeText={text => setSearchQuery(text)}
                  onFocus={handleFocus}
              />
            </View>
        </View>
        </View>
      </SafeAreaView>

      <View style={styles.firstTitleContainer}>
        <Text style={styles.h1Title}>Médicos Recomendados</Text>
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
  },
  header: {
    width: '100%',
    height: 100,
    marginTop: 10
  },
  headerContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    gap: 5
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
},
inputContainer: {
  alignItems: 'center',
  flexDirection: 'row',
  borderColor: '#D9D9D9',
  borderWidth: 1,
  borderRadius: 10,
  paddingLeft: 10
}, 

inputSearch: {
  width: "68%",
  height: 40,
  borderRadius: 8,
  paddingLeft: 10
},


});