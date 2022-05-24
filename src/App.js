import { useEffect, useRef, useState } from "react";
import "./App.css";

//svg imports
import horseG from "./chess-figures/svg/horse-g.svg";
import horseS from "./chess-figures/svg/horse-s.svg";
import kingG from "./chess-figures/svg/king-g.svg";
import kingS from "./chess-figures/svg/king-s.svg";
import ladiaG from "./chess-figures/svg/ladia-g.svg";
import ladiaS from "./chess-figures/svg/ladia-s.svg";
import slonG from "./chess-figures/svg/slon-g.svg";
import slonS from "./chess-figures/svg/slon-s.svg";
import peshkaG from "./chess-figures/svg/peshka-g.svg";
import peshkaS from "./chess-figures/svg/peshka-s.svg";
import queenG from "./chess-figures/svg/queen-g.svg";
import queenS from "./chess-figures/svg/queen-s.svg";

import Figure from "./chess-figures/Figure";
import { chessMovement } from "./chess-figures/chessMovement";

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
  let figuresImages = {
    horseG: horseG,
    horseS: horseS,
    kingG: kingG,
    kingS: kingS,
    ladiaG: ladiaG,
    ladiaS: ladiaS,
    slonG: slonG,
    slonS: slonS,
    peshkaG: peshkaG,
    peshkaS: peshkaS,
    queenG: queenG,
    queenS: queenS,
  };
  let defaultField = [
    ["l1g", "h1g", "s1g", "q1g", "k1g", "s3g", "h3g", "l3g"],
    ["p1g", "p2g", "p3g", "p4g", "p5g", "p6g", "p7g", "p8g"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e", "e", "e"],
    ["p1s", "p2s", "p3s", "p4s", "p5s", "p6s", "p7s", "p8s"],
    ["l1s", "h1s", "s1s", "q2s", "k2s", "s3s", "h3s", "l3s"],
  ];

  const [chessPos, setChessPos] = useState([
    {
      pos: [0, 1],
      killed: false,
      id: "p1g",
      img: peshkaG,
    },
    {
      pos: [1, 1],
      killed: false,
      id: "p2g",
      img: peshkaG,
    },
    {
      pos: [2, 1],
      killed: false,
      id: "p3g",
      img: peshkaG,
    },
    {
      pos: [3, 1],
      killed: false,
      id: "p4g",
      img: peshkaG,
    },
    {
      pos: [4, 1],
      killed: false,
      id: "p5g",
      img: peshkaG,
    },
    {
      pos: [5, 1],
      killed: false,
      id: "p6g",
      img: peshkaG,
    },
    {
      pos: [6, 1],
      killed: false,
      id: "p7g",
      img: peshkaG,
    },
    {
      pos: [7, 1],
      killed: false,
      id: "p8g",
      img: peshkaG,
    },

    {
      pos: [0, 6],
      killed: false,
      id: "p1s",
      img: peshkaS,
    },
    {
      pos: [1, 6],
      killed: false,
      id: "p2s",
      img: peshkaS,
    },
    {
      pos: [2, 6],
      killed: false,
      id: "p3s",
      img: peshkaS,
    },
    {
      pos: [3, 6],
      killed: false,
      id: "p4s",
      img: peshkaS,
    },
    {
      pos: [4, 6],
      killed: false,
      id: "p5s",
      img: peshkaS,
    },
    {
      pos: [5, 6],
      killed: false,
      id: "p6s",
      img: peshkaS,
    },
    {
      pos: [6, 6],
      killed: false,
      id: "p7s",
      img: peshkaS,
    },
    {
      pos: [7, 6],
      killed: false,
      id: "p8s",
      img: peshkaS,
    },
    //slon

    {
      pos: [2, 0],
      killed: false,
      id: "s1g",
      img: slonG,
    },
    {
      pos: [5, 0],
      killed: false,
      id: "s3g",
      img: slonG,
    },
    {
      pos: [2, 7],
      killed: false,
      id: "s1s",
      img: slonS,
    },
    {
      pos: [5, 7],
      killed: false,
      id: "s3s",
      img: slonS,
    },
    //horse
    {
      pos: [1, 0],
      killed: false,
      id: "h1g",
      img: horseG,
    },
    {
      pos: [6, 0],
      killed: false,
      id: "h3g",
      img: horseG,
    },
    {
      pos: [1, 7],
      killed: false,
      id: "h1s",
      img: horseS,
    },
    {
      pos: [6, 7],
      killed: false,
      id: "h3s",
      img: horseS,
    },
    //ladia
    {
      pos: [0, 0],
      killed: false,
      id: "l1g",
      img: ladiaG,
    },
    {
      pos: [7, 0],
      killed: false,
      id: "l3g",
      img: ladiaG,
    },
    {
      pos: [0, 7],
      killed: false,
      id: "l1s",
      img: ladiaS,
    },
    {
      pos: [7, 7],
      killed: false,
      id: "l3s",
      img: ladiaS,
    },
    {
      pos: [3, 0],
      killed: false,
      id: "q1g",
      img: queenG,
    },

    {
      pos: [3, 7],
      killed: false,
      id: "q2s",
      img: queenS,
    },
    {
      pos: [4, 0],
      killed: false,
      id: "k1g",
      img: kingG,
    },

    {
      pos: [4, 7],
      killed: false,
      id: "k2s",
      img: kingS,
    },
  ]);
  const [field, setField] = useState(defaultField);
  const moving = useRef(false);

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
                      className={
                        (x + y) % 2 === 1 ? "cell" : "cell-b"
                      }
                      onClick={() => {
                        if (moving && (moving[0] !== x || moving[1] !== y)) {
                          let nextCell = chessPos.findIndex((e) => {
                            return (
                              e.pos[0] === moving[0] && e.pos[1] === moving[1]
                            );
                          });
                          // console.log(v,'123',moving)

                          chessPos[nextCell].pos = [x, y];
                          setChessPos(chessPos);
                          moving =false
                          field[moving[1]][moving[0]] = "e";
                          field[y][x] = chessPos[nextCell].id;
                          setField(field);
                          
                          if (v !== moving[2]) {
                            
                            let deletingChess = chessPos.findIndex((e) => {
                              return e.id === v;
                            });
                            console.log(deletingChess)

                            chessPos[deletingChess].killed = true;
                            setChessPos(chessPos);
                          }
                        }
                        
                      }}
                    >
                      <div
                        className={
                          moving[0] === x && moving[1] === y
                            ? "cell-entries allow-cell"
                            : "cell-entries"
                        }
                      >
                        {chessPos.map((val, ind) => {
                          if (
                            val.pos[0] === x &&
                            val.pos[1] === y &&
                            !val.killed
                          ) {
                            return (
                              <div
                                onClick={() => {
                                  if (
                                    moving &&
                                    moving[0] === x &&
                                    moving[1] === y
                                  ) {
                                    moving =false
                                  } else {
                                    moving = [x, y, val.id]
                                  }
                                }}
                              >
                                <Figure key={val.id} image={val.img} />
                              </div>
                            );
                          }
                        })}
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
        {chessPos.map((val, ind) => {
          if (val.killed) {
            return <Figure image={val.img} key={val.id} />;
          }
        })}
      </span>
    </div>
  );
}

export default App;
