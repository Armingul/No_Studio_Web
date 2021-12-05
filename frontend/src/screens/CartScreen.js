import React from "react";

export default function CartScreen(props){
    const productId = props.match.params.id;
    /*
    const addToCartHandler = () =>{
    props.history.push(`/cart/${productId}?qty={qty}`);
    } 

    Accedemos al valor de qty
    */
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;
    return(
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    )
}