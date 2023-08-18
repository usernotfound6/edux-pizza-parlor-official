function Header() {

    return(<>
        <header className='App-header'>
            
            <h1 className='App-title'>Prime Pizza</h1>

            {/* Would be nice to add a little shopping cart icon here */}
            <p>Total: 
                {/* This total will be updated with a variable at some point */}
                <span className="total"> $32.00</span>
            </p>
        </header>

    </>)
}

export default Header