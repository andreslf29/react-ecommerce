import React, {createContext} from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import  {CartContextProvider}  from "./context/CartContext";
import CartView from "./components/Cart/CartView";



function App() {
  return (
    <>
      {/*<Hero />*/}
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
          <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
      
    </>
  );
}

export default App;