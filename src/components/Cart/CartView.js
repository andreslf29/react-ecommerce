import React from "react";
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../../styles/CartView.scss";

function CartView() {
  const { itemsInCart, removeItemFromCart, clearCart, getTotal } =
    useCartContext();

  if (itemsInCart.length === 0) {
    return (
      <div className="empty__cart">
        <h3>Carrito vacío</h3>
        <p>Mira los nuevos lanzamientos</p>
        <Link to="/" className="boton">
          Ir al inicio
        </Link>
      </div>
    );
  } else {
    return (
      <div className="table__container">
        <div className="table-responsive">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="tabla__checkout">
              {itemsInCart.map((data) => (
                <tr key={data.id}>
                  <td className="center">
                    <img src={`${data.imagen}`} alt="{data.nombre}" />
                  </td>
                  <td>{data.nombre}</td>
                  <td>{data.qty}</td>
                  <td>{data.precio}</td>
                  <td>{(data.qty * data.precio).toFixed(2)}</td>
                  <td>
                    <button
                      className="boton mx-auto"
                      onClick={() => removeItemFromCart(data.id)}
                    >
                      Eliminar <Icon icon="carbon:delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center">
            Total de la compra: <span className="bold">${getTotal()}</span>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <button className="boton" onClick={() => clearCart()}>
            Limpiar <Icon icon="ic:baseline-cleaning-services" />
          </button>

          <Link to="/checkout" className="mx-3">
            <button className="boton__alert">
              Ir a pagar <Icon icon="bi:cash-coin" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartView;
