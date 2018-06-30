import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Components/HomePage";
import TextCont from "./Components/TextCont";

class Mind extends Component {
    render() {
        var myOb = {
            days: ["today", "tomo", "dayAfter"],
            name: "Aravind",
            OrgAge: 26,
            Num :1
        };
        return (
            <div>
                <h1>hey yo</h1>
                <HomePage data={myOb}>
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