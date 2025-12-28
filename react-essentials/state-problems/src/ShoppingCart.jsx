import {useState} from "react";

export const ShoppingCart = () =>{
    const [cartItems, setCartItems] =useState({
        reactCourse: 0, vueCourse: 0
    });
    const prices ={
        reactCourse :49.99,
        vueCourse:39.99
    };
    const handleReactCourse = () =>{
        setCartItems({...cartItems, reactCourse:cartItems.reactCourse+1,})
    }
    const handleVueCourse = () =>{
        setCartItems({...cartItems, vueCourse: cartItems.vueCourse+1, });
    };
    return(
        <div>
            <h2>Shopping cartComponent</h2>
            <ProductCart name= "React Course" price= {49.99} quantity = {cartItems.reactCourse} onAddToCart = {handleReactCourse}/>
            <ProductCart name= "vue Course" price= {39.99} quantity = {cartItems.vueCourse} onAddToCart= {handleVueCourse}/>
            <CartSummary cartItems = {cartItems} prices = {prices}/>
        </div>
    );


};

export const ProductCart = ({name, price, quantity, onAddToCart}) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Quantity : {quantity}</p>
            <button onClick = {onAddToCart}>Add to Cart</button>
        </div>
    );
};
export const CartSummary = ({cartItems, prices}) => {
    const totalItems = cartItems.reactCourse+cartItems.vueCourse;
    const totalPrice= cartItems.reactCourse*prices.reactCourse+cartItems.vueCourse*prices.vueCourse;
    return(
        <div> 
            <h3>Cart Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
}