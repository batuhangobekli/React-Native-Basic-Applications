import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavouritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavouritesScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
      },
    },
    Favorites: {
      screen: FavouritesNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-star'
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const MainNavigator = createD;

export default createAppContainer(MealsFavTabNavigator);
