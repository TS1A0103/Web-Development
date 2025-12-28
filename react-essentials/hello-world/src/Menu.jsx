import { MenuItem } from "./MenuItem";

export const Menu = () =>{
    const handleOrder = ({itemName, itemPrice}) =>{
        alert(`you ordered ${itemName} for ${itemPrice}`);
    };
        
    
    return(
        <div>
            <h2>Order Menu</h2>
            <MenuItem name = "pizzaa" price = {12} onOrder= {handleOrder} />
            <MenuItem name = "Burger" price = {8} onOrder= {handleOrder} />
            <MenuItem name = "Salad" price = {6} onOrder= {handleOrder} />
        </div>
    );
};