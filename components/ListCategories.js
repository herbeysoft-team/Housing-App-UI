import React, {useState} from 'react'
import { StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');

const categoryList = ['Popular', 'Recommended', 'Nearest'];
const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
}
const style = StyleSheet.create({

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
  });
export default ListCategories