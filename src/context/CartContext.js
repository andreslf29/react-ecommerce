import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();

const useCartContext = function () {
  return useContext(CartContext);
};

export function CartContextProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);

  function addItem(data, qty) {
    setItemsInCart((prevState)=>[...prevState, { ...data, qty }]);
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

  return (
    <CartContext.Provider
      value={{
        addItem,
        isInCart,
        clearCart,
        getItemInCart,
        removeItemFromCart,
        quantity: 5,
        itemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;
