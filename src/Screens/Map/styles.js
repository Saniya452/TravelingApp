import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 22,
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: width - 36,
    padding: 10,
    borderRadius: 15,
    margin: 25,
    marginLeft: 16
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400'
  },
  back: {
    width: 50,
    height: 40,
    marginRight: 12

  },
});

export default styles;
