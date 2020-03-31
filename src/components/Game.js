import React, { useState } from "react";

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

  function color(value) {
    if (tilesPlayer1.some(el => JSON.stringify(value) === JSON.stringify(el))) {
      return props.player1Color;
    } else if (
      tilesPlayer2.some(el => JSON.stringify(value) === JSON.stringify(el))
    ) {
      return props.player2Color;
    }
  }

  return (
    <div className="game">
      <div className="gameBoard">
        {tiles.map(tile => {
          return (
            <div
              className="tile"
              value={tile}
              onClick={handleTileClick}
              name={tile}
              style={{ backgroundColor: color(tile) }}
            >
              {tile}
            </div>
          );
        })}
      </div>
    </div>
  );
}
