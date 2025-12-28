import React from "react";
//This is with jsx clean and Readable
export const Card = () =>{
    return(
        <div id = "card">
            <h2> Hello Welcome</h2>
            <p> This is a <span id = "highlight">paragraph</span>with text</p>
        </div>

    );
};

//This withoutJSX
export const CardWithoutJSX = () =>{
    return React.createElement("div", {id : "card"},
        React.createElement("h2", null, "Hello Welcome"),
        React.createElement("p", null,  "This is a", React.createElement("span", {id : "highlight"}, "paragraph"),), "with text"), 
        React.createElement("button", null, "Click Me"
    );
};