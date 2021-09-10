import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((rest) => rest.json())
      .then((rest) => setCharacterList(rest.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
