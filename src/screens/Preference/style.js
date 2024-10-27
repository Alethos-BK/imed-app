import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
      },
      header: {
        width: '100%',
        height: 100,
        marginTop: 34,
        marginLeft: -12.5
      },
      headerContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7
      },
      h1Title: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      input: {
        backgroundColor: '#fff', 
        paddingBottom: 5,
        color: '#000',
    },
    placeholder: {
        color: '#999', 
    },
    label: {
        paddingLeft: 3,
        paddingBottom: 2,
        paddingTop: 10,
        fontWeight: 'bold'
      },
    border: {
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 1, 
        backgroundColor: 'white',
        padding: 2,  
    }
});
