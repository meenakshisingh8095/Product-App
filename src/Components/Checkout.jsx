import React from 'react';


export default function Checkout(props) {
  const cartItems=props.cartItems;
  console.log(cartItems);
  return (
    <div className="check-container">
    {/* <h2>Qty 0</h2>
    <h2>Total 0   <button className="checkout-button" >Checkout</button></h2> */}
    {
      cartItems.map(item=>(
        <div>
          <h2>Qty {item.Quantity}</h2>
          <h2>Total {item.price} <button className="checkout-button" >Checkout</button></h2>
        </div>
      ))
    }
    </div>
  )
}
