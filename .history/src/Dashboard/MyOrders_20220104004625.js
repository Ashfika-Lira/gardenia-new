import React from 'react';
import { Button } from 'react-bootstrap';

const MyOrders = () => {


    return (
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
    );
};

export default MyOrders;