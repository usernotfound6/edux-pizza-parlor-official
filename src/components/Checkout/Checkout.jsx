import './Checkout.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';


function Checkout() {

    const dispatch = useDispatch();
    const pizzaCart = useSelector(store => store.pizzaCart)
    console.log('pizzaCart is:', pizzaCart)


    useEffect(() => {
        getPizzaOrder()
    }, []);

const getPizzaOrder = () => {

        axios.get('/api/order')
            .then((response) => {
                console.log('getPizzaOrder GET response.data:', response.data)
                dispatch({
                    type: 'SET_PIZZA_ORDER',
                    payload: response.data
                })
            })
            .catch((error) => {
                console.log('error on client GET:', error)
            })
        }
    
    
    // useSelector here for customer info rendering
    // button functionality
        // with post request to send user info AND cart/cartTotal to database
        // should clear reducers
        // should send user back to order (pizzaList) page
        
    return(<>
        <h2>Step 3: Checkout</h2>
        {/* will need a variable here for displaying pickup or delivery */}
        <h3>Pickup or Delivery</h3>

        <table className="checkout-table">
           <thead>
            <tr>
                <th>Name</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
                {/* will need to map over cart here to render pizza order to table */}
            {pizzaCart.map((pizza, i) => (
                <tr key={i}>
                <td>{pizza.name}</td>
                <td>{pizza.cost}</td>
            </tr>
            ))}
           
            </tbody> 
        </table>

        <div>
            {/* cartTotal amount goes here */}
            <h3>Total: 27.98 </h3>
        </div>


        {/* checkout button posts to database */}
        {/* clears the cart */}
        {/* takes user back to pizza page */}
    <Link to="/order">
        <div className='button'>
        <button>CHECKOUT</button>
        </div>
    </Link>

    </>)
}

export default Checkout