import {createReducer} from "@reduxjs/toolkit";

export const cartreducer = createReducer({
    cartItems:[],
    subtotal:0,
    shipping:0,
    tax:0,
    total:0,
},{
    addtocart:(state,action)=>{
        const item = action.payload;
        const isItemexist = state.cartItems.find((i)=>i.id===item.id);
        if(isItemexist){
            state.cartItems.forEach((i)=>{

                if(i.id===item.id) i.quantity+=1;
        })
            
        }else{
            state.cartItems.push(item);
        }

    },

    increment :(state,action)=>{
        state.cartItems.find((i)=>{
            if(i.id===action.payload) i.quantity +=1;
        })

    },
    decrement :(state,action)=>{
        const item=state.cartItems.find((i)=>(i.id===action.payload));
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===action.payload) i.quantity -=1;
            })
            }
        },
    deletehandler:(state,action)=>{
            state.cartItems = state.cartItems.filter((i)=>i.id!== action.payload)

    },
    calculatePrice:(state)=>{
        let sum = 0;
        state.cartItems.forEach((i)=>sum += i.price * i.quantity )
        state.subtotal= sum;
        state.shipping= state.subtotal > 1000 ? 0 : 50;
        state.tax= +(state.subtotal*0.18).toFixed();
        state.total = state.subtotal + state.shipping + state.tax; 
    }
        
});