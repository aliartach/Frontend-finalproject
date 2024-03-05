import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);

  });
  
  return (
    <div className='cartcomponent'>
      <h2>Cart</h2>
      <table className='tablecart'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.product_id}>
              <td><img crossorigin='anonymous' className='imgcart' src={`https://backend-finalproject-fb9a.onrender.com/${item.image}`} alt={item.name} /></td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
          
        </tbody>
        
      </table>
      <div className='emptycartdiv'>
          <button className='checkoutbutton'>Checkout</button>
          </div>
    </div>
  );
}


export default Cart;
