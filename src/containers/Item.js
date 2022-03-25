import React from "react";
import "../styles/Item.scss";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="product__card">
      <img src={`${item.imagen}`} alt="{item.nombre}" />
      <p className="mt-2">{item.marca}</p>
      <h4>{item.nombre}</h4>
      <p className="description">{item.descripcion}</p>
      <p>${item.precio}</p>
      {item.stock === 0 ? (
        <p>Agotado</p>
      ) : (
        <button className="boton w-100">
          <Link to={`/item/${item.id}`}>Ver más</Link>
        </button>
      )}
    </div>
  );
};

export default Item;
