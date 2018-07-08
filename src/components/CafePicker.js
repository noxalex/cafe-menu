import React from 'react';
import PropTypes from 'prop-types';

class CafePicker extends React.Component {
    cafe = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToCafe = (e) => {
        e.preventDefault();
        this.props.history.push(`/cafe/${this.cafe.value.value}`);
    }

    render() {
        return ( 
            <form className="cafe-selector" onSubmit={this.goToCafe}>
                <h1> Выберите меню </h1>   
                <div>             
                    <select name="cafe" ref={this.cafe}>
                        <option value="cafe-dock">cаfé у причала</option>
                        <option value="cafe-galaxy">café на краю галактики</option>
                    </select>
                </div>
                <button type="submit">Открыть меню</button>
            </form>        
        )
    }
}

export default CafePicker;