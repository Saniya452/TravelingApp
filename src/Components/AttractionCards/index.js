import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const AttractionCards = ({ imageSrc, title, subtitle, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.card}>{imageSrc ? (
        <Image style={styles.image} source={{ uri: imageSrc }} />) : (
      <View style={styles.imagePlaceholder} />)}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
        <Image style={styles.icon} source={require('../../Assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCards);
