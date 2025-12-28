import { ActionButton } from "./ActionButton"

export const Contact = () => {
    const handleMessage = () =>{
        alert(`sendining your message`);
    };
    return (
        <div>
            <h2>contact Us</h2>
            <ActionButton text = "send a message"  onClick = {handleMessage}/>
        </div>
    );
};



//tHIS IS THE PARENT COMPONENT EXAMPLE FOR hOW WE CREATE THE BUTTON AND USE IT FOR MULTIPURPOSE BUT NOT RESPONSIVE

// import { ActionButton } from "./ActionButton"

// export const Contact = () => {
//     return (
//         <div>
//             <h2>contact Us</h2>
//             <ActionButton text = "send a message" />
//         </div>
//     );
// };