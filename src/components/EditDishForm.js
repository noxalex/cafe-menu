import React from "react";
import PropTypes from "prop-types";

class EditDishForm extends React.Component {
  static propTypes = {
    dish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string
    }),
    deleteDish: PropTypes.func,
    updateDish: PropTypes.func,
    index: PropTypes.string
  };

  handleChange = e => {
    const currentDish = {
      ...this.props.dish
    };
    currentDish[e.currentTarget.name] = e.currentTarget.value;
    this.props.updateDish(this.props.index, currentDish);
  };

  render() {
    return (
      <div className="dish-edit">
        <input
          name="name"
          type="text"
          placeholder="название"
          onChange={this.handleChange}
          value={this.props.dish.name}
        />
        <input
          name="price"
          type="text"
          placeholder="цена"
          onChange={this.handleChange}
          value={this.props.dish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.dish.status}
        >
          <option value="available">Свежачок!</option>
          <option value="unavailable">Продано!</option>
        </select>
        <textarea
          name="desc"
          placeholder="описание"
          onChange={this.handleChange}
          value={this.props.dish.desc}
        />
        <input
          name="image"
          type="text"
          placeholder="картинка"
          onChange={this.handleChange}
          value={this.props.dish.image}
        />
        <button
          onClick={() => {
            this.props.deleteDish(this.props.index);
          }}
        >
          {" "}
          УДАЛИТЬ БЛЮДО{" "}
        </button>
      </div>
    );
  }
}

export default EditDishForm;
