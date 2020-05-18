import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components Demo"
      ></Button>

      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />

      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Images")}
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
