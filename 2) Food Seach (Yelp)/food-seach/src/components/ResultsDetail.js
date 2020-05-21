import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style ={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: result.image_url }}
      ></Image>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom:5
  },
});

export default ResultsDetail;
