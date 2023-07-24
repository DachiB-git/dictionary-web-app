import { useEffect, useState } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

  function fetchData(e) {
    e.preventDefault();
    const container = document.querySelector(".container");
    container.classList.remove("active");
    if (word) {
      fetch(`${URL}/${word}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      setTimeout(() => {
        container.classList.add("active");
      }, 750);
    }
  }
  function handleInputChange(e) {
    setWord(e.target.value);
  }
  return (
    <div className="App">
      <header>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "3rem", color: "gray" }}
        >
          book
        </span>
      </header>
      <form onSubmit={fetchData}>
        <button type="submit" className="search-btn">
          <span className="material-symbols-outlined">search</span>
        </button>

        <input
          type="text"
          onChange={handleInputChange}
          value={word}
          className="search-input"
        />
      </form>
      <div className="container">
        {(data && !("title" in data) && <Display {...data[0]} />) ||
          (data && <h2>{data.title}</h2>)}
      </div>
    </div>
  );
}

export default App;
