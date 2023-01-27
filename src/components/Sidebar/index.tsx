import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "@/contexts/Context";
import Link from "next/link";

const Sidebar = () => {
  const { shoppingCart, handleSidebar } = useContext(CartContext);
  const view = window.matchMedia("(max-width: 768px)");

  return (
    <>
      {view.matches && (
        <S.SideBar>
          <AiOutlineClose onClick={handleSidebar} style={{ color: "white" }} />
          <S.SideContent>
            {shoppingCart.map((item) => (
              <S.SideItem key={item.product.id}>
                <img src={item.product.images.icon1} alt={item.product.title} />
                <h3>Produto</h3>
                <p>{item.product.title}</p>
                <h3>Quantidade</h3>
                <p>{item.quantity}</p>
                <p>R${(item.quantity * item.product.price).toFixed(2)}</p>
              </S.SideItem>
            ))}
            <Link href="/cart">
              <button onClick={handleSidebar}>Carrinho</button>
            </Link>
          </S.SideContent>
        </S.SideBar>
      )}
    </>
  );
};

export default Sidebar;
