import "./App.css";

const drums = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

function App() {
  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        {drums.map((letter) => {
          return <Drum text={letter.toUpperCase()} key={letter} />;
        })}
      </div>
    </div>
  );
}

function Drum(p) {
  return (
    <div className="drum-pad" id={p.text.toLowerCase()}>
      <h2>{p.text}</h2>
    </div>
  );
}

export default App;
