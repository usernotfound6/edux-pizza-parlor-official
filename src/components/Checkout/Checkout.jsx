import './Checkout.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min'

function Checkout() {
    // GET request here for customer info rendering
    // button functionality
        // with post request to send user info AND cart/cartTotal to database
        // should clear reducers
        // should send user back to order (pizzaList) page
        
    return(<>
        <h2>Step 3: Checkout</h2>

        <table className="checkout-table">
           <thead>
            <tr>
                <th>Name</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
                {/* will need to map over cart here to render pizza order to table */}
            <tr>
                <td>example 1: Pepperoni</td>
                <td>12.99</td>
            </tr>
            <tr>
                <td>example 2: Deluxe</td>
                <td>13.99</td>
            </tr>
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