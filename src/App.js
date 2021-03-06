import React, { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Game from "./components/Game";
import WinScreen from "./components/WinScreen";

function App() {
  const [player1Color, setPlayer1Color] = useState(""); //tijdelijk, normaal ""
  const [player2Color, setPlayer2Color] = useState(""); //tijdelijk, normaal ""
  const [playerTurn, setPlayerTurn] = useState("Player 1");
  const [showColorPicker, setShowColorPicker] = useState(true); //tijdelijk, normaal true
  const [showGame, setShowGame] = useState(false); //tijdelijk, normaal false
  const [showWinScreen, setShowWinScreen] = useState(false); //tijdelijk, normaal false

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
        <Game
          player1Color={player1Color}
          player2Color={player2Color}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          setShowGame={setShowGame}
          setShowWinScreen={setShowWinScreen}
        />
      )}
      {showWinScreen === true && (
        <WinScreen
          playerTurn={playerTurn}
          player1Color={player1Color}
          player2Color={player2Color}
          setShowWinScreen={setShowWinScreen}
          setShowColorPicker={setShowColorPicker}
          setPlayer1Color={setPlayer1Color}
          setPlayer2Color={setPlayer2Color}
        />
      )}
    </div>
  );
}

export default App;
