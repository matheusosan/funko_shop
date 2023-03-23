import React from "react";
import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Head from 'next/head'

const cart = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <Header />
      <Cart />
    </>
  );
};

export default cart;
