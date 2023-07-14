import {createReducer } from "@reduxjs/toolkit";
 

const userReducer = createReducer({
    userData:null,
    photo: "",
    name:"",
    uid:""
    
},
{
  
    getuserauth: (state,action)=>{
        const data = action.payload;
        state.userData= data[0];
        state.photo = data[1];
        state.name= data[2];
        state.uid = data[3];
        
         // ...
    }, 
    signout:(state,action)=>{
        state.userData =null;
        state.photo= "";
        state.name="";
       }
}


);
export default userReducer;