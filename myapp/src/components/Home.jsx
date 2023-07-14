import React from 'react'
import {AiFillGoogleCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin} from "react-icons/ai";

function Home() {
  return (
    <>
    <div id="homepage" class="home1">
        <div class="bg"></div>
        
        <div class="logo">
            <h2>Foolish.dev</h2>
            <p>Solution to all your problems</p>
        </div>

    </div>
    <div id="about" className="home2">
        <div className="design">
            <div className="ourdescription">
                <h2>Who we are</h2>
                <p>Lorem ipsum d Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores perferendis voluptates doloribus consequatur neque exercitationem nisi porro esse nobis dolor ipsa, omnis voluptas laudantium dolorum eveniet cum, vitae odio!olor sit amet, consectetur adipisicing elit. Error veritatis fugit tempora mollitia quasi vero est quis. Facere, saepe obcaecati?</p>
            </div>
            <img src="" alt="About Our Work" />

    
        </div>
    </div>
    <div id="brands"className="home3">
        
    <div className="brandssection">
        <div style={{animationDelay:"0.3s"}}>
        <i><AiFillGoogleCircle/></i>
        <h3>Google</h3>
        </div>
        <div style={{animationDelay:"0.5s"}}>
        <i><AiFillYoutube/></i>
        <h3>Youtube</h3>
        </div>
        <div style={{animationDelay:"0.7s"}}>
        <i><AiFillInstagram/></i>
        <h3>Instagram</h3>
        </div>
        <div style={{animationDelay:"0.9s"}}>
        <i><AiFillLinkedin/></i>
        <h3>Linkedin</h3>
        </div>
    </div>

    </div>

   
    </>
  )
}

export default Home

