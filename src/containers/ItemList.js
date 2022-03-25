import React from 'react';
import Item from './Item';
import Loader from '../components/Loader';
import  '../styles/ItemList.scss';

const ItemList = ({items}) => {
    console.log(items)

    if (items.length === 0) {
        return <Loader />;
      } else{
        return (
            <div className='row itemList'>
                {
                    items.map(function (itemIterado) {
                        return    <Item
                                key={itemIterado.id}
                                item={itemIterado} />;
                        })
                }
            </div>
          );    
      }

};

export default ItemList;
