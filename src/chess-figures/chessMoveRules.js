export function chessMoveRules(moving, v, x, y) {
  if (moving[2].charAt(2) !== v.charAt(2) || v === "e") {
    if (moving[2].charAt(0) === "h") {
      if (Math.abs(moving[0] - x) === 2 && Math.abs(moving[1] - y) === 1) {
        return true;
      } else if (
        Math.abs(moving[0] - x) === 1 &&
        Math.abs(moving[1] - y) === 2
      ) {
        return true;
      } else {
        return false;
      }
    } else if (moving[2].charAt(0) === "l") {
      if (moving[0] === x && moving[1] !== y) {
        console.log("JUST DO IT");
        return true;
      } else if (moving[0] !== x && moving[1] === y) {
        return true;
      } else {
        return false;
      }
    } else if (moving[2].charAt(0) === "s") {
      if (Math.abs(moving[0] - x) === Math.abs(moving[1] - y)) {
        return true;
      } else {
        return false;
      }
    } else if (moving[2].charAt(0) === "k") {
      if (Math.abs(moving[0] - x) === 1 && moving[1] === y) {
        return true;
      } else if (Math.abs(moving[1] - y) === 1 && moving[0] === x) {
        return true;
      } else if (
        Math.abs(moving[1] - y) === 1 &&
        Math.abs(moving[0] - x) === 1
      ) {
        return true;
      } else {
        return false;
      }
    } else if (moving[2].charAt(0) === "q") {
      if (moving[0] === x && moving[1] !== y) {
        console.log("JUST DO IT");
        return true;
      } else if (moving[0] !== x && moving[1] === y) {
        return true;
      } else if (Math.abs(moving[0] - x) === Math.abs(moving[1] - y)) {
        return true;
      } else {
        return false;
      }
    } else if (moving[2].charAt(0) === "p") {
      if (moving[2].charAt(2) === "s") {
        if (
          ((moving[1] === y + 1 || moving[1] === y + 2) &&
            moving[1] === 6 &&
            moving[0] === x &&
            v === "e") ||
          (Math.abs(moving[0] - x) === 1 && moving[1] === y + 1 && v !== "e")
        ) {
          return true;
        } else if (moving[1] === y + 1 && moving[0] === x && v === "e") {
          return true;
        } else {
          return false;
        }
      } else {
        if (Math.abs(moving[0] - x) === 1 && moving[1] - y === 1) {
        }
        if (
          ((moving[1] === y - 1 || moving[1] === y - 2) &&
            moving[1] === 1 &&
            moving[0] === x &&
            v === "e") ||
          (Math.abs(moving[0] - x) === 1 && moving[1] === y - 1 && v !== "e")
        ) {
          return true;
        } else if (moving[1] === y - 1 && moving[0] === x && v === "e") {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
  } else {
    return false;
  }
}
