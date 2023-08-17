import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { PizzaItem } from './Pizza Item/PizzaItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function PizzaList() {

    const dispatch = useDispatch();

    const pizzaCart = useSelector(store => store.pizzaCart)
    console.log('pizzaCart is:', pizzaCart)

    useEffect(() => {
        getPizzas()
    }, []);

const getPizzas = () => {
    axios.get('/api/pizza')
    .then((response) => {
        console.log('response.data:', response.data)
        dispatch({
            type: 'SET_PIZZA_LIST',
            payload: response.data
        })
    })
    .catch((error) => {
        console.log('error on client GET:', error)
    })
}

    return (<>
        {/* Header */}
        <h2>Step 1: Select Your Pizza</h2>
        <br></br>
        <PizzaItem />
        <br></br>
        <br></br>
        <Link to="/form">
            <button>Next</button>
        </Link>
    </>
    )
}

export default PizzaList