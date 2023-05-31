import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { restaurants } from '../../data';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const Restaurant = () => {
  return (
    <View
    style={{
      marginTop: 20,
      width: "100%",
      height: 300,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      padding:15
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
        Restaurant´s
      </Text>
    </View>
    
    <ScrollView
      horizontal
      style={{
        width: "100%",
        height: 900,
        padding: 9,
      }}
      showsHorizontalScrollIndicator={false}
    >
   
      {/* Restaurant Card */}
      {
        restaurants.map((item) => (
            <RestaurantCard 
            key={item.id}
            id = {item.id}
            restaurantName= {item.restaurantName}
            urlImage={item.urlImage}
            hora={item.hora}
            />
        ))
      }

    </ScrollView>
  </View>
  )
}

export default Restaurant;