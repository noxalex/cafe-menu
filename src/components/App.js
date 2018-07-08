import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Dish from "./Dish";
import sampleDishes from "../sample-dishes";
import base from "../base";

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  state = {
    dishes: {},
    order: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.cafeId
    );

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${this.props.match.params.cafeId}`, {
      context: this,
      state: "dishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.cafeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addDish = dish => {
    const dishes = { ...this.state.dishes };
    dishes[`dish${Date.now()}`] = dish;
    this.setState({ dishes });
  };

  updateDish = (key, currentDish) => {
    const dishes = { ...this.state.dishes };
    dishes[key] = currentDish;
    this.setState({ dishes });
  };

  deleteDish = key => {
    const dishes = { ...this.state.dishes };
    dishes[key] = null;
    this.setState({ dishes });
  };

  loadSampleDishes = () => {
    this.setState({ dishes: sampleDishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="fold" />
        <label htmlFor="fold">трансформируюсь</label>
        <div className="cafe">
          <div className="menu">
            <Header tagline="Свежачок каждый день" />
            <ul className="list-of-dish">
              {Object.keys(this.state.dishes).map(key => {
                return (
                  <Dish
                    key={key}
                    index={key}
                    details={this.state.dishes[key]}
                    addToOrder={this.addToOrder}
                  />
                );
              })}
            </ul>
          </div>
          <Order
            dishes={this.state.dishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            addDish={this.addDish}
            updateDish={this.updateDish}
            deleteDish={this.deleteDish}
            loadSampleDishes={this.loadSampleDishes}
            dishes={this.state.dishes}
            cafeId={this.props.match.params.cafeId}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
