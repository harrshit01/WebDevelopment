import React from 'react';
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const {cartItems, subtotal,tax,shipping,total} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

const increment=(id)=>{
  dispatch({
    type:"increment",
    payload: id
  });
  dispatch({type:"calculatePrice"});

}
const decrement=(id)=>{
  dispatch({
    type:"decrement",
    payload:id
  });
  dispatch({type:"calculatePrice"});

}
const deleteHandler=(id)=>{
  dispatch({
    type:"deletehandler",
    payload: id,
  });
  dispatch({type:"calculatePrice"});
  

}
  return (
    <div className="cart">
        <main>
          {
            cartItems.length > 0 ? (
              cartItems.map((i)=>(

                <CartItem 
                key={i.id}
                img={i.img}
                name={i.name}
                price={i.price}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
                id={i.id}
                qty={i.quantity}
                /> 
              ))

            ) : (<h2>No Items Here...</h2>)
          }
    
        </main>
        <aside>
            <h2>Subtotal :$ {subtotal}</h2>
            <h2>Shipping :$ {shipping}</h2>
            <h2>Tax :$ {tax}</h2>
            <h2>Total :$ {total}</h2>



        </aside>
    </div>
  )
};

const CartItem=({name,price,img, id,increment, decrement, deleteHandler,qty })=>(
    <div className="cartitem">
          <img src={img} alt="Item" />
    <article>
      <h4>{name}</h4>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>

);

export default Cart