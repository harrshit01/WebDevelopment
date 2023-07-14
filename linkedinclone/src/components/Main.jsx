/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import  styled  from 'styled-components';
import {BsThreeDots} from "react-icons/bs"
import {FcLike,FcReadingEbook,FcGallery,FcShare,FcUpRight,FcComments,FcFilm,FcAbout,FcNews} from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux';
import Postmodel from './Postmodel';
import { collection , onSnapshot, query, orderBy, where} from "firebase/firestore";
import db from "../firebase";
import ReactPlayer from "react-player";



const Main = () => {
  const { photo} = useSelector((state)=>state.user);
  const {postData} = useSelector((state)=>state.article);
  const {uid} = useSelector((state)=>state.user);
  // const {loading} = useSelector((state)=>state.article);
  const [showmodel,setshowmodel]= useState("close");
  const [like, setlike]= useState(false);
   
  const dispatch = useDispatch();
 
  useEffect( ()=>{
    
    const ref = collection(db ,"articles");
    // , where("id","==",uid)
    const q = query(ref,orderBy("article.date","desc"));
    onSnapshot(q,(snapshot)=>{
     const data =[];

      snapshot.forEach((doc)=>{
       
          data.push(doc.data())
        console.log(doc.data());
          
            })
            // console.log(data);
            dispatch({
              type:"getarticlesAPI",
              payload:data
            })
          });

  },[dispatch, uid])
  const handleclick = (e)=>{
    e.preventDefault();
    if(e.target !== e.currentTarget){
      return;
    }
    switch (showmodel) {
      case "close":
        setshowmodel("open");
        break;
      case "open":
        setshowmodel("close");
        break;
    
      default:
        setshowmodel("close");
        break;
    }

  }
 

  return (
    <Container>
      <ShareCard>
        <Share>
          <img src={photo? photo: "/images/user.svg"} alt="" />
          <button onClick={handleclick}> Share a post</button>


        </Share>
        <Attachment>
          <button>
          <FcGallery/>
            Photo
          </button>
          <button>
          <FcFilm/>
            Video
          </button>
          <button>
          <FcAbout/>
            Event 
          </button>
          <button>
         < FcNews/>
            Write Article
          </button>
 

        </Attachment>
        
      </ShareCard>
      {/* {loading && <h1>loading</h1>} */}
    
     
      {
        postData.length > 0 &&
        postData.map((article, index)=>
        
      
    
      <Article key={index}>
        <SharedActor>
          <img src={article.article.image} alt="" />
          <div>
            <span style={{fontWeight:"bold"}}>{article.article.description}</span>
            <span>{article.article.title}</span>
            <span>{article.article.date.toDate().toLocaleDateString()}</span>
          </div>
          <BsThreeDots/>

        </SharedActor>
        <Description>
          {article.description}
        </Description>
        <SharedImage>
          { article.sharedImg &&

            <img src={article.sharedImg} alt="" />
          }
          {
            article.video &&
            <ReactPlayer width={"100%"} url={article.video}/>
          }
        </SharedImage>
        <SocialCount>
          <li>
          <FcLike/>
         < FcReadingEbook/>
          <span>{like? 76:75}</span>
          </li>
          <li>{article.comments}</li>

        </SocialCount>
        <SocialAction>
          <button onClick={()=>setlike(!like)}>
          <FcLike/>

            Like
          </button>
          <button>
          <FcComments/>
            Comment
          </button>
          <button>
          <FcShare/>
            Share
          </button>
          <button>
          <FcUpRight/>
            Send
          </button>

        </SocialAction>
      </Article>
        )
}
      <Postmodel handleclick={handleclick} showmodel={showmodel}
      
      />
    </Container>
  )
}

const Container = styled.div`
width:100%;
`;
const ShareCard= styled.div`
margin-bottom: 10px;
width: 100%;
padding-top:20px;
padding-bottom:10px;

box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
border-radius: 5px;
background-color:#fff ;


`;
const Share= styled.div`
width:90%;
display: flex;
margin:0 auto;
img{
  width:60px;
  height:60px;
  border-radius: 50%;
}
button{
  outline: none;
  border: none;
  border-radius: 35px;
  flex-grow: 1;
  margin-left: 15px;
  background-color: #fff;
  text-align: left;
  border:1px solid rgba(0 , 0, 0, 0.2);
  padding-left:20px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
}

`;
const Attachment= styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
button{
  svg{
    font-size:20px;
    margin-right:3px;
  }
 display: flex;
 align-items: center;
  outline: none;
  border: none;
  color: #2977c9;
  font-weight: 600;
  background-color: #fff;
}

`;

const Article = styled.section`
display: flex;
flex-direction: column;
/* gap:5px; */
width:100%;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
background-color: #fff;
border-radius: 5px;
margin-bottom: 10px;

`;
const SharedActor = styled.div`
width: 90%;
display: flex;
align-items: center;
gap:10px;
padding:15px 0;
margin:0 auto;
img{
  width:60px;
  height:60px;
  /* border-radius: 50%; */
}
div{
  display: flex;
  flex-direction: column;
  flex-grow:1;
 span{
  color: rgba(0, 0, 0, 0.6);
  
 }
}
`;
const Description = styled.p`
width: 90%;
margin:auto;
margin-bottom: 10px;

`;
const SharedImage = styled.div`
width:100%;
height: 100%;
margin-bottom: 5px;
img{
  width:100%;
  height: 300px;
  object-fit: contain;
}
`;
const SocialCount = styled.ul`
border-bottom: 1px solid rgba(0,0,0,0.2);

display:flex;
list-style-type: none;
width:100%;
margin:0 auto;
justify-content: space-between;
margin-bottom: 5px;

padding-bottom: 5px;

li{
  color: #2977c9;
  
  &:first-of-type{
    display: flex;
    align-items: center;
    margin-left:8px;
    span{
      font-size: 14px;
    }
  }
  &:last-of-type{
    font-size: 14px;
    margin-right:8px;


  
  }
}
`;
const SocialAction = styled.div`
display: flex;
width:80%;
height:35px;
margin:0 auto;
align-items: center;
justify-content: space-around;

button{
  svg{
    font-size: 15px;
    margin-right:3px;
  }
  font-weight:500;
  display: flex;
 align-items: center;
  outline: none;
  border: none;
  color: #2977c9;
  font-weight: 600;
  background-color: #fff;
}
`;




export default Main