import React from 'react'
import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');

const Card = ({house, navigation}) => {
  return (
    <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {house.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                $1,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              {house.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
  )
}
const style = StyleSheet.create({
    
    card: {
      height: 250,
      backgroundColor: COLORS.white,
      elevation: 15,
      width: width - 40,
      marginRight: 20,
      padding: 15,
      borderRadius: 20,
    },
    cardImage: {
      width: '100%',
      height: 120,
      borderRadius: 15,
    },
    facility: {flexDirection: 'row', marginRight: 15},
    facilityText: {marginLeft: 5, color: COLORS.grey},
  });
export default Card