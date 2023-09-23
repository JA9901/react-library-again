import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";
import BookInCart from "../components/ui/BookInCart.jsx";

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += item.quantity * (item.salePrice || item.originalPrice);
    });
    return price.toFixed(2);
  };

  return (
    <div id="books__body">
      <div className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <BookInCart
                    book={book}
                    changeQuantity={changeQuantity}
                    removeFromCart={removeFromCart}
                    key = {book.id}
                  />
                ))}
              </div>

              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>Your cart is empty</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}

              {cart.length > 0 && (
                <div className="total">
                  <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>${total()}</span>
                  </div>
                  <div className="total__item total__tax">
                    <span>Service charge</span>
                    <span>${(total() * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="total__item total__tax">
                    <span>GST</span>
                    <span>${(total() * 1.1 * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="total__item total__price">
                    <span>Total</span>
                    <span>${(total() * 1.1 * 1.08).toFixed(2)}</span>
                  </div>
                  <button className="btn btn__checkout no-cursor">
                    Proceed to checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;