import React from "react";
import "../styles/Item.scss";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="product__card">
      <Link to={`/item/${item.id}`}>
        <img src={`${item.imagen}`} alt="{item.nombre}" />
      </Link>
      <p className="mt-2">{item.marca}</p>
      <Link to={`/item/${item.id}`}>
        <h4>{item.nombre}</h4>
      </Link>
      <p className="description">{item.descripcion}</p>
      <p>${item.precio}</p>
      <button className="boton">
        <Link to={`/item/${item.id}`}>Ver más</Link>
      </button>
    </div>
  );
};

export default Item;
