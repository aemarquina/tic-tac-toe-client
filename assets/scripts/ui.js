'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is: ' + data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure data is: ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ' + data)
  store.user = data.user
  $('.play-view').show()
  $('.signInView').hide()
  $('.container').hide()
  $('.signInText').val('')
}

const signInFailure = function (error) {
  $('#message').text('🛑 Error on sign in 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure data is: ', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess data is: ' + data)
}

const changePasswordFailure = function (error) {
  $('#message').text('🛑 Error changing password 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure data is: ', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess data is: ' + data)
  $('.play-view').hide()
  $('.signInView').show()
  $('#gameMessage').hide()
  $('.playerTurn').hide()
}

const signOutFailure = function (error) {
  $('#message').text('🛑 Error signing out 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure data is: ', error)
}

const newGameSuccess = function (data) {
  $('#gameMessage').text('You are starting a new game❕')
  $('.gameStatMessage').hide()
  $('#message').hide()
  store.game = data.game.id
}

const newGameFailure = function () {
  $('#gameMessage').text('You are unable to start a new game')
}

const updateGameStatsSuccess = function (data) {
  $('#gameMessage').text('You are unable to update new game')
}

const updateGameStatsFailure = function () {
  $('#gameMessage').text('You are unable to start a new game')
}

const getGameStatsSuccess = function (data) {
  console.log(data)
  $('.gameStatMessage').show()
  $('.gameStatMessage').text('You played ' + data.games.length + ' games❕')
}

const getGameStatsFailure = function (data) {
  $('.gameStatMessage').text('Unable to retrieve games!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  updateGameStatsFailure,
  updateGameStatsSuccess,
  getGameStatsSuccess,
  getGameStatsFailure
}
