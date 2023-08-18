function PizzaAdminItem({order}) {

    // console.log('in Pizza Item', order)

    return (<>
        <tr>
            <td>{order.customer_name}</td>
            <td>{order.time}</td>
            <td>{order.type}</td>
            <td>{order.total}</td>
        </tr>
    </>)
}

export default PizzaAdminItem