import React from 'react';
import PropTypes from 'prop-types';

class AddDishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    };

    createDish = e => {
        e.preventDefault();
        
        const dish = {
            name: this.nameRef.value.value,
            price: +this.priceRef.value.value,
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }

        this.props.addDish(dish);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="dish-edit" onSubmit={this.createDish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="название" />
                <input name="price" ref={this.priceRef} type="text" placeholder="цена" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Свежачок!</option>
                    <option value="unavailable">Продано!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="описание" />
                <input name="image" type="text" ref={this.imageRef} placeholder="картинка" />
                <button type="submit">+добавить блюдо</button>
            </form>
        )        
    }
}

export default AddDishForm;