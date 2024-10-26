import { View, Text, ImageBackground } from "react-native"
import { styles } from "./style"
import { Ionicons } from "@expo/vector-icons"
import { FavoritedIcon } from "../../Shared/FavoritedIcon"
import { ImageComponent } from "../../ImageComponent"

export const RecommendationCard = (props) => {

    const style = styles(props)

    return(
        <View style={style.size}>

           
                <ImageBackground
                    style={style.rounded}
                    source={{uri:'https://blog.casadoprodutor.com.br/wp-content/uploads/2018/04/gatinho.jpg'}}
                >
                    <View style={style.container}>
                        <View style={style.starContainer}>
                            <Ionicons name="star" color="#f9d978" size={20}></Ionicons>
                            <Text style={style.text}>{props.AvgScore}</Text>
                        </View>
                        <View style={style.heartContainer}>
                            <FavoritedIcon/>
                        </View>
                    </View>
                    
                </ImageBackground>
            

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

        </View>
    )
}