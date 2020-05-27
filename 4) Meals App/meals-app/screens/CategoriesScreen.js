import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const renderGridItem = (item, navigation) => {
  return (
    <TouchableOpacity
      style={styles.grid}
      onPress={() => {
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: item.id,
          },
        });
      }}
    >
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen = (props) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => renderGridItem(item, props.navigation)}
      ></FlatList>
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
