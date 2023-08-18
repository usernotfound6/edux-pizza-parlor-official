import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// 
const pizzaList = (state = [], action) => {
    if(action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        pizzaList
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
