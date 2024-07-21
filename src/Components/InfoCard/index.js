import React from 'react';
import { Text,Image, View } from 'react-native';
import styles from '../InfoCard/style';

const InfoCard = ({icon, text, style }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon}/>
    <Text style={[styles.title,style]}>{text}</Text>
    </View>
  );
};

export default React.memo(InfoCard);
