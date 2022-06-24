import { ResourceList, Stack, Thumbnail } from "@shopify/polaris";
import React from "react";
import { Fragment } from "react";
import { ImagesMajor } from "@shopify/polaris-icons";
import { TextStyle } from "@shopify/polaris";

const ProductItem = ({ product }) => {
  const image = product.images[0] ? product.images[0].originalSrc : ImagesMajor;
  const media = <Thumbnail source = {image}/>
  const price = product.variants[0].price;
  return (
    <ResourceList.Item media={media} id={product.id} accessibilityLabel={`View details for ${product.title}`}>
      <Stack>
        <Stack.Item fill>
          <TextStyle variation="strong">
            {product.title}
          </TextStyle>
        </Stack.Item>
        <Stack.Item>
         ${price}
        </Stack.Item>
      </Stack>
    </ResourceList.Item>
  );
};

export default ProductItem;
