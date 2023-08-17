import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { PizzaItem } from './Pizza Item/PizzaItem';

function PizzaList() {
    
    return(<>
    {/* Header */}
    <p>Step 1: Select Your Pizza</p>
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