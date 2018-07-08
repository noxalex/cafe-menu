import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string
        }),
        addToOrder: PropTypes.func        
    };

    render() {
        const {image, name, price, status, desc} = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-dish">
                <img src={image} alt={name} />
                <h3 className="dish-name">
                    {name}
                    <span className="price">{ formatPrice(price) }</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={ () => this.props.addToOrder(this.props.index) }>
                    { isAvailable ? 'Добавить в заказ' : 'Продано!' } 
                </button>
            </li>
        )
    }
}

export default Dish;