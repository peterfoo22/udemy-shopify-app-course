import { Thumbnail } from "@shopify/polaris";
import React from "react";
import { Fragment } from "react";
import { ImagesMajor } from "@shopify/polaris-icons";

const ProductItem = ({ product }) => {
  const image = product.images[0] ? product.images[0].originalSrc : ImagesMajor;

  return (
    <Fragment>
      <Thumbnail source={image} />
      {product.title}
    </Fragment>
  );
};

export default ProductItem;
