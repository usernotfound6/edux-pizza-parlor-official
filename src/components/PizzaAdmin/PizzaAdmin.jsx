function PizzaAdmin() {

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>

            {/* Table rows will be written in a component called PizzaAdminItem.jsx or something. We can use .map to get an item component for each previous order. -noel */}
            {/* Data for order history will likely come from Database -noel */}
            <tr>
                <td>Example name</td>
                <td>Example time</td>
                <td>Example type</td>
                <td>Example cost</td>
            </tr>

            <tr>
                <td>Example name</td>
                <td>Example time</td>
                <td>Example type</td>
                <td>Example cost</td>
            </tr>

            <tr>
                <td>Example name</td>
                <td>Example time</td>
                <td>Example type</td>
                <td>Example cost</td>
            </tr>
           
        </table>
    </>)
}

export default PizzaAdmin