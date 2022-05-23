import React, { PureComponent } from "react";
import { removeGood } from "../redux/actions/actions";
import "../styles.css";
import { connect } from "react-redux";

class CartItem extends PureComponent {
  render() {
    const { title, price, id, removeGood } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => removeGood(id)}>X</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeGood: (id) => {
      dispatch(removeGood(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
