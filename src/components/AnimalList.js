import "./AnimalList.css"
import Animal from "./Animal";

const AnimalList = () => {
    const listOFAnimals = [{
        name: "Violet", 
        species: "Pitbull Mix"
        
    },
    {
        name: "Lou",
        species: "Que paso"
    },
    {
        name: "Joac",
        species: "kewf"
    }]


    const renderAnimals = listOFAnimals.map(creature => (
        <li>
            <Animal name= {creature.name} species={creature.species}>
            </Animal>
        </li>
    ));

    return (
        <section className="AnimalList">
        <ul className="Animal List">
            {renderAnimals}
        </ul>

    </section>)
};
export default AnimalList;