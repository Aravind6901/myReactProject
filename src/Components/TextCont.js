import React from "react";


const TextCont = (props) => {
    const a = 2;
    console.log('props got to textcon'+props);
    return (
        <div>
            <h1>This Change Should Come From Homepage </h1>
            <p>I am From TextCont Component</p>
        </div>
    );
}

export default TextCont;