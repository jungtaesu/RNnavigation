import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute, useNavigation } from '@react-navigation/native';
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = {
    steps: string;
    ingredients: string;
}

function MealsDetailScreen() {

    const router = useRoute();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    console.log('route.params in mealdetailscreen:', router.params)

    function handleHeaderButton() {
        console.log('header clicked!!1!')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="tap me" onPress={handleHeaderButton} />
            }
        })
    })

    // const mealStep = router.params?.steps
    // const mealIngredients = router.params?.ingredients
    return(
        <>
        <Text style={styles.title}>
            재료
        </Text>
        <Text style={styles.ingredients}>
            {/* {mealIngredients} */}
        </Text>
        <Text style={styles.title}>
            요리 순서
        </Text>
            <Text style={{color: 'white'}}>
                {/* {mealStep} */}
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