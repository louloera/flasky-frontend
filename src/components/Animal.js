import "./Animal.css";
import Proptypes from 'prop-types'
import { useState } from "react";
//responssability: Reusable UI element. Displays animal, name, species, photo
const Animal = (props) => {
    
    const [isBookmarked, setIsBookmarked] = useState(false)


    const toggleMarkAnimal =() => {
        setIsBookmarked(!isBookmarked);
    }

    let AnimalStyle = 'Animal';
    if (isBookmarked) {
        AnimalStyle = 'Animal bookmarked';
    }


    return (<section>
        <h3 className={AnimalStyle}>Animal name: {props.name}</h3>
        <p>Species: {props.species}</p>
        {props.photo ? <img src= {props.photo} alt="Photo of Bear"></img> : "[No photo]"}
        <button onClick = {toggleMarkAnimal}>BookMark</button>
        <p>Is bookmarked? {isBookmarked ? 'Bookmarked': 'Not Bookmarked'}</p>
    </section>);
};

Animal.Prototypes= {
    name: Proptypes.string,
    species: Proptypes.string,
    adopted: Proptypes.bool,
    age: Proptypes.number,
    photo: Proptypes.string,
    id: Proptypes.number

}
export default Animal;