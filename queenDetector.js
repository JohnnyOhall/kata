let whiteQueen = [0, 0];
let blackQueen = [5, 7];
const gameBoard = []

const generateBoard = (whiteQueen, blackQueen) => {
  for (let i = 0; i < 8; i++){
    gameBoard.push([]);
    for (let j = 0; j < 8; j++){
      if (
        whiteQueen[0] === i &&
        whiteQueen[1] === j ||
        blackQueen[0] === i &&
        blackQueen[1] === j
        ){
          gameBoard[i].push(1)
      } else { 
        gameBoard[i].push(0)
      }
    }
  }

  return gameBoard
}

generateBoard(whiteQueen,blackQueen)

console.table(gameBoard)