import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/CartWidget.scss';

const CartWidget = () => {
  return (
    <div className='cartIcon'>
        <Icon icon="ant-design:shopping-cart-outlined" className='cart' />
        <span>0</span>
    </div>
  )
};

export default CartWidget;
