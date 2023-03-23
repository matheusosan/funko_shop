import React from "react";
import Header from "../../components/Header";
import ShoppingCartPage from "../../components/ProductsPage";
import PageFooter from "@/components/Footer";
import Head from "next/head";

const product = () => {
  return (
    <>
      <Head>
        <title>Explorar Produtos</title>
      </Head>
      <Header />
      <ShoppingCartPage />
      <PageFooter />
    </>
  );
};

export default product;
