import React from 'react'
import { EmptyState } from '@shopify/polaris';

const ProductEmptyState = ({setIsOpen}) => {
  return (
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
  );
}

export default ProductEmptyState