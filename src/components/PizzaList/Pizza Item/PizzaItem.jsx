import { useState } from 'react';
import axios from 'axios';

export function PizzaItem({pizza}) {
    const [addToCart, setAddToCart] = useState(true)

    const toggleButton = () => {
        console.log('purchase/remove doing the thang')
        let pizzaTotal = 0;
        setAddToCart(!addToCart)
        if ( addToCart === true){
            // logic to pull pizza price & add stuff
        }

    }


    return (
        <div className="pizza">
             <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            {/* Purchase/Remove */}
            {addToCart ? <button onClick={toggleButton}>Purchase</button>: <button onClick={toggleButton}>Remove</button>}
        </div>

    )
}