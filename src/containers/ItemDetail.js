import React, { useState, useEffect } from "react";
import ItemCount from "../components/ItemCount";
import '../styles/ItemDetail.scss'

const ItemDetail = ({ data }) => {
  const { nombre, id, imagen, descripcion, precio, stock } = data;

  return (
    <>
      <div className="row bg-light p-5">
        <div className="col-md-6 cardDetail">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="col-md-6 cardDetail">
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <p className="precio">${precio}</p>
          <ItemCount stock={stock} initial={1}/>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;