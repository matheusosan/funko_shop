import { CartContext } from "@/contexts/Context";
import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const { shoppingCart } = useContext(CartContext);

  return (
    <S.Header>
      <Link href="/"><AiFillHome /></Link>
      <Link href="/product">Shop</Link>
      <div>
        <Link href="/cart">
          <AiOutlineShoppingCart />
        </Link>
        <p>{shoppingCart.length}</p>
      </div>
    </S.Header>
  );
};

export default Header;
