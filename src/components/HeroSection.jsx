import { useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/recipes')
    }

    return(
      <div className="section hero">
        <div className="col">
            <h1 className="title">What are we about</h1>
            <p className="info">Discover a culinary haven where you can explore a vast collection of cooking recipes and reliable product reviews. Elevate your cooking skills with detailed recipes and gain insights on top-rated kitchen tools and food items. Join our community of food enthusiasts and embark on a flavorful journey towards culinary excellence.</p>
            <button className="btn" onClick={handleExploreClick}>Explore Now</button>
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