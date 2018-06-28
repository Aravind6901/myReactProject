import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage";
import TextCont from "./Components/TextCont";

class Mind extends Component {
    render() {
        var myOb = {
            days: ["today", "tomo", "repu"],
            name: "Aravind"
        };
        return (
            <div>
                <h1>hey yo</h1>
                <HomePage data={myOb}>
                    <div>
                        <h1>one ding</h1>
                        <h1>two ding</h1>
                    </div>
                </HomePage>
                <TextCont />
            </div>
        );
    }
}

ReactDOM.render(<Mind />, document.getElementById("root"));