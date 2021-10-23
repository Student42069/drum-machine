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
          <div>
            <p>Power</p>
            <label className="switch">
              <input type="checkbox" id="onOff" onChange={handleOn} />
              <span className="slider"></span>
            </label>
          </div>
          <h3 id="display">{name}</h3>
          <div>
            <p>Bank</p>
            <label className="switch">
              <input type="checkbox" id="bank" onChange={handleBank} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function Drum(props) {
  let audio = new Audio(props.letter.url);

  const play = () => {
    if (props.onOff) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      props.setName(props.letter.id);
    }
  };

  return (
    <div className="drum-pad button-36" id={props.letter.id} onClick={play}>
      <h2>{props.letter.keyTrigger}</h2>
      <audio
        src={props.letter.url}
        className="clip"
        id={props.letter.keyTrigger}
      ></audio>
    </div>
  );
}

window.addEventListener("keydown", function (event) {
  if (
    "qweasdzxc".indexOf(event.key) !== -1 &&
    document.getElementById("onOff").checked
  ) {
    document
      .getElementById(event.key.toUpperCase())
      .parentElement.classList.add("myclass");

    setTimeout(function () {
      document
        .getElementById(event.key.toUpperCase())
        .parentElement.classList.remove("myclass");
    }, 100);

    let audio = new Audio(document.getElementById(event.key.toUpperCase()).src);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").textContent = document.getElementById(
      event.key.toUpperCase()
    ).parentElement.id;
  }
});

export default App;
