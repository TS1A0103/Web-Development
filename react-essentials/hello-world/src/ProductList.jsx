//TO MAKE IT MORE SIMPLE AND READABLE
export const ProductList = () =>{
    const products = [
        {id : 1, name : "Laptop" , price : 699}, 
        {id : 2, name : "Phonep" , price : 499}, 
        {id : 3, name : "tablet" , price : 699}];

    const ProductElements = products.filter((product)=> { return product.price > 500})
    .map((product) =>{
        return(
            <div key ={product.id}>
            <h3>{product.name}</h3>
            <p>price: ${product.price}</p>
            </div>
        );
     })

        return(
            <div>
                <h2>Our Products</h2>
            {ProductElements}
            </div>
        );
  
};

//THIS IS THE EXAMPLE OF DISPLAYING THE LIST OF ITEMS USING ARRAY RENDERING
// export const ProductList = () =>{
//     const products = [
//         {id : 1, name : "Laptop" , price : 699}, 
//         {id : 2, name : "Phonep" , price : 499}, 
//         {id : 1, name : "tablet" , price : 699}];

//         return(
//             <div>
//                 <h2>Our Products</h2>
//             {products.map((product) =>{
//                 return(
//                     <div>
//                     <h3>{product.name}</h3>
//                     <p>price: ${product.price}</p>
//                     </div>
//                 );
//              })}
//             </div>
//         );
  
// };

//THIS IS THE EXAMPLE OF DISPLAYING THE LIST OF ITEMS WITHOUT USING ARRAY RENDERING
// export const ProductList = () =>{
//     return(
//         <div>
//         <h2>Our Products</h2>
//         <div>
//             <h3>Laptop</h3>
//             <p> Proce: $999</p>
//         </div>
//         <div>
//         <h3>Phone</h3>
//         <p> Proce: $699</p>
//         </div>
//         <div>
//         <h3>Tablet</h3>
//         <p> Proce: $899</p>
//         </div>
//         </div>
//     );
// };