import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// 
const pizzaCart = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }
    return state
}


// Current order reducer
const currentOrder = (state = [], action) => {

    // sample object
    let order = {
        name: 'example name',
        street_address: 'example address',
        city: 'example city',
        zip: 99999,
        type: 'example type',
        total: 0,
        time: 'example time',
        pizzas: [
            {id: 1, quantity: 1},
            {id: 2, quantity: 1},
            {id: 3, quantity: 1},
            {id: 4, quantity: 1},
            {id: 5, quantity: 1},
            {id: 6, quantity: 1},
        ]
    }


    // Add customer information from PizzaForm page

    return state
}

const storeInstance = createStore(
    combineReducers({
        pizzaCart,
        currentOrder
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
