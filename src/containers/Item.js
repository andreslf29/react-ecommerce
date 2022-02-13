import React from 'react';
import '../styles/Item.scss'

const Item = ({item}) => {
  return (
      <div className="product__card col-md-4">
        <img src='{item.imagen}' alt='{item.nombre}'/>
        <h4>{item.nombre}</h4>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
      </div>);
};

export default Item;
