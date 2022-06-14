
import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import AddToCart from './AddTocart'
import ProductAttributes from './ProductAttributes'


const ProductSummary = ({product}) => {
    
    const productItem= Object(product);
    return (
    <>
        <Item.Group as="section" key={productItem.id}>
            <Item style={{alignItems: "center"}}>
                <Item.Image size='medium'>
                    <img src={Object(productItem.image)} alt={productItem.name} />
                </Item.Image>
                <Item.Content>
                    <Item.Header as="h1">{productItem.name}</Item.Header>
                    <Item.Description>
                        <p>{productItem.price}</p>
                        <Label>{`SKU: ${productItem.sku}`}</Label>
                    </Item.Description>
                    <Item.Extra>
                        <AddToCart product= {productItem} />
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
        <ProductAttributes {...productItem.attributes} />
    </>
  )
}

export default ProductSummary