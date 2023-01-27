/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/Context";
import React, { useContext } from "react";
import * as S from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";

const Cart = () => {
  const { shoppingCart, removeFromCart, increaseCart, decreaseCart } =
    useContext(CartContext);

  return (
    <S.CartMain>
      {shoppingCart.length === 0 ? (
        <h2>Não há itens no carrinho.</h2>
      ) : (
        <S.CartContainer>
          <h2>Carrinho:</h2>
          {shoppingCart.map((item) => (
            <div key={item.product.id}>
              <Link href={`/product/${item.product.id}`}>
                <img src={item.product.images.icon1} alt={item.product.title} />
              </Link>

              <div className="product">
                <h3>Produto</h3>
                <p>{item.product.title}</p>
              </div>

              <div className="quantity">
                <h3>Quantidade</h3>
                <div className="handle-quantity">
                  <button onClick={() => decreaseCart(item.product.id)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increaseCart(item.product.id)}>
                    +
                  </button>
                </div>
              </div>

              <div className="price">
                <h3>Preço Total</h3>
                <p>R${(item.quantity * item.product.price).toFixed(2)}</p>
              </div>
              <BsFillTrashFill style={{color: 'black'}}
                onClick={() => removeFromCart(item.product.id)}
              />
            </div>
          ))}
        </S.CartContainer>
      )}

      {shoppingCart.length >= 1 && (
        <S.ReviewOrder>
          <h2>Resumo do pedido</h2>

          <div className="shipment">
            <h3>Frete</h3>
            <input type="text" />
          </div>
          <div className="subtotal">
            <h3>Subtotal</h3>
            <p>Subtotal</p>
          </div>

          <div className="total">
            <h3>Total</h3>
            <p>Total</p>
          </div>

          <button>FINISH ORDER</button>
        </S.ReviewOrder>
      )}
    </S.CartMain>
  );
};

export default Cart;
