import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { CATEGORIES } from "../data/dummy-data";
import { MealsCategoryProps } from "../App";

function CategoriesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  function renderCategoryItem(itemData: any) {

    function pressHandler() {
      console.log("itemData:", itemData);
      // console.log("categoryId:", categoryId)
      // navigation.navigate("MealsOverview", {
      //   categoryId: itemData.item.id,
      // });
      navigation.navigate('MealsDetail', {
        
      })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        // onPress={() => {}}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      // renderItem={renderCategoryItem.bind()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
