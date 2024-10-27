import { Image, Text, View } from "react-native";
import { styles } from "./style";

export const Soon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../assets/soon.png')}
      />
      <Text style={styles.text}>Em Breve!</Text>

    </View>
  )
}