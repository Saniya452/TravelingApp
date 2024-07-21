import React from "react";
import { SafeAreaView, Image, FlatList, View, Pressable,} from "react-native";
import styles from "./style";


const Gallery = ({ navigation, route }) => {
  const { images } = route?.params || {};
 // const navigation = useNavigation(); // Use useNavigation hook

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
         <View>
                <FlatList style={{ paddingHorizontal: 20, marginBottom: 4 }} data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} />

                <Pressable onPress={onBack} style={styles.backContainer}  hitSlop={8}>
                    <Image source={require('../../Assets/back.png')} style={styles.backIcon} />
                </Pressable>
            </View>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);


