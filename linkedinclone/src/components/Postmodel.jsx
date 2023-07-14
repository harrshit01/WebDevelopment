import React, { useState } from 'react';
import {RxCross1} from "react-icons/rx";

import {CiYoutube,CiImageOn} from "react-icons/ci";


import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from "react-player";




const Postmodel = (props) => {
    const {userData} = useSelector((state)=>state.user)
    const { photo} = useSelector((state)=>state.user);
    const {name} = useSelector((state)=>state.user)
    const {uid} = useSelector((state)=>state.user)
    
const dispatch = useDispatch();
  const [shareimage, setshareimage] = useState("");
  const [videoUrl, setvideoUrl] = useState("");
  const [area , setarea]=useState("");
  const [editorText, seteditorText] = useState("");
//   const [loading, setloading]= useState(false);

    const switchsetarea=(area)=>{
        setshareimage("");
        setvideoUrl("");
        setarea(area);

    }
    const postarticle=(e)=>{
        // setloading(true);
    let date = new Date();
    console.log(date);
        e.preventDefault();
        if(e.target!==e.currentTarget){
            return;
        }
        

        dispatch({type:"postApi",
        payload: {
            image:shareimage,
        video:videoUrl,
        user:userData,
        description : editorText,
        timestamp: date,
        // loading: loading,
        id : uid
        
    }})
    
    setTimeout(reset(e),2000);

    
        
    };
    const reset=(e)=>{
        seteditorText("");
        props.handleclick(e);
        setshareimage("");
        setvideoUrl("");
        setarea("");

    }
    const changehandle=(e)=>{
        const image = e.target.files[0];
        if(image==="" || image=== undefined){
            alert(`not an image , the file you selected is a ${typeof(image)}`)
        }
        setshareimage(image);

    }
    // console.log(editorText);
  return (
    <>
    {
        props.showmodel ==="open"
        &&

    
    <Container>
        <Content>
            <CreatePost>
                <h4>Create a Post</h4>
                <RxCross1 onClick={(e)=>reset(e)} />
            </CreatePost>
            <hr/>
            <SharedContent>
                <img src={photo? photo:"/images/user.svg"} alt="" />
                <h4>{name}</h4>

            </SharedContent>
            <Textarea>

            <textarea value={editorText} 
            onChange={(e)=>seteditorText(e.target.value)}
             placeholder='What do you want to tallk about?'
             autoFocus={true}
             ></textarea>
             
            </Textarea>
            
            <UploadImage>
            {
            area==="image" ?
                <>
                <input type="file"
                id="file"
                name='image'
                accept='image/gif , image/jpeg , image/png '
                style={{display:"none"}} 
                onChange={changehandle}
                />
                <button>

                <label htmlFor="file">Selct an image to share</label>
                </button>
                {shareimage && <img src={URL.createObjectURL(shareimage)} alt='userdata' />}
                </>

                :
                area==="video" &&

                <>
                <input type="text"
                placeholder='Please enter or paste a video url'
                onChange={(e)=>setvideoUrl(e.target.value)}
                value={videoUrl}
                />
                {videoUrl && <ReactPlayer width={"100%"} url={videoUrl}/>}
                </>
            }
            </UploadImage>
            <SharedActions>
                <div>
                    <button onClick={()=>switchsetarea("image")}><CiImageOn/></button>
                    <button onClick={()=>switchsetarea("video")}><CiYoutube/></button>
                </div>
                <div>
                    <button><span>Anyone</span></button>
                    <PostButton disabled={!editorText?true:false} 
                    onClick={(e)=>postarticle(e)}> Post
                    </PostButton>
                </div>

            </SharedActions>
        </Content>
    </Container>
    }
    </>
  )
}
const Container = styled.div`
z-index: 100;

   position:absolute;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background-color: rgba(0,0,0,0.8);
   animation: fadein 0.5s;
   
`;
const Content = styled.div`
max-height:90%;
overflow-y: scroll;
&::-webkit-scrollbar{
    display: none;
}
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

border-radius: 5px;
   max-width:550px;
   margin: 50px auto;
   
   background-color: #fff;
`;
const CreatePost = styled.div`
height:50px;
display: flex;
width:90%;
margin:0 auto;
align-items: center;
justify-content: space-between;
h4{
    color:rgba(0,0,0,0.7)
}
svg{
    border: 1px solid black;
    padding: 5px;
}


`;
const SharedContent = styled.div`
width: 80%;
margin:10px auto;
gap: 10px;
align-items: center;
display: flex;
img{
    width: 50px;
    height:50px;
    border-radius: 50%;
}
`;
const Textarea = styled.div`
 

width:80%;
margin:20px auto;
textarea{
    width: 100%;
    min-height:120px;
    border:2px solid #2977c9;

    resize: none;
    border-radius: 5px;
    &:focus{
        outline: none !important;
    
        

    }
}
`;

const SharedActions = styled.div`
display: flex;
width:90%;
/* height: 40px; */
/* align-items: center; */

margin:10px auto;
padding: 10px auto;
div{
    display: flex;
    
    &:first-of-type{
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgba(0,0,0,0.6);
    }
    &:last-of-type{
        display: flex !important;
        width:100%;
        
        justify-content: space-between;
        
    }
    button{
        height: 30px;
        
        svg{
            font-size: 20px;
        }
    }
}
`;

const UploadImage = styled.div`
width:80%;
margin:10px auto;

/* text-align: center; */
input{
    width: 50%;
    /* height: 30px; */
    padding: 5px;
    margin-bottom: 10px;

}
button{
    margin-bottom: 10px;
    height: 29.33px;

}
img{
    width: 100%;
    margin-top: 10px;
}
`;

const PostButton = styled.button`

    background: ${(props)=>(props.disabled? "rgba(0,0,0,0.6)":"#0a66c2")};
/* background-color:#0a66c2; */
          
    border:none ;
    color:${(props)=>(props.disabled?"#8f8f8f":"#fff")};
    cursor: ${(props)=>(props.disabled?"not-allowed":"")}
    `;

export default Postmodel;