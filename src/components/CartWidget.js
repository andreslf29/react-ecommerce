import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../styles/CartWidget.scss';

const CartWidget = () => {
  return (
    <Link to="/cart">
    <button className='cartIcon'>
    <Icon icon="ant-design:shopping-cart-outlined" className='cart' />
    <span>0</span>
</button>
  </Link>

  )
};

export default CartWidget;
