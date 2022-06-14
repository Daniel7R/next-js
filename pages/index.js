import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import Layout from "@components/Layout/Layout";
import ProductList from "@components/ProductList/ProductList";
import React from "react";

const Home = () => {
  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    window
      .fetch("/api/avo")
      .then(response => response.json())
      .then(({data}) => setProductList(data));
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
