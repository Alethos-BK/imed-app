import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/Shared/Input";
import { Check } from "../../components/Shared/Check";
import { ImageComponent } from "../../components/ImageComponent";
import { Button } from "../../components/Shared/Button";

export const Symptoms = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const symptomOptions = ['Dor de cabeça', 'Febre', 'Tosse', 'Náusea', 'Dificuldade para respirar', 'Dor no peito', 'Fadiga'];

  const handleCheckboxChange = (sintoma, isSelected) => {
    setSymptoms(prev =>
      isSelected
        ? [...prev, sintoma]
        : prev.filter(item => item !== sintoma)
    );
  };

  const handleSubmit = () => {
    //TODO: Implementar a lógica para classificar o risco
  };


  return (

    <ScrollView contentContainerStyle={styles.container}>

      <SafeAreaView style={styles.header}>
        <View style={styles.headerContentContainer}>
          <ImageComponent isLogo='true' type='rounded' width={60} height={60}/>
          <Text style={styles.h1Title}>Sintomas</Text>
        </View>
      </SafeAreaView>

      <Text style={styles.label}>Nome</Text>
      <Input
        marginBottom={12}
        placeholder="(Ex. Alice)"
        value={name}
        onChangeText={setName}
      ></Input>

      <Text style={styles.label}>Idade</Text>
      <Input
        marginBottom={12}
        placeholder="(Ex. 18)"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.subTitle}>Sintomas:</Text>
      <View style={styles.symptomsContainer}>
        {symptomOptions.map((sintoma) => (
          <Check
            key={sintoma}
            label={sintoma}
            isSelected={symptoms.includes(sintoma)}
            onValueChange={(isSelected) => handleCheckboxChange(sintoma, isSelected)}
          />
        ))}
      </View>

      <Text style={styles.label}>Duração dos sintomas</Text>
      <Input
        marginBottom={12}
        style={styles.input}
        placeholder="(Ex. 1 a 3 dias)"
        value={duration}
        onChangeText={setDuration}
      />
      <Text style={styles.label}>Intensidade dos sintomas</Text>
      <Input
        marginBottom={12}
        style={styles.input}
        placeholder="(Ex. 1 a 10)"
        keyboardType="numeric"
        value={intensity}
        onChangeText={setIntensity}
      />
      <Text style={styles.label}>Histórico médico</Text>
      <Input
        style={styles.input}
        placeholder="(opcional)"
        value={medicalHistory}
        onChangeText={setMedicalHistory}
      />

      <Button label="Encontrar Médico" />
    </ScrollView>
  )
}