import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  EmptyState,
} from "@shopify/polaris";
import ProductList from "./ProductList";

import { Fragment, useEffect } from "react";

import React, { useState } from "react";

import { ResourcePicker } from "@shopify/app-bridge-react";
import ProductEmptyState from "./ProductEmptyState";
import ProductPage from "./ProductPage";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsID, setProductsID] = useState([]);
  useEffect(()=>{
    const ids = products.map(product => {
      return {
        id: product.id
      };
    })
    setProductsID(ids);
  },[products])

  const handleProductSelection = (payload) => {
    setIsOpen(false);
    setProducts(payload.selection);
  };

  return (
    <Fragment>
      <ResourcePicker
        resourceType="Product"
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
        open={isOpen}
        initialSelectionIds={productsID}
      ></ResourcePicker>

      {products.length > 0 ? (
        <ProductPage products={products} setIsOpen={setIsOpen}></ProductPage>
      ) : (
        <ProductEmptyState setIsOpen={setIsOpen}></ProductEmptyState>
      )}
    </Fragment>
  );
}
