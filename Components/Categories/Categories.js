import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import Icon from "react-native-vector-icons/Ionicons";
import { categories } from "../../data";

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 14,
        height: 220,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          style={{
            padding: 5,
            backgroundColor: "orange",
            borderRadius: 50,
            marginLeft: 10,
          }}
          name="star"
          size={13}
          color="white"
        />
        <Text
          style={{
            flex: 1,
            marginLeft: 20,
            fontSize: 20,
          }}
        >
          Porpular categories
        </Text>
        <Text>See All</Text>
      </View>
      {/* Categories Card */}
   
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 9,
          }}
        >
          {categories.map((item, index) => (
            <CategoriesCard
              key={item.id}
              id={item.id}
              categoryName={item.categoryName}
              urlImage={item.urlImage}
            />
          ))}
        </ScrollView>

    </View>
  );
};

export default Categories;
