import { ActionButton } from "./ActionButton"

export const NewsLetter = () =>{
    const handleSubscribe = () =>{
        console.log("Thank you for subscribing");
    };
    return(
        <div>
            <h2>Find the news here</h2>
            <ActionButton text ="subscribe" onClick = {handleSubscribe}/>
        </div>
    );
};