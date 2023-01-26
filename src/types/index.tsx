import { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export interface IFunkos {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string | undefined
    icon2: string | undefined
    icon3: string | undefined
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
}
