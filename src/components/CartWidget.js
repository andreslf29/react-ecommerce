import React from "react";
import useCartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/CartWidget.scss";

const CartWidget = () => {
  const {countItemsInCart} = useCartContext();
  return (
    <Link to="/cart">
      <button className="cartIcon">
        <Icon icon="ant-design:shopping-cart-outlined" className="cart" />

        { countItemsInCart() !==0 && <span>{countItemsInCart()}</span> }
        
      </button>
    </Link>
  );
};

export default CartWidget;
