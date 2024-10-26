import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { Ionicons } from "@expo/vector-icons"
import { FavoritedIcon } from "../../Shared/FavoritedIcon"
import { ImageComponent } from "../../ImageComponent"

export const RecommendationCard = (props) => {

    const style = styles(props)

    return(
        <TouchableOpacity style={style.cardContainer}>
            <ImageBackground
                style={style.rounded}
                source={{ uri: 'https://img.freepik.com/fotos-gratis/medico-sorridente-de-tiro-medio-com-casaco_23-2148814212.jpg?t=st=1729974115~exp=1729977715~hmac=b1650d473da29f35624f193753574ec63254476a4d3cbe1204647b126d33fbd3&w=740' }}
            >
                <View style={style.container}>
                    <View style={style.starContainer}>
                        <Ionicons name="star" color="#f9d978" size={20} />
                        <Text style={style.text}>{props.AvgScore}</Text>
                    </View>
                    <View style={style.heartContainer}>
                        <FavoritedIcon color="white"/>
                    </View>
                </View>
            </ImageBackground>

            {/* Info Container fica logo abaixo da imagem */}
            <View style={style.infoContainer}>
                <ImageComponent
                    src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2019%2F10%2F28%2F10%2FLogo-262925_128726_102202550_1054810450.jpg"
                    type="rounded"
                    width={40}
                    height={40}
                />
                <View>
                    <Text style={style.doctorTitle}>{props.Name}</Text>
                    <Text>{props.MainSpecialtie}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}