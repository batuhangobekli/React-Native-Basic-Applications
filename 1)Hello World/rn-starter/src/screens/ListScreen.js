import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 13 },
    { name: "Friend #3", age: 14 },
    { name: "Friend #4", age: 15 },
    { name: "Friend #5", age: 16 },
    { name: "Friend #6", age: 17 },
  ];
  return (
    <FlatList
      // horizontal = {true} Make list horizontal
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 15,
  },
});

export default ListScreen;
