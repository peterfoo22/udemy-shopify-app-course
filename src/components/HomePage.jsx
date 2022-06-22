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

import { Fragment } from "react";

import React, { useState } from "react";

import { ResourcePicker } from "@shopify/app-bridge-react";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

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
      ></ResourcePicker>

      {products.length > 0 ? (
        <Page
          title="Product Selector"
          primaryAction={{
            content: "Select Product",
            onAction: () => {
              setIsOpen(true);
            },
          }}
          fullWidth
        ></Page>
      ) : (
        <EmptyState
          heading="Manage Your Products You want to Display"
          action={{
            content: "Select products",
            onAction: () => setIsOpen(true),
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Select the products you want to use on your banner</p>
        </EmptyState>
      )}
    </Fragment>
  );
}
