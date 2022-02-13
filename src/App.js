import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";


function App() {
  return (
    <div>
      <Header />
      {/*
      <Hero />
      <ItemListContainer />
      */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
