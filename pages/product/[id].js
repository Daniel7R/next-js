import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import fetch from 'isomorphic-unfetch'

export const getStaticPaths= async() => {
  const response= await fetch("https://next-js-mu-one.vercel.app/api/avo")
  const {data: productList} = await response.json();
  const paths= productList.map(product => ({
    params: {
      id: product.id
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps= async({params}) => {
  const response= await fetch(`https://next-js-mu-one.vercel.app/api/avo/${params.id}`)
  const {entry: aguacate}= await response.json()
  return {
    props: {
      aguacate
    }
  }
}

const ProductItem = ({aguacate}) => {

  return (
    <Layout>
      {aguacate !== null && <ProductSummary product={aguacate} />}
    </Layout>
  )
}

export default ProductItem