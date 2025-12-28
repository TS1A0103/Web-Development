export const CustomButton = ({text}) =>{
    const name = "codevolution";
    const handleClick = () =>{
        console.log(`hey ${name} you clicked ${text}`); 
    }
    return(
        <div>
            <button onClick = {handleClick}>{text}</button>
        </div>
    );
};


//THIS IS THE EXAMPLE OF onClick element

// export const CustomButton = () =>{
//     const handleClick = () =>{
//         alert("I will take care of the event"); 
//     }
//     return(
//         <div>
//             <button onClick = {handleClick}>click me</button>
//         </div>
//     );
// };