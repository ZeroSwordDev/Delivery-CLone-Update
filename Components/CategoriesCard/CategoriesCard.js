import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const CategoriesCard = ({ id, categoryName, urlImage }) => {
  return (
    <View style={{
      width: 100,
        borderRadius: 15,
        margin:15
      }}>
        <TouchableOpacity
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Image
            source={{
              uri: urlImage,
            }}
            resizeMode="contain"
            style={{ width: 100, height: 140 }}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {categoryName}
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default CategoriesCard;
