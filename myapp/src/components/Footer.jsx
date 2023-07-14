import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle, AiFillMessage} from "react-icons/ai";

function Footer() {
  return (
    <footer>
    <div className="footer">
        <h3>Foolish developer</h3>
        <div>
            <a href="https://youtube.com"><AiFillYoutube/></a>
            <a href="https://youtube.com"><AiFillInstagram/></a>
            <a href="https://youtube.com"><AiFillTwitterCircle/></a>
            <a href="https://youtube.com"><AiFillMessage/></a>
        </div>
    </div>
</footer>
  )
}

export default Footer