import { chessMoveRules } from "../chess-figures/chessMoveRules";

export default function chessMovementHandler(v,x,y,moving,setChessPos,setMoving,setField)  {
    if (v !== "e") {
      setMoving([x, y, v]);
    }

    if (moving[2] === v) {
      setMoving(false);
    }
    if (moving &&  chessMoveRules(moving,v,x,y)) {
      setChessPos((prev) => {
        if (v === "e") {
          
        } else {
          prev[v].killed = true;
        }

        prev[moving[2]].pos = [x, y];
        return prev;
      });
      setField((prev) => {
        prev[moving[1]][moving[0]] = "e";
        prev[y][x] = moving[2];
        return prev;
      });

      setMoving(false);
    } else if (moving) {

    }
    // console.log('from',[moving[0],moving[1]],'to',[x,y])
  }