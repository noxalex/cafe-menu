import React from 'react';
import PropTypes from 'prop-types';

const Header = ({tagline}) => (
    <header className="top">
        <h1> КАФéХА </h1>
        <h3 className="tagline>">
            <span>{tagline}</span>
        </h3>
    </header>
)

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1> КАФéХА </h1>
//                 <h3 className="tagline>">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

