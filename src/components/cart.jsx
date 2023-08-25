/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ cartItems, closeCart, handleDelete }) => {
  const [totalPrice, setTotalPrice] = useState("0");
  const [totalNumber, setTotalNumber] = useState(0);
  
  useEffect(() => {
    let sum = 0;
    let number = 0;
    cartItems.map((item) => {
      sum += item.price * item.Amount;
      number += item.Amount;
    });
    setTotalNumber(number);
    setTotalPrice(sum);

  }, [cartItems]);

  return (
    <>
      <div className="cart-overlay">
        <div className="cart-nav">
          <span>Your Cart Items</span>
        </div>
        <div className="cart-container">
          { cartItems.length > 0 ? ( cartItems.map((item) => {
            return (
            <>
              <div className="cart-item" key={item.id}>
                {item.title}
                {item.id}
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-price">Price: ${item.price}</div>
                <div className="amount">Amount Purchased: {item.Amount}</div>
                <div className="category">
                Category: {item.category}
            </div>

                <div className="button">
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </>
            ) ;
          })) : <div className="cart-item">Cart is Empty</div>}
          <button onClick={closeCart}>Return</button>
        </div>
        {totalPrice > 0 ? (
          <div className="footer">
            <div className="price-footer">Total Price: ${totalPrice}</div>
            <div className="number">
              Total Number Of Items Purchased: {totalNumber}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
