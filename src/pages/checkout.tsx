import React from "react";
import CheckoutPage from "@/components/Checkout";
import Head from "next/head";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Pedido confirmado!</title>
      </Head>
      <CheckoutPage />
    </>
  );
};

export default Checkout;
