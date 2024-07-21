import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";
import Title from "../../Components/Title";
import Categories from "../../Components/Categories";
import AttractionCards from "../../Components/AttractionCards";
import jsonData from "../../data/attraction.json";
import categories from "../../data/categories.json";
import { useNavigation } from "@react-navigation/native";

const ALL = "All";

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);
  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter((item) =>
        item?.categories?.includes(selectedCategory)
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}> No item found. </Text>
        }
        ListHeaderComponent={
          <>
            <Title
              text="Where do" 
              style={{color: "#4682B4" }}
            />
            <Title text="you want to go?"
            style={{color: "#4682B4"}} />
            <Title text="Explore Attractions" style={styles.subtitle} />

            <Categories
              selectedCategory={selectedCategory}
              onCategorypress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          const imageSrc =
            item.images && item.images.length ? item.images[0] : null;
          console.log(`Image for ${item.name}: ${imageSrc}`); // Log image URL
          return (
            <AttractionCards
              key={item.id}
              style={index % 2 === 0 ? { marginRight: 12 } : {}}
              onpress={() => navigation.navigate("AttractionDetails", { item })}
              title={item.name}
              subtitle={item.city}
              imageSrc={imageSrc}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "black",
    marginTop: 35,
    marginBottom: -2,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 12,
    marginBottom: -12,
  },
  listContent: {
    paddingHorizontal: 0,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 150,
    fontSize: 18,
    marginRight: 10,
    color: "rgb(128,128,128)",
  },
});

export default React.memo(Home);









