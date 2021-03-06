import React, { Component } from "react";
import PropTypes from 'prop-types';

class HomePage extends Component {
    constructor(props) {
        super();
        this.state = {
            age:props.data.OrgAge,
            numb:props.data.Num,
            homeLink : "Changed Link"
        };
    }

    makemeold() {
        this.setState({
            age : this.state.age + 2
        });
    }

    onChangeLink(){
        console.log(this.state.homeLink);
        this.props.changeLink(this.state.homeLink);
    }
    render() {
        return (
            <div>
                <h1>In HomePage {this.props.data.name}</h1>
                <h2>Aravind Age is {this.state.age}</h2>
                <hr />
                <button onClick={() => this.makemeold()}> Click Me To Get Old</button>
                <ul>
                    {this.props.data.days.map((W, i) => <li key={i}>{W}</li>)}
                </ul>
                <button onClick={this.onChangeLink.bind(this)}>Click Me To Chane Btn Name</button>
                {this.props.children}
            </div>
        );
    }
}

HomePage.PropTypes = {
    data: PropTypes.object,
    children: PropTypes.element.isRequired,
    changeLink:PropTypes.func
};

export default HomePage;