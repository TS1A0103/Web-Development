import {useState} from "react";

export const BatchingCounter = () =>{
    const [count, setCount] =useState(0);
    const [name, setName] =useState("");
    const [isActive, setIsActive] =useState(0);
    console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
                                                                    // count will increase for every next click
    const  handleClick = () =>{
        setCount((prev)=> { 
            //console.log("Count value after setCount(prev)=> prev+1 is : ", prev, "Count is: ", count);     //after first click prev = 0 and count =0
            return prev+1;});                                                                           //2nd click prev =16 and count = 16
            //before click 0 and after click 1 at the moment
        setCount((prev)=> {
            //console.log("Count value after setCount(prev)=> prev+1 is : ", prev ,"Count is: ", count);   //after first click prev = 1  and count =0
            return prev+5;});                                                                         //2nd click prev =17 and count = 16
           //before click 1 and after click 6 at the moment
        setCount((prev)=>{
            //console.log("Count value after setCount(prev)=> prev+1 is : ", prev, "Count is: ", count);   //after first click prev = 10  and count =0
            return prev+10;   });                                                                          ////2nd click prev =22 and count = 16
            //before click 6 and after click 16 at the momemt
        setName("updated");
        console.log("name of the person updated is" , name);

        setIsActive(true);
        console.log("status of the person is:", isActive);

        
    };
           

        //Last value will win over and disaplay on UI now count is 10 for the next click 
    return(
        <div>
        <h2>Count : {count}</h2>
        <p>Name:  {name}</p>
        <p>IsActive : {isActive? "yes Active": "Not Active"} </p>
        <button onClick = {handleClick}>Increment</button>
        </div>
    );
};