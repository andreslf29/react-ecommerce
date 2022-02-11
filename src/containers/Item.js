import React from 'react';
import ItemCount from '../components/ItemCount';
import '../styles/Item.scss'

const Item = ({item}) => {
  return (
      <div className="product__card col-md-4">
        <img src='{item.imagen}' alt='{item.nombre}'/>
        <h4>{item.nombre}</h4>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <ItemCount 
          initial={1}
          stock={item.stock}
        
        />
      </div>);
};

export default Item;
