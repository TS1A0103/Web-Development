//This is the example for How state update the work
//    --Below code updates UI and consolelog for every render--

// import {useState} from "react";

// export const SimpleCounter = () =>{
//     const [count, setCount] =useState(0)
//     console.log("component Rendered for "+ count +"number of times")
//     return(
//         <>
//         <h2>Count : {count}</h2>
//         <button onClick = {()=> setCount(count+1)}>Increment</button>
//         </>
//     );
// }



//count will be udated in UI and outside the handleClick function. But handleClick function value will be updated but will show prvious count everytime

// import {useState} from "react";

// export const SimpleCounter = () =>{
//     const [count, setCount] =useState(0)
//     console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
//                                                                     // count will increase for every next click
//     const  handleClick = () =>{
//         console.log("Count befor click", count);    //Count will raise only after click
//         setCount(count+1);
//         console.log("Count after click", count);   //Count will raise only after click but will be showing same in console
//     };
//     return(
//         <>
//         <h2>Count : {count}</h2>
//         <button onClick = {handleClick}>Increment</button>
//         </>
//     );
// }





//Example for multiple state updates using setCount(setter functions) in a row

// import {useState} from "react";

// export const SimpleCounter = () =>{
//     const [count, setCount] =useState(0)
//     console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
//                                                                     // count will increase for every next click
//     const  handleClick = () =>{
//         setCount(count+1);
//         console.log("Count value after setCount(count+1) is : ", count);    //before click 0 and after click 1 for next click(iteration) 10+1
//         setCount(count+5);
//         console.log("Count value after setCount(count+5) is : ", count);   //before click 0 and after click 5 for next click(iteration) 10+5
//         setCount(count+10);
//         console.log("Count value after setCount(count+10) is : ", count);   //before click 0 and after click for next click(iteration) 10+10

//         //Last value will win over and disaplay on UI now count is 10 for the next click 
//     };
//     return(
//         <>
//         <h2>Count : {count}</h2>
//         <button onClick = {handleClick}>Increment</button>
//         </>
//     );
// }




//Example for multiple state updates using setCount(setter functions) in a row with synchronous function

import {useState} from "react";

export const SimpleCounter = () =>{
    const [count, setCount] =useState(0)
    console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
                                                                    // count will increase for every next click
    const  handleClick = () =>{
        setCount(count+1);
        console.log("Count value after setCount(count+1) is : ", count);    //before click 0 and after click 1 for next click(iteration) 10+1
        setCount(count+5);
        console.log("Count value after setCount(count+5) is : ", count);   //before click 0 and after click 5 for next click(iteration) 10+5
        setCount(count+10);
        console.log("Count value after setCount(count+10) is : ", count);   //before click 0 and after click for next click(iteration) 10+10

        //Last value will win over and disaplay on UI now count is 10 for the next click 

        setTimeout(()=>{console.log("After 2 seconds counts is : ", count);}, 2000);
    };
    console.log("Count value outside the event handle after eventhandler execution : ", count);  //This will have updated values along with UI
    return(
        <>
        <h2>Count : {count}</h2>
        <button onClick = {handleClick}>Increment</button>
        </>
    );
}









