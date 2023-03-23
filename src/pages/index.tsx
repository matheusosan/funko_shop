import React from "react";
import Header from "../components/Header"
import Home from "@/components/Home";
import PageFooter from "@/components/Footer";
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <Header />
      <Home />
      <PageFooter />
    </>
  );
};

export default index;
