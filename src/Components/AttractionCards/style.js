import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  card: {
    width: (width - 49) / 2 , // Adjusted to account for margins
    marginBottom: 8,
    marginHorizontal: 2, // Horizontal margin to create space between cards
    borderWidth: 1,
    padding: 3,
    borderColor: "#E2E2E2",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600", // Adjusted to 600 to match "semibold"
    marginTop: 5,
    marginLeft: 3,
    color: '#000000'
  },
  subtitle: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 13,
    fontWeight: "600", // Adjusted to 600 to match "semibold"
  },
  icon: {
    color: 'black',
    fontWeight: 'bold',
    width: 20,
    height: 15,
    marginRight: 0,
  },
  row: {
    marginLeft: 1,
    marginTop: 1,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default styles;

