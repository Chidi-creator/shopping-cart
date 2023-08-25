/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import "./media.css";
import { useState } from "react";
import useFetch from "../../useFetch";

const Navbar = ({ openCart, cartItems, cartNum }) => {
  const navigate = useNavigate();

  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const [showHam, setShowHam] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  

  const [isOpen, setIsOpen] = useState(false);

  const openHam = () => {
    setShowHam((prevState) => !prevState);
  };
  const openArrow = () => {
    setShowArrow((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={`naver ${isOpen ? "show-nav" : ""}`}>
        <div
          className={`logo ${isOpen ? "logo-drop" : ""}`}
          onClick={() => {
            navigate("/");
          }}
        >
          Chidi Online Store
        </div>

        <div
          id="right"
          className={`right-side ${isOpen ? "show-options" : ""}`}
        >
          <div className={`menu-nav ${isOpen ? "show-options" : ""}`}>
            {categories && categories.map((category, index) => {
              return (
                <span className="nav-options" key={index}
                onClick={() =>{
                  navigate(`/${category}`)
                }}
                >
                  {category}
                </span>
              );
            })}
        
            <div className="c-container" onClick={openCart}>
              <FontAwesomeIcon
                className="c-cart"
                icon="fa-solid fa-cart-shopping"
              />
            {  cartItems.length > 0 &&    <span className="cart-num">{cartNum}</span>}
            </div>
          </div>
        </div>
        <div
          className="ham-menu"
          onClick={() => {
            toggleMenu();
            openHam();
            openArrow();
          }}
        >
          {showHam && (
            <FontAwesomeIcon className="bars" icon="fa-solid fa-bars" />
          )}
          {showArrow && (
            <FontAwesomeIcon className="arrow" icon="fa-solid fa-angle-up" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
