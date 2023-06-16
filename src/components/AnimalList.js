import "./AnimalList.css"
import Animal from "./Animal";
import PropTypes from "prop-types"

const AnimalList = (props) => {
    const listOFAnimals = props.listOFAnimals;

    return (
        <section className="AnimalList">
        <ul className="Animal List">
            {
                listOFAnimals.map(creature => (
                    <li key = {creature.id}>
                        <Animal name= {creature.name} species={creature.species}
                        photo = {creature.photo}>
                        </Animal>
                    </li>
                ))
            
            }
        </ul>

    </section>)
};

AnimalList.protoTypes = {
    listOFAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            species: PropTypes.string,
            adopted: PropTypes.bool,
            age: PropTypes.number,
            photo: PropTypes.string,
            id: PropTypes.number
        })
    )
}
export default AnimalList;