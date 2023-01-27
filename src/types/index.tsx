import React, { Dispatch, SetStateAction } from "react";

export interface IFunkos {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string
    icon2?: string
    icon3?: string 
  }
}
export interface IShoppingCartItem {
  product: IFunkos;
  quantity: number;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IContextProps {
  funkos: IFunkos[];
  addToCart(id: number): void;
  removeFromCart(id: number): void;
  shoppingCart: IShoppingCartItem[];
  setShoppingCart: Dispatch<SetStateAction<IShoppingCartItem[]>>;
  handleClearCart(): void;
  increaseCart(id: number): void;
  decreaseCart(id: number): void;
  handleSidebar(): void,
  sidebar: boolean,
}


