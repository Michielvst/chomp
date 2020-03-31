import React, { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Game from "./components/Game";

function App() {
  const [player1Color, setPlayer1Color] = useState("red"); //tijdelijk, normaal ""
  const [player2Color, setPlayer2Color] = useState("blue"); //tijdelijk, normaal ""
  const [showColorPicker, setShowColorPicker] = useState(false); //tijdelijk, normaal true
  const [showGame, setShowGame] = useState(true); //tijdelijk, normaal false

  return (
    <div className="App">
      {showColorPicker === true && (
        <ColorPicker
          player1Color={player1Color}
          setPlayer1Color={setPlayer1Color}
          player2Color={player2Color}
          setPlayer2Color={setPlayer2Color}
          setShowGame={setShowGame}
          setShowColorPicker={setShowColorPicker}
        />
      )}
      {showGame === true && (
        <Game player1Color={player1Color} player2Color={player2Color} />
      )}
    </div>
  );
}

export default App;
