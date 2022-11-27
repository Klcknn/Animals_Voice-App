import { useState } from "react";
import Animals from "./animals";
import "./App.css";

function getRandomAnimal() {
    // cretae a list animals array 
    const animals = ["bird","cat","dog","horse","cow","gator"];
    // the value returned to us is in this function
    return animals[Math.floor(Math.random() * animals.length)];
}

function App () {
    //const [count , setCount] = useState(0);
    
    //define a animals state variable
    const [animals , setAnimals] = useState([getRandomAnimal()]);
    
    const handleClick = () => { 
        //setCount(count + 1);

        // use state with animals variable and getRandomAnimal() function  
        setAnimals([...animals , getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <Animals type={animal} key={index} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick} >Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
            {/* <div>Number of animals {count}</div> */}
        </div>
    );
};

export default App;