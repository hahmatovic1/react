import React from "react";
import ReactDOM from "react-dom";

const name = "Hadija";
const luckyNumber = 3;

ReactDOM.render(
    <div>
        <h1>Hello {name}!</h1>
        <p>your lucky number is {luckyNumber}</p>      
    </div>,
    document.getElementById("root")
);