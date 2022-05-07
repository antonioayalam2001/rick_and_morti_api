import "./App.css";
import Informacion from "./Informacion.jsx";
import List from "./List.jsx";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = async (count) => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data);
      setInfo(data.info);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };
  useEffect(() => {
    fetchData(count);
  }, [count]);

  return (
    <>
      <h1 style={{textAlign: "center",color:"green"}}>Rick And Morty First Project with React</h1>
      {info ? (
        <>
          <Informacion info={info} />
        </>
      ) : (
        <Loader/>
      )}
      <div className="grid">
      <List charactersList={characters} />
      </div>
      {/* <pre>{ JSON.stringify(info)}</pre> */}
      {/* <pre>{JSON.stringify(characters, null, 2)}</pre> */}
    </>
  );
}

export default App;
