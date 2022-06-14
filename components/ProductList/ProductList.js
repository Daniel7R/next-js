import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ products }) => (
  <Card.Group itemsPerRow={2} stackable>
    {products.map( p => {
      return (
        <Link key={p.id} href={`/product/${p.id}`} >
          <Card
            as="a"
            header={p.name}
            image={{ children: <Image src={p.image} width={333} height={333} /> }}
            meta={{
              children: (
                <Card.Meta style={{ color: "dimgray" }}>{p.price}</Card.Meta>
              ),
            }}
          />
        </Link>
      );
    })}
  </Card.Group>
);

export default ProductList;
