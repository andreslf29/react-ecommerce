import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { Icon } from "@iconify/react";
import "../styles/ItemDetail.scss";
import useCartcontext from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const { nombre, id, imagen, descripcion, precio, stock } = data;

  let [inCart, setInCart] = React.useState(false);
  const { quantity } = useCartcontext;

  const onAdd = (count) => {
    setInCart(true);
    alert(`Se añadieron ${count} articulos al carrito`);
  };

  return (
    <>
      <div className="row bg-light p-5">
        <div className="col-md-6 col-12 cardDetail">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="col-md-6 col-12 cardDetail">
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <p className="precio">${precio}</p>
          {inCart ? (
            <Link to="/cart">
              <button className="boton">
                Ir al carrito{" "}
                <Icon
                  icon="ant-design:shopping-cart-outlined"
                  className="cart"
                />
              </button>
            </Link>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
