import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    rounded: {
        width: props.width || 200,
        height: props.height || 200,
        borderRadius: 1000,
    },
    default: {
        width: props.width || 200,
        height: props.height || 200,
    },
});
