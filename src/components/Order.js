import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    dishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };

  renderOrder = key => {
    const dishes = this.props.dishes;
    const order = this.props.order;

    if (!dishes[key]) return null;

    const isAvailable = dishes[key] && dishes[key].status === "available";
    if (isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={order[key]}
                  timeout={{ enter: 300, exit: 300 }}
                >
                  <span>{order[key]}</span>
                </CSSTransition>
              </TransitionGroup>
              шт. {dishes[key].name} &nbsp; &nbsp; &nbsp;
              {formatPrice(order[key] * dishes[key].price)}
              <button
                onClick={() => {
                  this.props.removeFromOrder(key);
                }}
              >
                x
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          Эх, {dishes[key] ? dishes[key].name : "Блюдо"} - разобрали!
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((currentPrice, key) => {
      const dishes = this.props.dishes;
      const order = this.props.order;

      if (!dishes[key]) return null;

      const isAvailable = dishes && dishes[key].status === "available";
      if (isAvailable) {
        return (currentPrice = currentPrice + dishes[key].price * order[key]);
      }
      return currentPrice;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Заказ</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(key => this.renderOrder(key))}
        </TransitionGroup>
        <div className="total">
          К оплате: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
