import "./Animals.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
/*  
import birdd from "./voice/bird.wav";
import horsee from "./voice/horse.wav";
import coww from "./voice/cow.wav";
import dogg from "./voice/dog.wav";
import catt from "./voice/cat.wav";
import gatorr from "./voice/gator.wav"; 
*/

const svgMap = {
    dog,
    bird,
    cat,
    cow,
    gator,
    heart,
    horse
};

/*  
const voiceMap = {
    dog: dogg,
    bird: birdd,
    cat: catt,
    cow: coww,
    gator: gatorr, 
    horse: horsee
};
*/

function Animals({type}) {
   // const {type, key} = props;
    const [clicks, setClicks] = useState(0);
    
    const handleClick = () => {
        setClicks(clicks + 1);
    
    };

    return ( 
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svgMap[type]} alt="img svg loader" />
            <img
                className="heart"
               /*  onClick={handleClick}  */
                src={heart} 
                alt="heart img"
                style={{ width: 30 + 20*clicks + "px" }} 
            />
            {/*<button className="btn">Voice</button>
            <audio controls>
                <source src={voiceMap[type]} type="audio/ogg" />
            </audio> */}
        </div>      
    );
};

export default Animals;