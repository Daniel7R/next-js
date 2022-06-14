import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import fetch from 'isomorphic-unfetch'

const ProductItem = () => {
  const [aguacate, setAguacate]= React.useState();

  const {
    query: {id}
  }
  = useRouter();

  React.useEffect(() => {
    id && fetch(`/api/avo/${id}`)
            .then(response => response.json())
            .then(({entry}) => setAguacate(entry) )
            .catch(err => console.error(err))
  }, [id])

  console.log(aguacate);

  return (
    <Layout>
      {aguacate !== null && <ProductSummary product={aguacate} />}
    </Layout>
  )
}

export default ProductItem