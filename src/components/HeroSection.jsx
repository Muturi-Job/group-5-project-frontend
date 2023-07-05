import { useState } from "react";
import CustomImage from "./CustomImage";

function HeroSection () {
    const images = [
        '/images/img_1.jpg',
        '/images/img_2.jpg',
        '/images/img_3.jpg',
        '/images/img_4.jpg',
        '/images/img_5.jpg',
        '/images/img_6.jpg',
        '/images/img_7.jpg',
        '/images/img_8.jpg',
        '/images/img_9.jpg',
    ]

    return(
      <div className="section hero">
        <div className="col">
            <h1 className="title">What are we about</h1>
            <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat labore architecto minima corrupti obcaecati sint quos quia laborum quo recusandae! Quo, natus non. Distinctio eos, modi doloribus sunt natus exercitationem.</p>
            <button className="btn">Explore Now</button>
        </div>
        <div className="col gallery">
            {
                images.map((src, index) => (<CustomImage key={index} imgsrc={src} pt={'85%'}/>))
            
            }

        </div>

      </div>  
    );
}
export default HeroSection;