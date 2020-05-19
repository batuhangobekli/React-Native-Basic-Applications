import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    alignSelf:"center",
    backgroundColor: "green",
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
