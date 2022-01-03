import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faPlus, faMinus, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../features/CartItem/cartSlice";
import { Link } from "react-router-dom";
import './Cart.css';
import { Button } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
      <>
    <Header />
    <Navigation />      
    <div className="container">
      <div className="row">
        <h2 className="text-center">Shopping Cart</h2>
          <div className="col-md-12 cart-container">
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                    <Link to="/Shop">
                    <FontAwesomeIcon style={{ fontSize: '2rem', color: '#eb0f5d' }} icon={faLongArrowAltLeft} />
                    <span>Start Shopping</span>
                    </Link>
                </div>
                </div>
            ) : (
                <div>
                <div className="titles">
                    <h5 className="product-title">Product</h5>
                    <h5 className="price">Price</h5>
                    <h5 className="quantity">Quantity</h5>
                    <h5 className="total">Total</h5>
                </div>
                <div className="cart-items">
                {cart.cartItems &&
                    cart.cartItems.map((cartItem) => (
                        <div className="cart-item" key={cartItem.id}>
                        <div className="cart-product">
                            <img src={cartItem.img} alt={cartItem.name} />
                            <div>
                            <h3>{cartItem.name}</h3>
                            <p>{cartItem.desc}</p>
                            <Button className="cart-btn" onClick={() => handleRemoveFromCart(cartItem)}>
                                Remove
                            </Button>
                            </div>
                        </div>
                        <h5 className="cart-product-price">${cartItem.price.toFixed(2)}</h5>
                            <div className="cart-product-quantity">
                            <Button className="cart-btn" onClick={() => handleDecreaseCart(cartItem)}><FontAwesomeIcon icon={faMinus} /></Button>
                            <h4 className="count">{cartItem.cartQuantity}</h4>
                            <Button className="cart-btn" onClick={() => handleAddToCart(cartItem)}><FontAwesomeIcon icon={faPlus} /></Button>    
                        </div>
                        <h5 className="cart-product-total-price">
                            ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                        </h5>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <Button className="cart-btn" onClick={() => handleClearCart()}>
                    Clear Cart
                    </Button>
                    <div className="cart-checkout">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <h4 className="amount">${cart.cartTotalAmount.toFixed(2)}</h4>
                    </div>
                    <Button className="cart-btn">Check out</Button>
                    <div className="continue-shopping">
                    <Link to="/Shop">
                      <FontAwesomeIcon style={{ fontSize: '2rem', color: '#eb0f5d' }} icon={faLongArrowAltLeft} />  <span>Continue Shopping</span>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      )}  
      </div>        
      </div>
          </div>
        
      </>
  );
};

export default Cart;