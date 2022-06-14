import React from "react";
import Link from "next/link";
import { Item, Button, Loader, Message } from "semantic-ui-react";

const CartItemList = ({ items, removeFromCart, loading = false }) => {
  if (loading) return <Loader active inline="centered" />;

  if (items.length === 0)
    return (
      <Message warning as="section">
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    );

  return (
    <Item.Group divided>
      {items.map((cartItem) => {
        return (
          <React.Fragment key={cartItem.id}>
            <Item>
              <Item.Image
                src={cartItem.image}
                alt={cartItem.name}
                size="small"
                style={{ background: "#f2f2f2" }}
              />

              <Item.Content
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingLeft: "0",
                }}
              >
                <Link
                  href="/product/[id]" as={`/product/${cartItem.id}`} 
                  passHref
                  style={{ textAlign: "center" }}
                >
                  <Item.Header style={{ color: "#4183c4" }} as="a">
                    {cartItem.name}
                  </Item.Header>
                </Link>
                <>
                  <Item.Meta>{`${cartItem.quantity} x ${cartItem.price}`}</Item.Meta>
                  <Item.Description>
                    Some more information goes here!
                  </Item.Description>
                </>
                <Item.Extra>
                  <Button
                    basic
                    icon="remove"
                    floated="right"
                    onClick={() => removeFromCart(cartItem)}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </React.Fragment>
        );
      })}
    </Item.Group>
  );
};

export default CartItemList;
