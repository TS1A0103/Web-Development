//This is an example for CSS accessing TO ONE MODULE ONLY

import styles from "./Alert.module.css"
export const Alert = ({children, type = "success"}) =>{
    return(
        <div className = {`${styles.alert} ${styles[type]}`}> {children} </div>
    );
};



//This is an example for the Global CSS accessing

// import "./Alert.css"
// export const Alert = ({children, type = "success"}) =>{
//     return(
//         <div className = {`alert ${type}`}> {children} </div>
//     );
// };





//THIS IS THE INLINE CSS EXAMPLE

// export const Alert = ({children, type = "success"}) =>{
//     return(
//         <div style = {{backgroundColor: type =="success" ? "  #10b981" : "Red",
//             color: "black",
//             padding: "16px",
//             borderRadius: "8px",
//             margin: "16px",
//         }}> 
//             {children}
//         </div>
//     );
// };