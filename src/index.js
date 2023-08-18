import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';



const pizzaList = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }
    return state
}
const custInfo = (state = [], action) => {
   
    if(action.type === 'SET_CUST_INFO') {
        return action.payload
    }
    return state
  };

const pizzaCart = (state = [{name: 'Pepperoni', cost: 12.99}, {name: 'Deluxe', cost: 13.99}], action) => {
    if(action.type === 'SET_PIZZA_CART') {
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        pizzaCart,
        custInfo,
    })
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
