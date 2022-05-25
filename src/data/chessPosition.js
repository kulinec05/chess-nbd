import horseG from ".././chess-figures/svg/horse-g.svg";
import horseS from ".././chess-figures/svg/horse-s.svg";
import kingG from ".././chess-figures/svg/king-g.svg";
import kingS from ".././chess-figures/svg/king-s.svg";
import ladiaG from ".././chess-figures/svg/ladia-g.svg";
import ladiaS from ".././chess-figures/svg/ladia-s.svg";
import slonG from ".././chess-figures/svg/slon-g.svg";
import slonS from ".././chess-figures/svg/slon-s.svg";
import peshkaG from ".././chess-figures/svg/peshka-g.svg";
import peshkaS from ".././chess-figures/svg/peshka-s.svg";
import queenG from ".././chess-figures/svg/queen-g.svg";
import queenS from ".././chess-figures/svg/queen-s.svg";

const chessPosition = {
    p1g: {
      pos: [0, 1],
      killed: false,
      id: "p1g",
      img: peshkaG,
    },
    p2g: {
      pos: [1, 1],
      killed: false,
      id: "p2g",
      img: peshkaG,
    },
    p3g: {
      pos: [2, 1],
      killed: false,
      id: "p3g",
      img: peshkaG,
    },
    p4g: {
      pos: [3, 1],
      killed: false,
      id: "p4g",
      img: peshkaG,
    },
    p5g: {
      pos: [4, 1],
      killed: false,
      id: "p5g",
      img: peshkaG,
    },
    p6g: {
      pos: [5, 1],
      killed: false,
      id: "p6g",
      img: peshkaG,
    },
    p7g: {
      pos: [6, 1],
      killed: false,
      id: "p7g",
      img: peshkaG,
    },
    p8g: {
      pos: [7, 1],
      killed: false,
      id: "p8g",
      img: peshkaG,
    },

    p1s: {
      pos: [0, 6],
      killed: false,
      id: "p1s",
      img: peshkaS,
    },
    p2s: {
      pos: [1, 6],
      killed: false,
      id: "p2s",
      img: peshkaS,
    },
    p3s: {
      pos: [2, 6],
      killed: false,
      id: "p3s",
      img: peshkaS,
    },
    p4s: {
      pos: [3, 6],
      killed: false,
      id: "p4s",
      img: peshkaS,
    },
    p5s: {
      pos: [4, 6],
      killed: false,
      id: "p5s",
      img: peshkaS,
    },
    p6s: {
      pos: [5, 6],
      killed: false,
      id: "p6s",
      img: peshkaS,
    },
    p7s: {
      pos: [6, 6],
      killed: false,
      id: "p7s",
      img: peshkaS,
    },
    p8s: {
      pos: [7, 6],
      killed: false,
      id: "p8s",
      img: peshkaS,
    },
    //slon

    s1g: {
      pos: [2, 0],
      killed: false,
      id: "s1g",
      img: slonG,
    },
    s3g: {
      pos: [5, 0],
      killed: false,
      id: "s3g",
      img: slonG,
    },
    s1s: {
      pos: [2, 7],
      killed: false,
      id: "s1s",
      img: slonS,
    },
    s3s: {
      pos: [5, 7],
      killed: false,
      id: "s3s",
      img: slonS,
    },
    //horse
    h1g: {
      pos: [1, 0],
      killed: false,
      id: "h1g",
      img: horseG,
    },
    h3g: {
      pos: [6, 0],
      killed: false,
      id: "h3g",
      img: horseG,
    },
    h1s: {
      pos: [1, 7],
      killed: false,
      id: "h1s",
      img: horseS,
    },
    h3s: {
      pos: [6, 7],
      killed: false,
      id: "h3s",
      img: horseS,
    },
    //ladia
    l1g: {
      pos: [0, 0],
      killed: false,
      id: "l1g",
      img: ladiaG,
    },
    l3g: {
      pos: [7, 0],
      killed: false,
      id: "l3g",
      img: ladiaG,
    },
    l1s: {
      pos: [0, 7],
      killed: false,
      id: "l1s",
      img: ladiaS,
    },
    l3s: {
      pos: [7, 7],
      killed: false,
      id: "l3s",
      img: ladiaS,
    },
    q1g: {
      pos: [3, 0],
      killed: false,
      id: "q1g",
      img: queenG,
    },

    q2s: {
      pos: [3, 7],
      killed: false,
      id: "q2s",
      img: queenS,
    },
    k1g: {
      pos: [4, 0],
      killed: false,
      id: "k1g",
      img: kingG,
    },

    k2s: {
      pos: [4, 7],
      killed: false,
      id: "k2s",
      img: kingS,
    },
  }
  export default chessPosition