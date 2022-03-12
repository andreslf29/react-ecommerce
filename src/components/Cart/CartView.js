import React, { useEffect } from "react";
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {
    const { itemsInCart, removeItemFromCart, clearCart, getTotal } = useCartContext();

    if(itemsInCart.length === 0){
        return (
            <div>
            <h3>Carrito vacío</h3>
            <p>Mira los nuevos lanzamientos</p>
            <Link to="/"> Ir al inicio </Link>
          </div>
          )
    } 
    else{
        return (
            <>
            <div class="table-responsive">
            <table class="table table-bordered ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                  <th scope="col">##</th>
                </tr>
              </thead>
              <tbody>
                {
                    itemsInCart.map( data => (
                        <tr key={data.id}>
                        <td><img src={`${data.imagen}`} alt="{data.nombre}" /></td>
                        <td>{data.nombre}</td>
                        <td>{data.qty}</td>
                        <td>{data.precio}</td>
                        <td>{(data.qty * data.precio).toFixed(2)}</td>
                        <td>
                            <button onClick={() => removeItemFromCart(data.id)}>Eliminar</button>
                        </td>
                      </tr>
                    ))
    
                }
              </tbody>
            </table>
            <p>Total de la compra: ${getTotal()}</p>
          </div>
          <button onClick={() => clearCart()}>Limpiar</button>

          <Link to="/checkout">
            <button>Pagar</button>
          </Link>

            </>
            
          )
    }
    

}

export default CartView