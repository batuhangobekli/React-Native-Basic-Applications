import React from "react";
import { Text, StyleSheet,FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name:'Friend #1' },
        {name:'Friend #2' },
        {name:'Friend #3' },
        {name:'Friend #4' },
        {name:'Friend #5' },
        {name:'Friend #6' },
    ];
    return (
        <FlatList 
        keyExtractor ={friend => friends.name}
        data = {friends}
        renderItem = {
            ({ item }) => {
                return <Text>{item.name}</Text>
            }} 
        />
    )
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  
  export default ListScreen;
  