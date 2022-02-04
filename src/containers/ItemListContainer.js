import React from 'react';
import '../styles/ItemListContainer.scss'
import ItemCount from '../components/ItemCount';

const ItemListContainer = () => {

  return (
      <div className='itemListContainer'>
        <ItemCount 
          initial={1}
          stock={5}
        />
      
      </div>
      
      
      
      );
};

export default ItemListContainer;
