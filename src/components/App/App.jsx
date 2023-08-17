import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// imports for components
import Home from '../Home/Home';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import PizzaAdmin from '../PizzaAdmin/PizzaAdmin';



function App() {

  return (
    <div className='App'>
     <Header />
      
      <Router>
        <div>
          <div className="nav">
             <>
              <Link to="/order">Order Pizza</Link>
            </>
          </div>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/order">
          <PizzaList />
        </Route>

        <Route exact path="/form">
          <CustomerForm />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route exact path="/admin">
          <PizzaAdmin />
        </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
