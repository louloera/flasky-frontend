import './App.css';
import Animal from './components/Animal';

function App() {
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* I want to list a bunch of animals...*/}
      {/*Each animal has name and photo*/}
      <Animal></Animal>
    </section>
  );
}

export default App;
