import React from "react";
import { FlatList, Text,TouchableOpacity, } from "react-native";
import styles from "./style";

const Categories = ({ categories, selectedCategory, onCategorypress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator ={false}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;
        
        return (
          <TouchableOpacity onPress={() => onCategorypress (item)}
            style={[styles.itemContainer,selected ? styles.selecteditemContainer : {}]}>
            <Text style={[styles.item, selected ? styles.selecteditem : {}]}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
