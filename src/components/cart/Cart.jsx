import React from 'react';
import '../cart/Cart.css'

const Cart = (propsbek) => {
    const{title,price,btn}=propsbek
    return (
        <div className='Card'>
   
        <div className="block_title">
            <h1 className="title">{title}</h1>
       <p className="price">{price}$</p>
       <button className="btn">{btn}Buy Now!</button>
        </div>
    </div>
    );
}

export default Cart;
