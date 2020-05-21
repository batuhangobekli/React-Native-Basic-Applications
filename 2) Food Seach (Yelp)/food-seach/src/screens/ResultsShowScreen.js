import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import useBusiness from "../hooks/useBusiness";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [getBusinessDetails, business, errorMessage] = useBusiness();

  useEffect(() => {
    getBusinessDetails(id);
  }, []);

  if (!business) {
    return null;
  }

  return (
    <>
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source ={{ uri: item }}></Image>;
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
