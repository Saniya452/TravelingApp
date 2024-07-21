import React from "react";
import { View , Text, Pressable, Image} from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

const Map = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} Region={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>
      <View style={styles.header}>
              <Pressable onPress={onBack}>
                <Image source={require("../../Assets/back.png")} style={styles.back}/>
              </Pressable>
              <Text style={styles.title} onPress={onBack}>{`${item?.name} , ${item?.city}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(Map);
