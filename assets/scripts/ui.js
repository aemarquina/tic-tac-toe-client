'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed up successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.signUpText').val('')
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('.signUpText').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user = data.user
  $('.play-view').show()
  $('.signInView').hide()
  $('.container').hide()
  $('.signInText').val('')
  $('.changePasswordShow').hide()
  $('.gameStatMessage').hide()
  $('.changePasswordButton').show()
}

const signInFailure = function (error) {
  $('#message').text('🛑 Error on sign in 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('.signInText').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.changePasswordText').val('')
  $('#message').show()
  $('.game-message').hide()
  $('.changePasswordShow').hide()
  $('.changePasswordButton').show()
}

const changePasswordFailure = function (error) {
  $('#message').text('🛑 Error changing password 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('.changePasswordText').val('')
  $('#message').show()
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully❕')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.play-view').hide()
  $('.signInView').show()
  $('#gameMessage').hide()
  $('.playerTurn').hide()
  $('#message').show()
  $('.game-message').hide()
}

const signOutFailure = function (error) {
  $('#message').text('🛑 Error signing out 🛑')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const newGameSuccess = function (data) {
  $('.playerTurn').show()
  $('#gameMessage').text('You are starting a new game❕')
  $('.gameStatMessage').hide()
  $('#message').hide()
  $('.game-message').show()
  store.game = data.game.id
}

const newGameFailure = function () {
  $('#gameMessage').text('You are unable to start a new game')
  $('.playerTurn').hide()
}

const updateGameStatsSuccess = function (data) {
  $('#gameMessage').text('You are able to update new game')
}

const updateGameStatsFailure = function () {
  $('#gameMessage').text('You are unable to start a new game')
}

const getGameStatsSuccess = function (data) {
  $('.gameStatMessage').show()
  $('.gameStatMessage').text('You played ' + data.games.length + ' games❕')
  $('#message').hide()
  $('.game-message').hide()
  $('.playerTurn').show()
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
