import "./App.css";
import bankOne from "./bankone";
import bankTwo from "./banktwo";
import "./slider.css";
import React from "react";

function App() {
  const [onOff, setOnOff] = React.useState(false);
  const [bank, setBank] = React.useState(bankOne);
  const [name, setName] = React.useState("Drum");

  const handleOn = ({ target }) => {
    setOnOff(target.checked);
  };

  const handleBank = ({ target }) => {
    if (target.checked) {
      setBank(bankTwo);
    } else {
      setBank(bankOne);
    }
  };

  return (
    <div className="App" id="drum-machine">
      <h1>Drum Machine</h1>

      <div id="board">
        <div id="display1">
          {bank.map((letter) => {
            let props = {
              letter,
              onOff,
              setName,
            };
            return <Drum {...props} key={letter.id} />;
          })}
        </div>
        <div id="commands">
          <label className="switch">
            <input type="checkbox" onChange={handleOn} />
            <span className="slider"></span>
          </label>
          <h3 id="display">{name}</h3>
          <label className="switch">
            <input type="checkbox" onChange={handleBank} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

function Drum(props) {
  let audio = new Audio(props.letter.url);
  return (
    <div
      className="drum-pad"
      id={props.letter.id}
      onClick={() => {
        if (props.onOff) {
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          props.setName(props.letter.id);
        }
      }}
    >
      <h2>{props.letter.keyTrigger}</h2>
      <audio
        src={props.letter.url}
        className="clip"
        id={props.letter.keyTrigger}
      ></audio>
    </div>
  );
}

export default App;
