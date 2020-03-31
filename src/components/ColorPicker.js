import React, { useState } from "react";

const colors = [
  "red",
  "blue",
  "green",
  "pink",
  "yellow",
  "purple",
  "grey",
  "orange"
];

export default function ColorPicker(props) {
  const [selectedPlayer, setSelectedPlayer] = useState("Player 1");
  const [hideStartButton, setHideStartButton] = useState(true);

  function handleColorClick(e) {
    if (hideStartButton === false) {
      return;
    }
    if (selectedPlayer === "Player 1") {
      props.setPlayer1Color(e.currentTarget.id);
      setSelectedPlayer("Player 2");
    } else {
      props.setPlayer2Color(e.currentTarget.id);
      setHideStartButton(false);
      setSelectedPlayer("");
    }
  }

  function handleStartButtonClick() {
    props.setShowColorPicker(false);
    props.setShowGame(true);
    setSelectedPlayer("Player 1");
    setHideStartButton(true);
  }

  function checkIfAllreadyClicked(color) {
    if (props.player2Color !== "") {
      return "unClickable";
    } else if (color === props.player1Color) {
      return "unClickable";
    } else {
      return "clickable";
    }
  }

  return (
    <div className="colorPicker">
      <header className="playersColorSelect">
        <h1
          style={{ color: props.player1Color }}
          className={selectedPlayer === "Player 1" ? "pulsing" : ""}
        >
          Player 1
        </h1>
        <p hidden={!hideStartButton}>{selectedPlayer} select a color!</p>
        <button hidden={hideStartButton} onClick={handleStartButtonClick}>
          Start
        </button>
        <h1
          style={{ color: props.player2Color }}
          className={selectedPlayer === "Player 2" ? "pulsing" : ""}
        >
          Player 2
        </h1>
      </header>
      <div className="colorDiv">
        {colors.map(color => {
          return (
            <div
              onClick={handleColorClick}
              className={`color ${checkIfAllreadyClicked(color)}`}
              style={{ backgroundColor: color }}
              key={color}
              id={color}
            >
              test
            </div>
          );
        })}
      </div>
    </div>
  );
}
