import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { Icon } from "@iconify/react";
import "../styles/ItemDetail.scss";
import useCartcontext from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const { nombre, id, imagen, descripcion, precio, stock } = data;

  const { quantity, addItem, isInCart, removeItemFromCart, clearCart } =
    useCartcontext();

  const onAdd = (count) => {
    addItem(data, count);
  };

  if (data.id) {
    return (
      <div className="row bg-light p-5 d-flex justify-content-center">
        <div className="col-md-6 col-12 cardDetail">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="mt-2 col-md-4 col-12 cardDetail">
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <p className="precio">${precio}</p>
          <p className="mb-1">Stock: {stock}</p>
          {isInCart(data.id) ? (
            <div>
              <Link to="/cart">
                <button className="boton">
                  Ir al carrito
                  <Icon
                    icon="ant-design:shopping-cart-outlined"
                    className="cart"
                  />
                </button>
              </Link>
              <Link to="/">
                <button className="boton__alert mx-2">Seguir Comprando</button>
              </Link>
              <button
                className="boton"
                onClick={() => removeItemFromCart(data.id)}
              >
                <Icon icon="ep:delete" />
              </button>
            </div>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Producto no disponible</h1>;
  }
};

export default ItemDetail;
