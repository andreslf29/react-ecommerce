import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartForm = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Compra Finalizada');

  }
  return (
    <div>
      <h2>Ingresa tus datos para terminar la compra</h2>

      <form  onSubmit={handleSubmit}>
        <div>
          <label value={buyer.name} for="buyerName">Nombre Completo:</label>
          <input type="text" name="buyerName" required/>
        </div>
        <div>
          <label value={buyer.email} for="mailBuyer">Correo electrónico:</label>
          <input type="email" name="mailBuyer" required />
        </div>
        <div>
          <label value={buyer.phone} for="phoneBuyer">Celular:</label>
          <input type="number" name="phoneBuyer" required />
        </div>
        <Link to="/cart">
         <button>Cancelar</button>
        </Link>
        <input type="submit" value="Finalizar" />
      </form>
    </div>
  );
};

export default CartForm;
