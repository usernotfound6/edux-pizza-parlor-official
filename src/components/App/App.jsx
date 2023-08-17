import React from 'react';
import axios from 'axios';
import './App.css';
// imports for components
import {Header} from '..Header/Header';
import {PizzaList} from '..PizzaList/PizzaList';
import {CustomerForm} from '..CustomerForm/CustomerForm';
import {Checkout} from '..Checkout/Checkout';
import {PizzaAdmin} from '..PizzaAdmin/PizzaAdmin';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Header />
      <PizzaList />
      <CustomerForm />
      <Checkout/>
      <PizzaAdmin />
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
