import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/Shared/Input";
import { Check } from "../../components/Shared/Check";

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
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      ></Input>

      <Input
        placeholder="Idade"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.label}>Sintomas:</Text>
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

      <Input
        style={styles.input}
        placeholder="Duração dos Sintomas (Ex: 1 a 3 dias)"
        value={duration}
        onChangeText={setDuration}
      />
      <Input
        style={styles.input}
        placeholder="Intensidade dos Sintomas (1 a 10)"
        keyboardType="numeric"
        value={intensity}
        onChangeText={setIntensity}
      />
      <Input
        style={styles.input}
        placeholder="Histórico Médico (opcional)"
        value={medicalHistory}
        onChangeText={setMedicalHistory}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Encontrar Médico</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}