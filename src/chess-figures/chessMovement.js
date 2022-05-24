export function chessMovement(type, x, y) {
    console.log(type,x,y)
  if (type === "horseS") {
      return [[x+1,y-2],[x-1,y+2],[x+1,y+2],[x-2,y-1],[x-1,y-2],[x+2,y-1],[x-2,y+1],[x+2,y+1]]
  } else if (type === "horseG") {
      return [[x+1,y-2],[x-1,y+2],[x+1,y+2],[x-2,y-1],[x-1,y-2],[x+2,y-1],[x-2,y+1],[x+2,y+1]]
  } else if (type === "slonS") {
      return [[x,y]]
  } else if (type === "slonG") {
      return [[x,y]]
  } else if (type === "ladiaS") {
      return [[x,y]]
  } else if (type === "ladiaG") {
      return [[x,y]]
  } else if (type === "kingS") {
      return [[x,y]]
  } else if (type === "kingG") {
      return [[x,y]]
  } else if (type === "queenS") {
      return [[x,y]]
  } else if (type === "queenG") {
      return [[x,y]]
  } else if (type === "peshkaS") {
      return [[x,y]]
  } else if (type === "peshkaG") {
      return [[x-1,y]]
  }
}
