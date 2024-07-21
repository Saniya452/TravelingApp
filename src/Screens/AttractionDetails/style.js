// style.js
import { StyleSheet, Dimensions } from "react-native";

// const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    marginTop: 22,
    marginBottom: 2,
   // width: '100%'

  },
  mainImage: {
    width: "100%",
    height: 350, //height / 2
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    //borderRadius: 22,
    margin: 16,
    // backgroundColor: 'white'
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    paddingHorizontal: 4,
  },
  miniImageWrapper: {
    position: "relative",
  },
  miniImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 4,
  },
  moreImages: {
    position: "absolute",
    top: -15,
    left: 4,
    //fontWeight: 'bold',
    backgroundColor: "rgba(0,0,0,0.38)",
    color: "white",
    borderRadius: 10,
    padding: 13,
    fontSize: 18,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    margin: 0,
    // fontSize: 26,
    // flexShrink: 1
  },
  city: {
    fontSize: 16,
    color: "#000",
    fontWeight: "300",
    //marginTop: 8,
    marginLeft: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green", // Adjust color if needed
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    //paddingHorizontal: 10, // Add horizontal padding
    //width: '100%'
  },
  map:{
    borderRadius: 32,
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  mapText:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4682B4',
    textAlign: 'center',
    padding: 16
  }
});

export default styles;
