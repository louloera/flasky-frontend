import {useState} from "react";
import './App.css';
// import Animal from './components/Animal';
import AnimalList from './components/AnimalList';


const listOFAnimals = [{
  name: "Violet", 
  species: "Pitbull Mix",
  photo :"https://placebear.com/200/300",
  id: 1
},
{
  name: "Lou",
  species: "Que paso", 
  photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
  id: 2
},
{
  name: "Joac",
  species: "kewf", 
  id:3
},
{
  name: "Mama",
  id:4
}]

function App() {

  const [animals, setAnimals] = useState(listOFAnimals);

  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* I want to list a bunch of animals...*/}
      {/*Each animal has name and photo*/}
      <AnimalList listOFAnimals={animals}></AnimalList>
      
    </section>
  );
}

export default App;
