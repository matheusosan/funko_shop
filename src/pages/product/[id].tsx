import { CartContext } from "@/contexts/Context";
import { IFunkos } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { useContext, useState } from "react";
import funkos from "../../services/index";
import Header from "@/components/Header";
import * as S from "../../styles/product";
import Head from 'next/head'

interface FunkoProps {
  funko: IFunkos;
}

const Funkos = ({ funko }: FunkoProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Produto | {funko.title}</title>
      </Head>
      <Header />
      <S.ProductPage>
        <div>
          <div className="photo-gallery">
            <Image
              style={{ border: "1px solid gray" }}
              src={funko.images.icon1}
              alt={funko.title}
              width={60}
              height={60}
            />
            {funko.images.icon2 && (
              <Image
                style={{ border: "1px solid gray" }}
                src={funko.images.icon2}
                alt={funko.title}
                width={60}
                height={60}
              />
            )}
            {funko.images.icon3 && (
              <Image
                style={{ border: "1px solid gray" }}
                src={funko.images.icon3}
                alt={funko.title}
                width={60}
                height={60}
              />
            )}
          </div>
          <Image id="main-img"
            src={funko.images.icon1}
            alt={funko.title}
            width={250}
            height={300}
          />
        </div>
        <div className="product-details">
          <h1>{funko.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime
            eaque adipisci eligendi, ipsum possimus?
          </p>
          <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
            R${funko.price}
          </p>

          <button onClick={() => addToCart(funko.id)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </S.ProductPage>
    </>
  );
};

export default Funkos;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const selectedFunko = funkos.filter((funko) => funko.id.toString() === id)[0];

  return {
    props: {
      funko: selectedFunko,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fakeFunkos = funkos;

  const paths = fakeFunkos.map((funko) => ({
    params: { id: funko.id.toString() },
  }));

  return { paths, fallback: false };
};
