import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const Modal = ({ closeModal, product, addToCart, openAdded }) => {
  const [quantity, setQuantity] = useState(0);


  const add = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const subtraction = (amount) => {
    const result = quantity - amount;
    setQuantity(Math.max(result, 0));
  };
  

  const HandleAddToCart = () => {
    if (quantity === 0){
        alert("You aren't Adding Anything")
        return
    }
    addToCart(product, quantity)
    setQuantity(0)
    closeModal()
    openAdded()
  };


  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="cover" onClick={closeModal}>
            <FontAwesomeIcon className="close" icon="fa-solid fa-xmark" />
          </span>
          <h3>{product.title}</h3>
          <p className="modal-img">
            <img src={product.image} alt="" />
          </p>
          <div className="price">Price: ${product.price}</div>
          <div className="cart">
            <div className="add" onClick={add}>
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </div>
            <input
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <div
              className="minus"
              onClick={() => {
                subtraction(1);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-minus" />
            </div>
          </div>

          <button
          onClick={HandleAddToCart}
          >Add To Cart</button>
        </div>
      </div>
      
    </>
  );
};

export default Modal;
