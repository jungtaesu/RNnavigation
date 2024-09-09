import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";

export type RootStackParamList = {
  MealsCategories: { categoryId: string };
  MealsOverview: undefined;
  MealsDetail: {  };
};

export type MealsCategoryProps = NativeStackNavigationProp<RootStackParamList, "MealsCategories">

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
            />
          <Stack.Screen 
            name="MealsDetail"
            component={MealsDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="tap me"></Button>
            //   }
            // }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
