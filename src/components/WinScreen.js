import React from "react";

export default function WinScreen(props) {
  function handePlayAgain() {
    props.setShowWinScreen(false);
    props.setShowColorPicker(true);
    props.setPlayer1Color("");
    props.setPlayer2Color("");
  }
  return (
    <div className="winScreen">
      <p>
        <span
          style={{
            color:
              props.playerTurn === "Player1"
                ? props.player1Color
                : props.player2Color
          }}
        >
          {props.playerTurn === "Player 1" ? "Player 2" : "Player 1"}{" "}
        </span>
        <span>ate the poisened piece!</span>
      </p>
      <p>
        <span>The winner is </span>
        <span
          style={{
            color:
              props.playerTurn !== "Player1"
                ? props.player1Color
                : props.player2Color
          }}
        >
          {props.playerTurn}!
        </span>
      </p>
      <button onClick={handePlayAgain}>Play again</button>
    </div>
  );
}
