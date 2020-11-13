import { useState } from "react";
import "./App.css";
import { jokes } from "./roasts.json";

function App() {
  const [joke, setJoke] = useState(getRandomJoke);

  function getRandomJoke() {
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  const getJoke = () => {
    setJoke(getRandomJoke);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>{joke}</div>
        <button onClick={getJoke}>Hit the button!</button>
      </header>
    </div>
  );
}
export default App;
