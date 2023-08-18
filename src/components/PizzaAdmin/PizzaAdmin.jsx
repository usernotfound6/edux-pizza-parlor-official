import axios from "axios"

import { useState, useEffect } from "react"

import PizzaAdminItem from "./PizzaAdminItem"

function PizzaAdmin() {
    // console.log('in pizza admin')

    let [orders, setOrders] = useState([])

    let getOrders = () => {
        let orderResponse = []

        axios.get('/api/order')
        .then((response) => {
            // console.log('client GET response in PizzaAdmin:', response.data)
            orderResponse = response.data
            // console.log('orders in axios request', orderResponse)
            setOrders(orderResponse)
        })
        .catch((error) => {
            console.log('error on client GET:', error)
        }) 
    }

    useEffect( () => {
        getOrders()
    }, [])
    
    // console.log('orders are', orders)

    // {orders.map( order => {
    //     console.log(order)
    // })}

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

            <tbody>
                {orders.map( order => (
                    <PizzaAdminItem key={order.id} order={order} />
                ))}
            </tbody>
        </table>
    </>)
}

export default PizzaAdmin