import React from 'react';
import '../styles/ItemListContainer.scss'

const ItemListContainer = (greeting) => {

  greeting = "Pronto conoceras nuestro catálogo de productos...";

  return (
      <div className='itemListContainer'>
      {greeting}
      
      </div>
      
      
      
      );
};

export default ItemListContainer;
