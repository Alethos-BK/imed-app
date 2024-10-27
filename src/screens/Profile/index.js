import React from "react";
import { ImageBackground, Linking, Text, TouchableOpacity, View } from "react-native";
import { ImageComponent } from "../../components/ImageComponent";
import { styles } from "./style";
import { Button } from "../../components/Shared/Button";

export const Profile = () => {
  const handleContactPress = () => {
    Linking.openURL('tel:+123456789');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.coverImage}
        source={{
          uri: 'https://img.freepik.com/fotos-gratis/vista-de-fundo-abstrata-do-fundo-abstrato-borrada-em-direcao-ao-vazio-do-lobby-do-escritorio-e-portas-de-entrada-e-cortina-de-vidro-com-quadro_1339-6363.jpg?t=st=1729991202~exp=1729994802~hmac=46697cb37f632ad96905c03c1405de28d3dc8a7c5aade5562d26d1d2a5d04d34&w=1380',
        }}
      >


      <View style={styles.profileImageWrapper}>
        <ImageComponent
       
          src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?t=st=1729962486~exp=1729966086~hmac=6d7d46015f8a3a64e048c9cede80594b32504c498d83f8b7a2f41189d5626f8c&w=740"
          width={135}
          height={135}
        />
      </View>

      </ImageBackground>

      
      {/* Informações do Hospital */}
      <Text style={styles.hospitalName}>Hospital</Text>
      <Text style={styles.specialtyDescription}>Diversas especialidades</Text>

      {/* Botão de Contato */}
      <View style={styles.contactButton}>
        <Button
          label="Contato"
          onPress={handleContactPress}
        />
      </View>

      <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
        <Text style={styles.contactButtonText}>Contato</Text>
      </TouchableOpacity>

      {/* Especialidades */}
      <Text style={styles.specialtiesTitle}>Especialidades</Text>
      <View style={styles.specialtyList}>
        <TouchableOpacity style={styles.specialtyItem}>
          <Text style={styles.specialtyText}>Pediatria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyItem}>
          <Text style={styles.specialtyText}>Cardiologia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyItem}>
          <Text style={styles.specialtyText}>Ortopedia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyItem}>
          <Text style={styles.specialtyText}>Dermatologia</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}