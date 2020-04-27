import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image} from "react-native";


const ImageDetail = (props) => {
    return <View>
    <Image source = {require("../../assets/beach.jpg")} />
    <Text>{props.title}</Text>

    </View>
   
};

const styles = StyleSheet.create({});

export default ImageDetail;
