import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
import "react-native-gesture-handler";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    ></AppLoading>;
  }
  return <MealsNavigator></MealsNavigator>;
}
