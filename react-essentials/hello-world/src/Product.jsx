export const Product = ({title, price, inStock, categeories}) =>{
    return(
        <>
        <h3>{title}</h3>
        <p> Price is {price}</p>
        <p>Instock: {inStock ? "Yes" : "No"}</p>
        <p>categeories: {categeories.join(",")}</p>
        </>
    );
};