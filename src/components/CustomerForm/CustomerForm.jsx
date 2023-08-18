import {HashRouter as Router, Route, Link} from 'react-router-dom';

function CustomerForm() {




    return (
      <form>
        <h1>Step 2: Customer Information</h1>
        <input id="Name"
               type="text" 
               placeholder="Name">
        </input>
          <div>
            <input id="Address"
                   type="text"
                   placeholder="Street Address">
            </input>
         </div>
        <div>
             <input id="City" 
                    type="text" 
                    placeholder="City">
            </input>
        </div>
        <div>
             <input id="Zip" 
                    type="text" 
                    placeholder="Zip">
            </input>
        </div>
    <div>

  <input type="radio" 
         id="Pickup" 
         name="Preferance" 
         value="Pickup"></input>
  <label for="Pickup">Pickup</label>
  </div>
  <div>
  <input type="radio" 
         id="Delivery" 
         name="Preferance" 
         value="Delivery"></input>
  <label for="Delivery">Delivery</label>
  
  </div>
       <Link to="/checkout">
            <button>Next</button>
       </Link>
      </form>

      
    );

}

export default CustomerForm