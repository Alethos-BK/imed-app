import { View, ScrollView, Text, SafeAreaView, TextInput } from 'react-native'
import { styles } from "./style"
import { ImageComponent } from '../../components/ImageComponent';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from '../../components/Shared/Button';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Preference = () => {

    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedHobby, setSelectedHobby] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedPersonality, setSelectedPersonality] = useState(null);

    const genderOptions = [
        { label: "Sem preferência", value: -1 },
        { label: "Masculino", value: 1 },
        { label: "Feminino", value: 2 },
        { label: "Não-binário", value: 3 },
        { label: "Gênero Fluido", value: 4 },
        { label: "Gênero Queer", value: 5 },
        { label: "Agênero", value: 6 },
        { label: "Bigênero", value: 7 },
        { label: "Demigênero", value: 8 },
        { label: "Dois Espíritos", value: 9 },
        { label: "Intersexo", value: 10 },
        { label: "Andrógino", value: 11 },
        { label: "Transfeminino", value: 12 },
        { label: "Transmasculino", value: 13 },
        { label: "Poligênero", value: 14 },
        { label: "Neutrois", value: 15 },
        { label: "Gênero Não Conformante", value: 16 },
    ];

    const hobbyOptions = [
        { label: "Sem preferência", value: -1 },
        { label: "Leitura", value: 1 },
        { label: "Viagem", value: 2 },
        { label: "Culinária", value: 3 },
        { label: "Jardinagem", value: 4 },
        { label: "Pintura", value: 5 },
        { label: "Fotografia", value: 6 },
        { label: "Caminhadas", value: 7 },
        { label: "Pesca", value: 8 },
        { label: "Tocar Música", value: 9 },
        { label: "Dança", value: 10 },
        { label: "Artesanato", value: 11 },
        { label: "Escrita", value: 12 },
        { label: "Jogos Eletrônicos", value: 13 },
        { label: "Colecionismo", value: 14 },
        { label: "Yoga", value: 15 },
        { label: "Tricô", value: 16 },
        { label: "Corrida", value: 17 },
        { label: "Natação", value: 18 },
        { label: "Trabalho Voluntário", value: 19 },
        { label: "Jogos de Tabuleiro", value: 20 },
    ];

    const ageOptions = [
        { label: "Sem preferência", value: -1 },
        { label: "20 a 30 anos", value: 1 },
        { label: "30 a 40 anos", value: 2 },
        { label: "40 a 50 anos", value: 3 },
        { label: "50 a 60 anos", value: 4 },
        { label: "60 a 70 anos", value: 5 },
        { label: "70 a 80 anos", value: 6 },
        { label: "80 a 90 anos", value: 7 },
        { label: "90 anos ou mais", value: 8 },
    ];

    const personalityOptions = [
        { label: "Sem preferência", value: -1 },
        { label: "Introvertido", value: 1 },
        { label: "Extrovertido", value: 2 },
        { label: "Ambivertido", value: 3 },
        { label: "Pensador", value: 4 },
        { label: "Sentidor", value: 5 },
        { label: "Julgador", value: 6 },
        { label: "Perceptivo", value: 7 },
        { label: "Sensorial", value: 8 },
        { label: "Intuitivo", value: 9 },
        { label: "Analítico", value: 10 },
        { label: "Criativo", value: 11 },
        { label: "Prático", value: 12 },
        { label: "Otimista", value: 13 },
        { label: "Pessimista", value: 14 },
        { label: "Afirmativo", value: 15 },
        { label: "Passivo", value: 16 },
        { label: "Empático", value: 17 },
        { label: "Resiliente", value: 18 },
        { label: "Determinado", value: 19 },
        { label: "Flexível", value: 20 },
    ];

    const handleSave = async () => {
        try {
            await AsyncStorage.setItem('selectedGender', JSON.stringify(selectedGender));
            await AsyncStorage.setItem('selectedHobby', JSON.stringify(selectedHobby));
            await AsyncStorage.setItem('selectedAge', JSON.stringify(selectedAge));
            await AsyncStorage.setItem('selectedPersonality', JSON.stringify(selectedPersonality));
            console.log('Dados salvos com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
        }
    };

    const loadData = async () => {
        let value = await AsyncStorage.getItem('selectedGender');
        if (value !== null) {
            console.log("Valor 1: " + value)
        }

        value = await AsyncStorage.getItem('selectedHobby');
        if (value !== null) {
            console.log("Valor 2: " + value)
        }

        value = await AsyncStorage.getItem('selectedAge');
        if (value !== null) {
            console.log("Valor 3: " + value)
        }

        value = await AsyncStorage.getItem('selectedPersonality');
        if (value !== null) {
            console.log("Valor 4: " + value)
        }
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={styles.headerContentContainer}>
                    <ImageComponent isLogo='true' type='rounded' width={60} height={60}/>
                    <Text style={styles.h1Title}>Preferências</Text>
                </View>
            </SafeAreaView>
            
            <View contentContainerStyle={styles.container}>

                <Text style={styles.label}>Gênero</Text>
                <View style={styles.border}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedGender(value)}
                        items={genderOptions}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                            placeholder: styles.placeholder,
                        }}
                        placeholder={{}}
                        value={selectedGender}
                    />
                </View>
                
                <Text style={styles.label}>Hobbies</Text>
                <View style={styles.border}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedHobby(value)}
                        items={hobbyOptions}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                            placeholder: styles.placeholder,
                        }}
                        placeholder={{}}
                        value={selectedHobby}
                    />
                </View>

                <Text style={styles.label}>Idade</Text>
                <View style={styles.border}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedAge(value)}
                        items={ageOptions}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                            placeholder: styles.placeholder,
                        }}
                        placeholder={{}}
                        value={selectedAge}
                    />
                </View>
                
                <Text style={styles.label}>Personalidade</Text>
                <View style={styles.border}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedPersonality(value)}
                        items={personalityOptions}
                        style={{
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                            placeholder: styles.placeholder,
                        }}
                        placeholder={{}}
                        value={selectedPersonality}
                    />
                </View>
            </View>

            <View style={styles.saveButtonContainer}>
                <Button label="Salvar" onPress={handleSave} />
            </View>
            
        </ScrollView>
        
    );
}