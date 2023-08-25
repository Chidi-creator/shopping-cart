import Navbar from "./components/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faPlus,
  faMinus,
  faXmark,
  faBars,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import Contents from "./components/contents";

import "./App.css";
import "./components/media.css"
library.add(faShoppingCart, faPlus, faMinus, faXmark, faBars, faAngleUp);
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "./components/modal";
import { useState, useEffect } from "react";
import Cart from "./components/cart";
import Added from "./components/added";
import Electronics from "./components/electronics";
import Jewlery from "./components/jewelery";
import Men from "./components/men";
import Women from "./components/women";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartNum, setCartNum] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [productIndex, setProductIndex] = useState(null);
  const [showProduct, setShowProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showAdded, setShowAdded] = useState(false);
  const openAdded = () => {
    setShowAdded(true);
  };
  useEffect(() => {
    if (showAdded) {
      const timer = setTimeout(() => {
        setShowAdded(false);
      }, 420);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAdded]);
  useEffect(() =>{
    setCartNum(cartItems.length)
  }, [cartItems])

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("body-hidden");
    } else {
      document.body.classList.remove("body-hidden");
    }
  }, [showCart]);

  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const openModal = (product, index) => {
    setShowModal(true);
    setShowProduct(product);
    setProductIndex(index);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const addToCart = (product, quantity) => {
    const itemsToAdd = { ...product, Amount: quantity };
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex] = itemsToAdd;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, itemsToAdd]);
    }
  };
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      console.log(cartItems);
    }
  }, [cartItems]);
  return (
    <Router>
      <>
        <div className="app">
          <Navbar openCart={openCart} showCart={showCart}
           cartItems = {cartItems}
           cartNum = {cartNum}
           />
          <Routes>
            <Route exact path="/" element={<Contents />} />
          
            <Route path ="/electronics"  element = {<Electronics openModal = { openModal} />}
            
            />
            <Route path ="/jewelery"  element = {<Jewlery openModal = { openModal}  />}/>
            <Route path ="/men's Clothing"  element = {<Men openModal = { openModal}  />}/>
            <Route path ="/women's Clothing"  element = {<Women openModal = { openModal}  />}/>
          </Routes>

        </div>
        {showModal && (
          <Modal
            closeModal={closeModal}
            productIndex={productIndex}
            product={showProduct}
            addToCart={addToCart}
            openAdded={openAdded}
          />
        )}
        {showCart && (
          <Cart
            cartItems={cartItems}
            closeCart={closeCart}
            handleDelete={handleDelete}
            cartNum = {cartNum}
          />
        )}
        {showAdded && <Added />}
      </>
    </Router>
  );
}

export default App;
