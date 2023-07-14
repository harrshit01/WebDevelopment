import {createReducer } from "@reduxjs/toolkit";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import db from "../firebase";
import { addDoc, collection} from "firebase/firestore";

const articleReducer = createReducer({
    loading:"",
    postData:""


},{

postApi:(state,action)=>{
   const data = action.payload;
//    state.loading = data.loading;
   
    if(data.image!==""){

        const storageref = ref(storage,`images/${data.image.name}`);
        const upload= uploadBytesResumable(storageref,data.image);
        upload.on("state_changed",(snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is : ${progress}% done`);
            if(snapshot.state==="running"){
                console.log(`Progress : ${progress}%`);
            }
            console.log(data.user.displayName);
        },(error)=>{
            console.log(error.code);
        } 
        ,
        async()=>{
            const downloadURL = await getDownloadURL(upload.snapshot.ref);
            console.log('File available at', downloadURL);
            await addDoc(collection(db,"articles"),
            {
                article:{
                    description: data.user.displayName,
                    title: data.user.email,
                    date:data.timestamp,
                    image: data.user.photoURL
                },
                video:data.video,
                sharedImg: downloadURL,
                description:data.description,
                comments: 0,
                id : data.id
                
             })
        } 
    
        );
       
    }
    else if(data.video!==""){
        addDoc(collection(db,"articles"),
            {
                article:{
                    description: data.user.displayName,
                    title: data.user.email,
                    date:data.timestamp,
                    image: data.user.photoURL
                },
                video:data.video,
                sharedImg: "",
                description:data.description,
                comments: 0,
               

             })
           

    }
    


},
getarticlesAPI: (state,action)=>{
    const data = action.payload;
    console.log(data);
    state.postData = [...action.payload]
}
    
})

export default articleReducer;