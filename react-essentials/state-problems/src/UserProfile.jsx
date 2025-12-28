// import {useState} from "react";
// export const UserProfile = () => {
//     const [user, setUser]= useState({
//         name: "Vamsi",
//         age: 26,
//         email: "vamsi@gmail.com"
//     });
//     console.log("use profile is ", user);
//     const changeName = () => {
//         setUser({...user,
//             name: "Vamsi Krishna"});
//     };
//     const changeAge = () => {
//         setUser({
//             ...user,
//             age: 36
//         });
//     };
//     const changeMultiple = () => {
//         setUser({
//             ...user,
//             name: "Vamsi Krishna",
//             age: 46
//         });
//     };


//     return(
//         <div>
//             <h2>User Profile</h2>
//             <p>name: {user.name}</p>
//             <p>age: {user.age}</p>
//             <p>email: {user.email}</p>
//             <button onClick = {changeName}>Change name to Vamsi Krishna</button>   //changing the single elment state
//             <button onClick = {changeAge}>Change age </button>   //changing the single elment state
//             <button onClick = {changeMultiple}>Change the Multiple elements</button>
//         </div>
//     )
// };

import {useState} from "react";

export const UserProfile = () => {
    const [user, setUser]=useState({
        name: "Vamsi",
        age: 26,
        email: "vamsi@gmail.com",
        address:{
            city: "Mylavaram",
            Country:"USA",
        },
    });
    function changeMultiple (){
        setUser({
            ...user,
            name: "vamsi Krishna Chittimadha",
            address: {
                ...user.address,
                city: "oklahoma"
            }
        });
    };
    return(
        <div>
            <h2>User Profile</h2>
            <p>name: {user.name}</p>
            <p>age: {user.age}</p>
            <p>email: {user.email}</p>
            <p>address:{user.address.city}</p>
            <button onClick = {changeMultiple}>change the user details</button>
        </div>
    )
}
