import {Userinfo} from "./Userinfo"
export const UserCard = ({name, age, city, email}) =>{
    return(
        <>
        <h2>User details</h2>
        <Userinfo  name ={name} city ={city} age = {age}  email = {email} />
        </>
    )
}

//This can also be written as (in case if you want to use all the props)
export const UserCards = (props) =>{
    return(
        <div>
        <h2>User details</h2>
        <Userinfo  {...props} />
        </div>
    );
};


//This can also be written as (in case if you want to use specific props)
export const UserCardss = ({id,...rest}) =>{
    return(
        <div>
        <h2>User {id} details</h2>
        <Userinfo  {...rest} />
        </div>
    );
};