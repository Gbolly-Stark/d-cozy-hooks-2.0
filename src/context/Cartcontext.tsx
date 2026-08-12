import { createContext, useState } from "react";
import { Product } from "../types/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

const CartContext = createContext(null);

const CartProvider = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
};
const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
   if(existingItem) {
    setCart(
        cart.map((item)) => item.product.id
        ?{item.product.quantity === + 1}
    )
};