import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          props.navigation.popToTop();
        }}
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

export default MealDetailScreen;
