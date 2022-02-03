import React from 'react';
import '../styles/ItemListContainer.scss'

const ItemListContainer = (props) => {

  return (
      <div className='itemListContainer'>
      {props.greeting}
      
      </div>
      
      
      
      );
};

export default ItemListContainer;
