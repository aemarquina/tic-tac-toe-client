// make sure to attach to other files
// create variable and put path for api, and ui

let board = [null, null, null, null, null, null, null, null, null]

let count = 0
$('.block').on('click', function () {
  // console.log(count)
}
)
// make sure that a clicking event is registered
const clickT = function (event) {
  const block = event.target
  const id = block.id
  const player = (count % 2 === 0) ? 'X' : 'O'
  const notplayer = (count % 2 !== 0) ? 'X' : 'O'

  if (board[id] !== null) {
    $('.game-message').text('Invalid Move')
    return
  }
  if (board[id] === null) {
    $('.game-message').text('')
  }

  if (youWin(notplayer) === true) {
    return
  }
  console.log(youWin(player))
  if (count % 2 === 0) {
    $(block).text('X')
    board[id] = 'X'
  } else {
    $(block).text('O')
    board[id] = 'O'
  }

  count++
}

function youWin (player) {
  if (count > 4) {
    if (winner(player) === true) {
      return true
    }
  }
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

// add logic that will keep the mark on the board
// add logic that will alternate between x and o
// add logic to register after every turn if someone had won after 3rd move
// find best way to add logic for winning         

module.exports = {
  clickT
}
