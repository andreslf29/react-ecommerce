import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();

const useCartContext = function () {
  return useContext(CartContext);
};

export function CartContextProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItem(data, qty) {
    setItemsInCart([...itemsInCart, { ...data, qty }]);
  }

  function isInCart(id) {
    let found = itemsInCart.some((data) => {
      return data.id === id;
    });
    return found;
  }

  function getItemInCart(id) {
    let itemInCart = itemsInCart.find((data) => {
      return data.id === id;
    });
    return itemInCart;
  }

  function removeItemFromCart(id) {
    if (isInCart(id)) {
      let filterCart = itemsInCart.filter((data) => {
        return data.id !== id;
      });
      setItemsInCart(filterCart);
    }
  }

  function clearCart() {
    setItemsInCart([]);
  }

  function countItemsInCart() {
    let total = 0;
    itemsInCart.forEach((item) => {
      total += item.qty;
    });
    return total;
  }

  function getTotal() {
    let totalPrice = 0;
    itemsInCart.forEach((item) => {
      totalPrice = totalPrice + item.qty * item.precio;
    });
    return Number(totalPrice.toFixed(2));
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        isInCart,
        clearCart,
        getTotal,
        getItemInCart,
        removeItemFromCart,
        itemsInCart,
        countItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;
