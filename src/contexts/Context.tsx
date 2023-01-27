import React, { createContext, useState } from "react";
import funkos from "@/services";
import { IChildren, IContextProps, IShoppingCartItem } from "@/types";

const CartContext = createContext<IContextProps>({} as IContextProps);

const CartProvider = ({ children }: IChildren) => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const addToCart = (id: number) => {
    const funko = funkos.find((funko) => funko.id === id);
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    const cartItem: IShoppingCartItem = {
      product: funko!,
      quantity: 1,
    };

    const newShoppingCart: IShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };

  const removeFromCart = (id: number) => {
    const newShoppingCart: IShoppingCartItem[] = shoppingCart.filter(
      (item) => item.product.id !== id
    );
    setShoppingCart(newShoppingCart);
  };

  const increaseCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity++,
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }
  };

  const decreaseCart = (id: number) => {
    const alreadyInShoppingCart = shoppingCart.find(
      (item) => item.product.id === id
    );
    if (alreadyInShoppingCart) {
      const newShoppingCart: IShoppingCartItem[] = shoppingCart.map((item) => {
        if (item.product.id === id)
          ({
            ...item,
            quantity: item.quantity--,
          });
        if (item.quantity < 0)
          ({
            quantity: (item.quantity = 0),
          });
        return item;
      });
      setShoppingCart(newShoppingCart);
      return;
    }
  };

  const handleClearCart = () => {
    setShoppingCart([]);
  };

  ////// SIDEBAR /////
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <CartContext.Provider
      value={{
        funkos,
        shoppingCart,
        setShoppingCart,
        addToCart,
        removeFromCart,
        handleClearCart,
        increaseCart,
        decreaseCart,
        handleSidebar,
        sidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
