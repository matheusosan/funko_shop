import React, { useContext } from "react";
import { CartContext } from "@/contexts/Context";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import * as S from "./styles";
import Link from "next/link";
import Sidebar from "../Sidebar";

const Header = () => {
  const { shoppingCart, sidebar, handleSidebar } = useContext(CartContext);

  return (
    <S.Header>
      {sidebar && <Sidebar />}
      <Link href="/">
        <AiFillHome />
      </Link>
      <Link href="/product">Shop</Link>
      <div id="cart-menu">
        <Link href="/cart">
          <AiOutlineShoppingCart />
        </Link>
        <p>{shoppingCart.length}</p>
      </div>
      <FiMenu id="burguer-menu" onClick={handleSidebar} />
    </S.Header>
  );
};

export default Header;
