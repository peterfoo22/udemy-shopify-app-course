import React from "react";
import { Card, ResourceItem, ResourceList } from "@shopify/polaris";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <Card>
      <ResourceList 
        showHeader
        resourceName={{singular:"Product", plural:"Products"}}
        items={products}
        renderItem={product=>{
          return <ProductItem product = {product} /> 
        }}
      /> 
    </Card>
  );
};

export default ProductList;
