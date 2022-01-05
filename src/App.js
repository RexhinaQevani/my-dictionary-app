import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>My basic dictionary</h1>
        </header>
        <SearchEngine />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://rexhinaqevani.netlify.app/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Rexhina Qevani
        </a>{" "}
        and is{" "}
        <a
          href="
          https://github.com/RexhinaQevani/my-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
