import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    rounded: {
        width: props.width || 60,
        height: props.height || 60,
        borderRadius: 1000,
        marginRight: 10,
    },
    default: {
        width: props.width || 200,
        height: props.height || 200,
    },
});
