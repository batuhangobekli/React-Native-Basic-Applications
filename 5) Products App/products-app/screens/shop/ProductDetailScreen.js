import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Product from "../../models/product";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const productTitle = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

export default ProductDetailScreen;
