import {useState} from "react";

export const LoginCard = () =>{
    const [isLogin, setIsLogin] = useState (false);
    const [message, setMessage]=useState ("");
    const handleLogin = () =>{
        setIsLogin(!isLogin);
    };
    const handleChange = (event) =>
        setMessage(event.target.value)
    return(
        <>
        <button onClick={handleLogin}>{isLogin ? "Login": "Logout"}</button>
        <div>
            <input type = "text" placeholder = "enter your message" value = {message} onChange = {handleChange} />
            <p>{message}</p>
        </div>
        </>
    );

};