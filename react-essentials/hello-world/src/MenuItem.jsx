export const MenuItem = ({name, price, onOrder}) => {
    return(
        <div>
            <span>{name} - ${price}</span>
            <button onclick = {() => onOrder(name, price)}>Order</button>
        </div>
    );
};