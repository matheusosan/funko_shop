import React from "react";
import * as S from "./styles";
import Order from "../../assets/images/checkout/undraw.svg";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <S.Main>
      <img src={Order.src} alt="logo" />
      <h2>Pedido confirmado!</h2>

      <p>
        Retornar a <Link href="/">página inicial</Link>
      </p>
    </S.Main>
  );
};

export default CheckoutPage;
