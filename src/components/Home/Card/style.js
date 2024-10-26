import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    position: "relative",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: "#333",
    marginLeft: 4,
  },
  distance: {
    fontSize: 14,
    color: "#777",
    marginLeft: 8,
  },
  specialty: {
    fontSize: 14,
    color: "#555",
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 20,
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  }
})