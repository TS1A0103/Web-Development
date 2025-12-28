//This is the example have state count to be updated at the moment instead of updating it at the end of eventhandle function
// import {useState} from "react";

// export const PreviousStateCounter = () =>{
//     const [count, setCount] =useState(0)
//     console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
//                                                                     // count will increase for every next click
//     const  handleClick = () =>{
//         setCount(count +1 ) 
//             console.log("Count value after setCount(count+1) is : ", count);
        
//             //before click 0 and after click count stores previous value everytime
//         setCount(count+5)
//             console.log("Count value after setCount(count+5) is : ",count);
//            //before click 1 and after click count stores previous value everytime
//         setCount(count + 10)
//             console.log("Count value after setCount(count+10) is : ",count);
//             //before click 6 and after click count stores the previous value everytime
//             //Last value will win over and disaplay on UI now count is 10 for the next click 
//     };
//     return(
//         <>
//         <h2>Count : {count}</h2>
//         <button onClick = {handleClick}>Increment</button>
//         </>
//     );
// };


//This is the example have state count to be updated at the moment instead of updating it at the end of eventhandle function
// import {useState} from "react";

import {useState} from "react";

export const PreviousStateCounter = () =>{
    const [count, setCount] =useState(0);
    console.log("component Rendered for "+ count +" times");       //this will get started Befoe initial click and 
                                                                    // count will increase for every next click
    const  handleClick = () =>{
        setCount((prev)=> { 
            console.log("Count value after setCount(prev)=> prev+1 is : ", prev, "Count is: ", count);     //after first click prev = 0 and count =0
            return prev+1;});                                                                           //2nd click prev =16 and count = 16
            //before click 0 and after click 1 at the moment
        setCount((prev)=> {
            console.log("Count value after setCount(prev)=> prev+1 is : ", prev ,"Count is: ", count);   //after first click prev = 1  and count =0
            return prev+5;});                                                                         //2nd click prev =17 and count = 16
           //before click 1 and after click 6 at the moment
        setCount((prev)=>{
            console.log("Count value after setCount(prev)=> prev+1 is : ", prev, "Count is: ", count);   //after first click prev = 10  and count =0
            return prev+10;                                                                             ////2nd click prev =22 and count = 16
            //before click 6 and after click 16 at the momemt
        } );
    };
           

        //Last value will win over and disaplay on UI now count is 10 for the next click 
    return(
        <>
        <h2>Count : {count}</h2>
        <button onClick = {handleClick}>Increment</button>
        </>
    );
};