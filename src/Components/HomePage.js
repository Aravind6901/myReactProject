import React, { Component } from "react";
import PropTypes from 'prop-types';

class HomePage extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <h1>In HomePage {this.props.data.name}</h1>
                <ul>
                    {this.props.data.days.map((W, i) => <li key={i}>{W}</li>)}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

HomePage.PropTypes = {
    data: PropTypes.object,
    children :PropTypes.element.isRequired
};

export default HomePage;