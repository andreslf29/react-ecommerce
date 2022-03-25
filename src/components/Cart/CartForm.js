import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/CartForm.scss";
import useCartContext from "../../context/CartContext";
import { generateOrder } from "../../Firebase";

const CartForm = () => {
  const { clearCart } = useCartContext();
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
  });
  const [errorMail, setErrorMail] = useState(false);

  const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === "modal-card") {
      return;
    }

    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formsa = new FormData(event.target);
    const dataForm = {};
    formsa.forEach((valueForm, parent) => {
      dataForm[parent] = valueForm;
    });
    if (dataForm.mail !== dataForm.mail2) {
      setErrorMail(true);
      handleModalOpen();
    } else {
      setErrorMail(false);
      const orderId = await generateOrder({
        datos: { testData: "hellowRoewd" },
      });
      setBuyer((prevData) => ({ ...prevData, orderId }));
      clearCart();
      handleModalOpen();
    }
  };

  return (
    <div className="form__cart--container">
      <h2 className="text-center mb-5">
        Ingresa tus datos <span className="block">para terminar la compra</span>{" "}
      </h2>

      <form onSubmit={handleSubmit} className="row">
        <div className="campo__form col-12 col-md-7">
          <label value={buyer.name} htmlFor="buyerName">
            Nombre Completo:
          </label>
          <input type="text" name="buyerName" required />
        </div>
        <div className="campo__form col-12 col-md-7">
          <label value={buyer.email} htmlFor="mail">
            Correo electrónico:
          </label>
          <input type="email" name="mail" required />
        </div>
        <div className="campo__form col-12 col-md-7">
          <label value={buyer.email2} htmlFor="mail2">
            Correo electrónico:
          </label>
          <input type="email" name="mail2" required />
        </div>
        <div className="campo__form col-12 col-md-7">
          <label value={buyer.phone} htmlFor="phoner">
            Celular:
          </label>
          <input type="tel" name="phone" required />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/cart">
            <button className="boton">Cancelar</button>
          </Link>
          <input
            type="submit"
            value="Finalizar"
            className="boton__alert mx-2"
          />
        </div>
      </form>

      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            {errorMail ? (
              "REVISE LOS MAILS"
            ) : (
              <>
                <h2>Gracias por tu compra</h2>
                <h2>{buyer.orderId}</h2>

                <p>
                  Pronto estaremos en contacto contigo para programar el envío y
                  método de pago.
                </p>
                <Link to="/" className="boton">
                  Ir al Inicio
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
