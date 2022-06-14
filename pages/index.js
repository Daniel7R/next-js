import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import Layout from "@components/Layout/Layout";
import ProductList from "@components/ProductList/ProductList";
import React from "react";
import fetch from 'isomorphic-unfetch';

export const getStaticProps= async() => {

  const response= await fetch("https://next-js-mu-one.vercel.app/api/avo")
  const {data: productList}= await response.json()
  return {
    props: {
      productList,
    }
  }
}

const Home = ({productList}) => {

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
