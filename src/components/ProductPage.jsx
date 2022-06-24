import React from 'react'
import { Page } from '@shopify/polaris';
import ProductList from './ProductList';
const ProductPage = ({products, setIsOpen}) => {
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Product",
        onAction: () => {
          setIsOpen(true);
        },
      }}
      fullWidth
    >
      <ProductList products={products} />
    </Page>
  );
}

export default ProductPage