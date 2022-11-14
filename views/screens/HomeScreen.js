import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import ListOptions from '../../components/ListOptions';
import ListCategories from '../../components/ListCategories';
import houses from '../../consts/houses';
import Card from '../../components/Card';
const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) =>
{
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={style.header}>
        <View>
          <Text style={{color: COLORS.grey}}>Location</Text>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
            Nigeria
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search address, city, location" />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        <ListOptions/>  

        <ListCategories />

        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} navigation={navigation} />}
        /> 
      </ScrollView>
      </SafeAreaView>
    )
  }

  const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 12,
    },
    sortBtn: {
      backgroundColor: COLORS.dark,
      height: 50,
      width: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    optionsCard: {
      height: 210,
      width: width / 2 - 30,
      elevation: 15,
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    optionsCardImage: {
      height: 140,
      borderRadius: 10,
      width: '100%',
    },
    optionListsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    categoryListText: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 5,
      color: COLORS.grey,
    },
    activeCategoryListText: {
      color: COLORS.dark,
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
    categoryListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingHorizontal: 40,
    },
    card: {
      height: 250,
      backgroundColor: COLORS.white,
      elevation: 10,
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
export default HomeScreen
