import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');

const optionsList = [
    {title: 'Buy a Home', img: require('../assets/house1.jpg')},
    {title: 'Rent a Home', img: require('../assets/house2.jpg')},
  ];

const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            {/* House image */}
            <Image source={option.img} style={style.optionsCardImage} />

            {/* Option title */}
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const style = StyleSheet.create({
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
  });
  export default ListOptions;