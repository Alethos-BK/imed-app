import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 16,
    backgroundColor: '#fff',
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#2490b7',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    paddingLeft: 3,
    paddingBottom: 2,
    fontWeight: 'bold'
  },
  subTitle: {
    paddingLeft: 3,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 25
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
  }
})
