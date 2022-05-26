import { useEffect, useRef, useState } from "react";
import "./App.css";

import Figure from "./chess-figures/Figure";
import chessPosition from "./data/chessPosition";
import chessField from "./data/chessField";
import chessMovementHandler from "./functions/chessMoveHandler";
import RestartButton from "./components/RestartButton";
import DrawButton from "./components/DrawButton";
import GiveUpButton from "./components/GiveUpButton";

function App() {
  const [chessPos, setChessPos] = useState(
    JSON.parse(JSON.stringify(chessPosition))
  );
  const [goldGoes, setGoldGoes] = useState(false);
  const [field, setField] = useState(JSON.parse(JSON.stringify(chessField)));
  const [moving, setMoving] = useState(false);

  const RestartGame = () => {
    setChessPos(JSON.parse(JSON.stringify(chessPosition)));
    setGoldGoes(false);
    setField(JSON.parse(JSON.stringify(chessField)));
    setMoving(false);

  };

  return (
    <div className="App">
      <table>
        <tbody>
          {field.map((arr, y) => {
            return (
              <tr key={y}>
                {arr.map((v, x) => {
                  return (
                    <td
                      key={x}
                      className={(x + y) % 2 === 1 ? "cell" : "cell-b"}
                    >
                      <div
                        className={
                          moving[0] === x && moving[1] === y
                            ? "cell-entries allow-cell"
                            : "cell-entries"
                        }
                        onClick={() => {
                          chessMovementHandler(
                            v,
                            x,
                            y,
                            moving,
                            setChessPos,
                            setMoving,
                            setField,
                            setGoldGoes,
                            goldGoes
                          );
                        }}
                      >
                        {v === "e" ? null : (
                          <Figure
                            key={chessPos[v].id}
                            image={chessPos[v].img}
                          />
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className="killed">
        {Object.values(chessPos).map((val) => {
          if (val.killed) {
            return <Figure key={val.id} image={val.img} />;
          }
        })}
      </span>
      <span className="control-buttons">
        <RestartButton RestartGame={RestartGame} />
        <GiveUpButton />
      </span>
    </div>
  );
}

export default App;
