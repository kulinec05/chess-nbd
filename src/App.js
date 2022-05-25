import { useEffect, useRef, useState } from "react";
import "./App.css";

import Figure from "./chess-figures/Figure";
import chessPosition from "./data/chessPosition";
import chessField from "./data/chessField";
import chessMovementHandler from "./functions/chessMoveHandler";

/*
h-horse
k-king
l-ladia
s-slon
p-peshka
q-queen
s-silver
g-gold

*/

function App() {
  const [chessPos, setChessPos] = useState(chessPosition);

  const [field, setField] = useState(chessField);
  const [moving, setMoving] = useState(false);

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
                        onClick={()=>
                          chessMovementHandler(
                            v,
                            x,
                            y,
                            moving,
                            setChessPos,
                            setMoving,
                            setField
                          )
                        }
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
      <span>
        {Object.values(chessPos).map((val) => {
          if (val.killed) {
            return <Figure key={val.id} image={val.img} />;
          }
        })}
      </span>
    </div>
  );
}

export default App;
