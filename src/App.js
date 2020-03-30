import React, { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Game from "./components/Game";

function App() {
  const [player1Color, setPlayer1Color] = useState("");
  const [player2Color, setPlayer2Color] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="App">
      {showColorPicker === true && (
        <ColorPicker
          player1Color={player1Color}
          setPlayer1Color={setPlayer1Color}
          player2Color={player2Color}
          setPlayer2Color={setPlayer2Color}
          setShowGame={setShowGame}
        />
      )}
      {showGame === true && <Game />}
    </div>
  );
}

export default App;
