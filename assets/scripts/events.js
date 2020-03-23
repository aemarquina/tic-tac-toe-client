// make sure to attach to other files
// create variable and put path for api, and ui
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let board = [null, null, null, null, null, null, null, null, null]
let count = 0
$('.play-view').hide()

let gameOver = false
// make sure that a clicking event is registered
const clickT = function (event) {
  const block = event.target
  const id = event.target.id
  const player = (count % 2 === 0) ? 'X' : 'O'

  $('#gameMessage').hide()
  $('.game-message').show()

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
  updateGameStats(player, id, gameOver)
}

function getResult (player) {
  if (count > 4) {
    if (winner(player)) {
      $('.game-message').text('Player ' + player + ' Wins!')
      $('.playerTurn').text('')
      return true
    }
  } if (count === 9) {
    $('.game-message').text('Its a draw!')
    $('.playerTurn').text('')
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
  $('.playerTurn').text('')
  gameOver = false
  count = 0
  $('.container').show()
  $('.changePasswordShow').hide()
  $('.changePasswordButton').show()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signed in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changed password!')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onChangePasswordButton = function (event) {
  $('.changePasswordShow').show()
  $('.changePasswordButton').hide()
  $('#message').hide()
  $('.game-message').hide()
  $('.gameStatMessage').hide()
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signed Out!')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGameStats = function (event) {
  event.preventDefault()
  api.getStats()
    .then(ui.getGameStatsSuccess)
    .catch(ui.getGameStatsFailure)
}

const updateGameStats = function (player, id, gameOver) {
  api.updateStats(player, id, gameOver)
    .then(ui.updateGameStatsSuccess)
    .catch(ui.updateGameStatsFailure)
}

module.exports = {
  clickT,
  startNewGame,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGameStats,
  updateGameStats,
  onChangePasswordButton
}
