import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantCard = ({id, restaurantName, urlImage ,hora }) => {
  return (
    <View style={{
      width: 300,
      height: '100%',
        borderRadius: 15,
        margin:15,
        alignItems:'center',
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
            resizeMode="cover"
            style={{ width: '100%', height: 150,
            borderTopLeftRadius: 10, 
            borderTopRightRadius: 10 
      }}
          />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color:'black'
            }}
          >
            {restaurantName}
          </Text>
          <Text>{hora}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default RestaurantCard