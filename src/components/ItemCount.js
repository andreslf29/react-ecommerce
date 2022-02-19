import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import '../styles/ItemCount.scss'

const ItemCount = ({initial, stock}) => {
    let [count, setCount] = useState(initial);

    const sumar = () => {
        if(stock > count){
            setCount(count + 1)
        } else{
            alert("Cantidad máxima disponible")
        }
    }

    const restar = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        //alert(`Se añadieron ${count} artículos al carrito`);
        alert(`Se añadieron${count}articulos al carrito`)
    }
 
  return (
        <div className='contenedor__contador'>
            <div className='mas-menos'>
                <button onClick={sumar}><Icon icon="akar-icons:circle-plus" /></button>
                    <p>{count}</p>
                <button onClick={restar}><Icon icon="akar-icons:circle-minus" /></button>
            </div>
            <button onClick={onAdd} className='boton'>Agregar al carrito</button>    
        </div>      
    );
};

export default ItemCount;
