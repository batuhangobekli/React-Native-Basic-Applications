import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                () => navigation.navigate("ResultsShow", { id: item.id }) //Navigate to Result Screen and send clicked "restaurant id"
              }
            >
              <ResultsDetail result={item}></ResultsDetail>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    marginBottom: 15,
  },
});

export default withNavigation(ResultsList);
