// //THIS IS THE EXAMPLE WITH USING STATE WIRH useState hook and useState lazy initialization
import {useState} from "react";

export const Counter = () =>{
    const[count, setCount]= useState(() => {
        console.log("InITIAL state function called");
        return 0;
    } );     //currentValue, setterFunction = useState(initial value)
    console.log("Button clicked "+ count +" times up to now");
    const handleCount = () =>{
        setCount(count+1)
    };
    return(
        <button onClick ={handleCount}>Count: {count}</button>
    )
}



//THIS IS THE EXAMPLE WITH USING STATE WIRH useState hook
// import {useState} from "react";

// export const Counter = () =>{
//     const[count, setCount]= useState(0)//currentValue, setterFunction = useState(initial value)
//     console.log("Button clicked "+ count +" times up to now");
//     const handleCount = () =>{
//         setCount(count+1)
//     };
//     return(
//         <button onClick ={handleCount}>Count: {count}</button>
//     )
// }



//THIS IS THE EXAMPLE WITHOUT USING STATE

// export const Counter = () =>{
//     let count = 0;
//     console.log("Button clicked "+ count +" times up to now");
//     const handleCount = () =>{
//         count = count+1;
//         console.log(count);
//     }
//     return(
//         <button onClick ={handleCount}>Count: {count}</button>
//     )
// }