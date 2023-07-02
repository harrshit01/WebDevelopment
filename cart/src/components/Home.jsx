import React from 'react';
import toast from "react-hot-toast"; 
import { useDispatch } from 'react-redux';


const Home = () => {
  
const dispatch =  useDispatch();

const img1 =
"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
"https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const productList=[{
        name:"MacBook Air",
        id:"bvnmfvniub ",
        imgSrc: img1,
        price: 1200
    },
    {
        name:"Black Shoe",
        id:"bvnmfvub ",
        imgSrc: img2,
        price: 200

    }
    ];
    const addtocartHandler=(options)=>{
        console.log(options);
        toast.success("Added to cart");
        dispatch({
            type:"addtocart",
            payload:options
        });
  dispatch({type:"calculatePrice"});

        
    }
  return (
    <div className="home">
        {
            productList.map((i)=>(
                <Card key={i.id}
                img={i.imgSrc}
                name={i.name}
                price={i.price}
                handler={addtocartHandler}
                id={i.id}
                />
            ))
        }
        

    </div>
  )
};
const Card =({id,name,price,img, handler})=>{
   
    return(

    
    <div className="card">
        <img src={img} alt={name} />
        <h4>${price}</h4>
        <p>{name}</p>
        <button onClick={()=>handler({name,id,price,img , quantity:1})}>Add to cart</button>
    </div>
    )
}

export default Home