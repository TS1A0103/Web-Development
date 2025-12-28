import React from "react";
export const Hello = () =>{
    return (
        <div id = "container"><h1> Hello Vamsi</h1></div>);
    
};

export const HelloWithoutJSX = () =>{
    return React.createElement("div", {id: "contaner"}, React.createElement("h1", null, "Hello Vamsi")
        
    );
};