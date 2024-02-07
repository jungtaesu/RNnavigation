import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealItem({ title, imageUrl, duration, complexity, affordability, steps, ingredients }) {
    const navigation = useNavigation();

    // const displayedMeals = MEALS.filter((mealItem) => {
    //     return mealItem.categoryIds.indexOf(catId) >= 0;
    // });
    console.log('steps in mealitem:', steps)
    console.log('ingre in mealitem:', ingredients)
    // const steps = steps

    function pressHandler() {
        navigation.navigate('MealsDetail', {
            steps, ingredients
        })
        
    }

  return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{ color:'#ccc' }} 
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri:imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.5
    }
})