import React, { useContext } from "react";
import * as S from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "@/contexts/Context";
import Link from "next/link";
import { BsFillTrashFill } from "react-icons/bs";

const Sidebar = () => {
  const { shoppingCart, handleSidebar, removeFromCart } =
    useContext(CartContext);
  const view = window.matchMedia("(max-width: 768px)");

  return (
    <>
      {view.matches && (
        <S.SideBar>
              <div id="side-top">
                <AiOutlineClose onClick={handleSidebar} />
              </div>
          {shoppingCart.length === 0 ? (
              <h2 style={{marginTop: '50%'}}>Não há itens no carrinho.</h2>
          ) : (
              <S.SideContent>
                {shoppingCart.map((item) => (
                  <S.SideItem key={item.product.id}>
                    <img
                      src={item.product.images.icon1}
                      alt={item.product.title}
                    />
                    <h3>{item.product.title}</h3>
                    <p>R${(item.quantity * item.product.price).toFixed(2)}</p>
                    <BsFillTrashFill
                      onClick={() => removeFromCart(item.product.id)}
                    />
                  </S.SideItem>
                ))}
                <Link href="/cart">
                  <button onClick={handleSidebar}>Carrinho</button>
                </Link>
              </S.SideContent>
          )}
        </S.SideBar>
      )}
    </>
  );
};

export default Sidebar;
