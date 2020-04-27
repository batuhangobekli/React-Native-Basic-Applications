import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image} from "react-native";


const ImageDetail = ({imageSource ,title , score}) => {
    return <View>
    <Image source = {imageSource} />
    <Text>{title}</Text>
    <Text>Image score - {score}</Text>
    </View>
   
};

const styles = StyleSheet.create({});

export default ImageDetail;
