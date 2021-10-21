import "./App.css";
import bankOne from "./bankone";

function App() {
  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        {bankOne.map((letter) => {
          return <Drum drum={letter} key={letter.id} />;
        })}
      </div>
    </div>
  );
}

function Drum(props) {
  let audio = new Audio(props.drum.url);
  return (
    <div
      className="drum-pad"
      id={props.drum.id}
      onClick={() => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      }}
    >
      <h2>{props.drum.keyTrigger}</h2>
      <audio
        src={props.drum.url}
        className="clip"
        id={props.drum.keyTrigger}
      ></audio>
    </div>
  );
}

export default App;
