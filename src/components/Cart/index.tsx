/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/Context";
import React, { useContext, useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";

const Cart = () => {
  const { shoppingCart, removeFromCart, increaseCart, decreaseCart } =
    useContext(CartContext);

  const [discount, setDiscount] = useState<string | null>(null);
  const [discountValue, setDiscountValue] = useState<number | null>(null);

  const form = useRef<HTMLFormElement>(null);
  const formData = (e: React.FormEvent) => {
    e.preventDefault();
    const coupon = (form.current as HTMLFormElement).coupon.value;
    setDiscount(coupon);
    (e.target as HTMLFormElement).reset();
  };

  useEffect(() => {
    switch (discount) {
      case "5OFF":
      case "5off":
        setDiscountValue(5);
        break;
      case "10OFF":
      case "10off":
        setDiscountValue(10);
        break;
      default:
        setDiscountValue(null);
    }
  }, [discount]);

  const subtotalValue = shoppingCart.reduce((total, current) => {
    return total + current.product.price * current.quantity;
  }, 0);

  const totalWithDiscount = shoppingCart.reduce((total, current) => {
    return (
      total +
      (current.product.price * current.quantity * (discountValue as number)) /
        100
    );
  }, 0);

  const finalPay = subtotalValue - totalWithDiscount;

  return (
    <S.CartMain>
      {shoppingCart.length === 0 ? (
        <h2 style={{ marginTop: "4rem" }}>Não há itens no carrinho.</h2>
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
              <BsFillTrashFill
                onClick={() => removeFromCart(item.product.id)}
              />
            </div>
          ))}
        </S.CartContainer>
      )}

      {shoppingCart.length >= 1 && (
        <S.ReviewOrder>
          <h2>Resumo do pedido</h2>
          <div className="discount">
            <h3>Cupom</h3>
            <form action="" ref={form} onSubmit={formData}>
              <input type="text" name="coupon" placeholder="Digite seu cupom" />
              <input value="Aplicar" type="submit" />
            </form>
          </div>
          <div className="subtotal">
            <h3>Subtotal</h3>
            <p>R${subtotalValue.toFixed(2)}</p>
          </div>

          <div className="total">
            <h3>Total</h3>
            <p>R${finalPay.toFixed(2)}</p>
          </div>

          <button>FINISH ORDER</button>
        </S.ReviewOrder>
      )}
    </S.CartMain>
  );
};

export default Cart;
