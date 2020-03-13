// make sure to attach to other files
// create variable and put path for api, and ui

let board = [null, null, null, null, null, null, null, null, null]
let count = 0
$('.block').on('click', function () {
  // console.log(count)
}
)

let gameOver = false
// make sure that a clicking event is registered
const clickT = function (event) {
  const block = event.target
  const id = event.target.id
  const player = (count % 2 === 0) ? 'X' : 'O'

  if (gameOver) {
    $('.game-message').text('Game Over')
    return
  }
  if (board[id] !== null) {
    $('.game-message').text('Invalid Move')
    return
  }
  if (board[id] === null) {
    $('.game-message').text('')
  }

  if (count % 2 === 0) {
    $(block).text('X')
    $('.playerTurn').text('Player O turn')
    board[id] = 'X'
  } else {
    $(block).text('O')
    $('.playerTurn').text('Player X turn')
    board[id] = 'O'
  }

  count++
  if (getResult(player)) {
    gameOver = true
  }
}

function getResult (player) {
  if (count > 4) {
    if (winner(player)) {
      $('.game-message').text('You Win!')
      $('.playerTurn').text('')
      return true
    }
  } if (count === 9) {
    $('.game-message').text('You Tie!')
    $('.playerTurn').text('')
    gameOver = true
    return true
  } return false
}

function winner (player) {
  if (player === board[0] && player === board[1] && player === board[2]) {
    return true
  } if (player === board[3] && player === board[4] && player === board[5]) {
    return true
  } if (player === board[6] && player === board[7] && player === board[8]) {
    return true
  } if (player === board[0] && player === board[3] && player === board[6]) {
    return true
  } if (player === board[1] && player === board[4] && player === board[7]) {
    return true
  } if (player === board[2] && player === board[5] && player === board[8]) {
    return true
  } if (player === board[0] && player === board[4] && player === board[8]) {
    return true
  } if (player === board[2] && player === board[4] && player === board[6]) {
    return true
  }

  return false
}

const startNewGame = function () {
  event.preventDefault()
  board = [null, null, null, null, null, null, null, null, null]
  $('.block').text('')
  $('.game-message').text('')
  gameOver = false
  count = 0

}

module.exports = {
  clickT,
  startNewGame
}
