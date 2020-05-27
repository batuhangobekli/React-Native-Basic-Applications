import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
        }}
        title='Go to Meals'
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
