import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return <View>
      <ImageDetail title = "Forest"/>
      <ImageDetail title = "Beach"/>
      <ImageDetail title = "Mountain"/>

  </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;
