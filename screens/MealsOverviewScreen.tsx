import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

type ParamList = {
    MealsOverviewScreenType: {
      categoryId:string
    };
  };

function MealsOverviewScreen() {
    
    const navigation = useNavigation();
    
    const { params } = useRoute<RouteProp<ParamList, 'MealsOverviewScreenType'>>();
    console.log('params in mealsoverview:', params)
    // const catId = params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        // return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // useLayoutEffect(() => {
    //     const categoryTitle = CATEGORIES && CATEGORIES.find((category) => category.id === catId).title;

    //     navigation.setOptions({
    //         title: categoryTitle
    //     })
    // }, [catId, navigation])


    function renderMealItem(itemData:any) {
        const item = itemData.item
        console.log('item:', item.steps)
        const mealItemProps = {
            title : item.title,
            imageUrl : item.imageUrl,
            affordability : item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            steps: item.steps,
            ingredients: item.ingredients
        }

        return (
                <MealItem {...mealItemProps} />
        )
    }

    return <View>
        {/* <Text>Meals Overview Screen - {catId}</Text> */}
        <FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderMealItem}/>
    </View>
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})