export const Greeting = ({name = "Guest", message ="Welcome" }) =>{
    return(
        <h2> {message}! {name}</h2>
    );
};