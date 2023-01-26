/* eslint-disable @next/next/no-img-element */
import { CartContext } from "../../contexts/Context";
import React, { useContext } from "react";
import * as S from "./styles";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
import funkos from "../../services";

const ShoppingCartPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <S.Main>
      <S.CardContainer>
        {funkos.map((funko) => (
          <S.Card key={funko.id}>
            <Link href={`/product/${funko.id}`}>
              <img src={funko.images.icon1} alt={funko.title} />
            </Link>
            <h3>{funko.title}</h3>
            <p>R${funko.price}</p>
            <button onClick={() => addToCart(funko.id)}>
              <BsFillCartPlusFill />
            </button>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Main>
  );
};

export default ShoppingCartPage;
