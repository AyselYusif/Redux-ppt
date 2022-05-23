import React, { PureComponent } from "react";
import "../styles.css";
import { connect } from "react-redux";
import GoodsItem from "./GoodsItem";

class Goods extends PureComponent {
  render() {
    const { goods } = this.props;
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {goods.map((item) => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { goods: state.goods };
};
export default connect(mapStateToProps)(Goods);
