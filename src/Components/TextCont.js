import React, { Component } from "react";


class TextCont extends Component {
    render() {
        const a =2;
        if(true){
            <h4>Inside From If Loop</h4>
        }
        return (
            <div>
                <h1>In TextCont {a+a}</h1>
            </div>
        );
    }
}

export default TextCont;