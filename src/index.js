import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage";
import TextCont from "./Components/TextCont";

class Mind extends Component {
    constructor() {
        super();
        this.state = {
            title: "Parent Default"
        };
    }

    changeMyBtnName(newName) {
        this.setState({
            title: newName
        });
    }
    render() {
        const changed = "Changed Name";
        var myOb = {
            days: ["today", "tomo", "dayAfter"],
            name: "Aravind",
            OrgAge: 26,
            Num: 1
        };
        return (
            <div>
                <h1>hey yo</h1>
                <button >{this.state.title}</button>
                <HomePage
                    data={myOb}
                    changeLink={this.changeMyBtnName.bind(this)}>
                    <div>
                        <h1>one ding</h1>
                    </div>
                </HomePage>
                <TextCont />
            </div>
        );
    }
}

ReactDOM.render(<Mind />, document.getElementById("root"));