import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <Router>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/order">Order Pizza</Link>
            </li>
          </ul>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route exact path="/order">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <CustomerForm />
        </Route>
      
        </div>
      </Router>
  
    </div>
  );
}

export default App;
