import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ItemListContainer greeting="hola soy un gretting"/>
    </div>
  );
}

export default App;
