import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute, useNavigation } from '@react-navigation/native';
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsDetailScreen({ steps }) {

    const route = useRoute();
    const navigation = useNavigation();
    console.log('route.params:', route.params)

    const mealStep = route.params.steps
    const mealIngredients = route.params.ingredients
    return(
        <>
        <Text style={styles.title}>
            재료
        </Text>
        <Text style={styles.ingredients}>
            {mealIngredients}
        </Text>
        <Text style={styles.title}>
            요리 순서
        </Text>
            <Text style={{color: 'white'}}>
                {mealStep}
            </Text>
        </>
    )

}

export default MealsDetailScreen

const styles= StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 30,
        padding: 8,
        fontWeight: 'bold',
        textAlign:'center'
    },
    ingredients: {
        marginBottom: 20,
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 15,
    },
    step: {

    },
})