import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CategoriesCard from "../Components/CategoriesCard/CategoriesCard";
import { categories } from "../data";
import Restaurant from "../Components/Restaurant/Restaurant";
import Categories from "../Components/Categories/Categories";

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 50,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {/* Location */}
        <View style={{ flex: 1, marginLeft: 15, flexDirection: "row" }}>
          <Icon name="location-outline" size={30} color="black" />
          <Text>
            Santiago,
            {"\n"}Chile
          </Text>
          <TouchableOpacity>
            <Icon name="chevron-down-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {/* Avatar */}
        <View>
          <View
            style={{
              borderRadius: 50,
              padding: 10,
              marginRight: 25,
              backgroundColor: "skyblue",
              width: 40,
              height: 40,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/009/397/892/original/woman-face-expression-clipart-design-illustration-free-png.png",
              }}
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
      </View>
      {/* InputSearch */}
      <View
        style={{
          height: 40,
          margin: 12,
          borderWidth: 0.5,
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          gap: 5,
          width: "90%",
        }}
      >
        <Icon name="search" size={20} color="gray" />
        <TextInput
          style={{
            flex: 1,
            color: "black",
          }}
          placeholder="Search..."
        />
      </View>
      <View >
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            alignItems:'center',
            height:1500,
            
          }}
        >
          {/* Freatured Offert */}
          <View
            style={{
              backgroundColor: "skyblue",
              width: 300,
              height: 200,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <View style={{ padding: 20, width: "90%", gap: 5 }}>
              <Text style={{ color: "white", fontSize: 30 }}>
                Up to 40% OFF
              </Text>
              <Text style={{ color: "white", fontSize: 15 }}>
                ON YOUR FIRST ORDER
              </Text>
              <TouchableOpacity
                style={{
                  width: 180,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>


            {/* Popular Categories  */}
            <Categories />

            {/* Restaurant Categories  */}
            <Restaurant />

        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
