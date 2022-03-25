import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import CartView from "./components/Cart/CartView";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<>NOT FOUND</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
