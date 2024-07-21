// AttractionDetails.js
import React from "react";
import { SafeAreaView,Text, ImageBackground,View,Pressable,Image} from "react-native";
import styles from "./style";
import MapView, { Marker } from "react-native-maps";
import Title from "../../Components/Title";
import InfoCard from "../../Components/InfoCard";
import { ScrollView } from "react-native-gesture-handler";
// import Share from 'react-native-share';


const AttractionDetails = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImage = item?.images?.slice(0, 5); // Display up to 5 images in the footer
  const diffImages = item?.images?.length - slicedImage?.length; // Remaining images count
  const openingHours = `${item?.opening_time}-${item?.closing_time}`;
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate("Gallery", { images: item?.images });
  };
  // const onShare = () => {
  //   Share.open({
  //     message: 'This is a test message',
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     err && console.log(err);
  //   });
  // }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{ borderRadius: 20 }}
          source={{ uri: mainImage }}
        >
          <View style={styles.header}>
            <Pressable onPress={onBack} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require("../../Assets/back.png")}
              />
            </Pressable>
            {/* <Pressable onPress={onShare} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require("../../Assets/share.png")}
              />
            </Pressable> */}
          </View>

          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImage?.map((image, index) => (
              <View key={image} style={styles.miniImageWrapper}>
                <Image source={{ uri: image }} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImage?.length - 1 ? (
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View style={{ maxWidth: "70%" }}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Title style={styles.price} text={`$${item?.entry_price}`} />
        </View>

        <InfoCard
          text={item?.address}
          icon={require("../../Assets/location_circle.png")}
        />
        <InfoCard
          text={openingHours}
          icon={require("../../Assets/schedule.png")}
        />

        <MapView style={styles.map} Region={coords}>
          <Marker coordinate={coords} title={item?.name} />
        </MapView>
        <Text
          style={styles.mapText}
          onPress={() => navigation.navigate("Map", { item })}
        >
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
