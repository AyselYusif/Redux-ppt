import React, { PureComponent } from "react";
import "../styles.css";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends PureComponent {
  getTotal() {
    const { cartGoods } = this.props;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    const { cartGoods } = this.props;
    return (
      <div className="cart">
        <h2 className="cart__title">Shopping Cart</h2>
        {cartGoods.length ? (
          <ul className="cart__list">
            {cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__note">Nothing in the cart now</p>
        )}

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartGoods: state.cartGoods,
});

export default connect(mapStateToProps)(Cart);
