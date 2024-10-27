import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  coverImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  profileImageWrapper: {
    alignSelf: "center",
    position: "absolute",
    top: 175,
    justifyContent: "center",
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  hospitalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 65,
    color: '#333',
  },
  specialtyDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
    textAlign: 'center',
  },
  contactButton: {
    width: 100
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  specialtiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  specialtyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  specialtyItem: {
    width: '45%',
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
  },
  specialtyText: {
    fontSize: 16,
    color: '#333',
  }
})
