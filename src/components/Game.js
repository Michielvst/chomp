import React, { useState } from "react";
import poison from "../poison.png";

const tiles = [
  [4, 3],
  [3, 3],
  [2, 3],
  [1, 3],
  [4, 2],
  [3, 2],
  [2, 2],
  [1, 2],
  [4, 1],
  [3, 1],
  [2, 1],
  [1, 1]
];

export default function Game(props) {
  const [playerTurn, setPlayerTurn] = useState("Player 1");
  const [tilesPlayer1, setTilesPlayer1] = useState([]);
  const [tilesPlayer2, setTilesPlayer2] = useState([]);

  function togglePlayer() {
    playerTurn === "Player 1"
      ? setPlayerTurn("Player 2")
      : setPlayerTurn("Player 1");
  }

  function tileToArray(tile) {
    return tile
      .getAttribute("value")
      .split(",")
      .map(el => parseInt(el));
  }

  function handleTileClick(e) {
    const valueArr = tileToArray(e.currentTarget);
    console.log(tilesPlayer1.includes([...valueArr]));
    if (playerTurn === "Player 1") {
      if (checkIfTaken(valueArr)) {
        return;
      } else {
        let newTile = tilesPlayer1;
        newTile.push(valueArr);
        setTilesPlayer1(newTile);
        tiles.map(tile => {
          if (tile[0] <= valueArr[0] && tile[1] <= valueArr[1]) {
            if (checkIfTaken(tile)) {
              return;
            } else {
              newTile = tilesPlayer1;
              newTile.push(tile);
              setTilesPlayer1(newTile);
            }
          }
        });
        togglePlayer();
      }
    } else {
      if (checkIfTaken(valueArr)) {
        return;
      } else {
        let newTile = tilesPlayer2;
        newTile.push(valueArr);
        setTilesPlayer2(newTile);
        tiles.map(tile => {
          if (tile[0] <= valueArr[0] && tile[1] <= valueArr[1]) {
            if (checkIfTaken(tile)) {
              return;
            } else {
              newTile = tilesPlayer2;
              newTile.push(tile);
              setTilesPlayer2(newTile);
            }
          }
        });
        togglePlayer();
      }
    }
  }

  function checkIfTaken(value) {
    return (
      tilesPlayer2.some(el => JSON.stringify(value) === JSON.stringify(el)) ||
      tilesPlayer1.some(el => JSON.stringify(value) === JSON.stringify(el))
    );
  }

  function checkPlayer(value) {
    if (tilesPlayer1.some(el => JSON.stringify(value) === JSON.stringify(el))) {
      return "player1";
    } else if (
      tilesPlayer2.some(el => JSON.stringify(value) === JSON.stringify(el))
    ) {
      return "player2";
    }
  }

  return (
    <div className="game">
      <header className="playersGame">
        <h1
          style={{ color: props.player1Color }}
          className={playerTurn === "Player 1" ? "pulsing" : ""}
        >
          Player 1
        </h1>
        <p>{playerTurn}, your turn!</p>
        <h1
          style={{ color: props.player2Color }}
          className={playerTurn === "Player 2" ? "pulsing" : ""}
        >
          Player 2
        </h1>
      </header>
      <div className="gameBoard">
        <div
          className={`tile ${checkPlayer([4, 3])} xTile`}
          value={[4, 3]}
          onClick={handleTileClick}
          name={[4, 3]}
        >
          <img src={poison} className="poisonTile" />
        </div>
        {tiles.map(tile => {
          return JSON.stringify(tile) === JSON.stringify([4, 3]) ? (
            ""
          ) : (
            <div
              className={`tile ${checkPlayer(tile)}`}
              value={tile}
              onClick={handleTileClick}
              name={tile}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
