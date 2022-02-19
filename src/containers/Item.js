import React from 'react';
import '../styles/Item.scss';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
      <div className="product__card col-md-3 col-12">
        <img src={`${item.imagen}`} alt='{item.nombre}'/>
        <p className='mt-2'>{item.marca}</p>
        <h4>{item.nombre}</h4>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <button className='boton'>
          <Link to={`/item/${item.id}`}>Ver más</Link>
        </button>
        
      </div>);
};

export default Item;
