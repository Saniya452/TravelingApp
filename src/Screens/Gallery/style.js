import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
    marginTop: 20,
  },
  backContainer:{
   position: 'absolute',
   margin: 30
    // top: -600,
    // left: 28,
    // zIndex: 10, // Ensure it is on top of other elements
  },
  backIcon: {
    width: 36,
    height: 36,
    //backgroundColor: 'white',
   // borderRadius: 20
    // borderRadius: 20,
    // margin: 2,
  }
});

export default styles;



