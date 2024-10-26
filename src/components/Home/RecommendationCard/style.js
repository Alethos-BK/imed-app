import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    size: {
        width: props.width || 200,
        height: props.height || 200,
    },
    rounded: {
        width: props.width || 200,
        height: props.height || 200,
        borderRadius: 15,
        overflow: 'hidden',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 70,
        height: 35,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 25,
    },
    heartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 35,
        height: 35,
        marginTop: 10,
        marginRight: 10,
        borderRadius: 100,
    },
    text: {
        color: '#f9d978',
        fontSize: 18,
        paddingLeft: 5
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    doctorTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
