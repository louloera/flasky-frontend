import "./Animal.css";
//responssability: Reusable UI element. Displays animal, name, species, photo
const Animal = (props) => {
    return (<section className="Animal">
        <h3>Animal name: {props.name}</h3>
        <p>Species: {props.species}</p>
        <img src= "https://placebear.com/200/300" alt="Photo of Bear"></img>
    </section>);
};
export default Animal;