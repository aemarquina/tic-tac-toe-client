// make sure to attach to other files
    // create variable and put path for api, and ui

// add logic to clear everything back to its initial state
let count = 0
$('.block').on('click', function () {
  count = count + 1
  console.log(count)
})
// make sure that a clicking event is registered
const clickT = function (event) {
  const block = event.target

  if (count % 2 === 0) {
    $(block).text('O')
  } else {
    $(block).text('X')
  }
}
// add logic that will keep the mark on the board
// add logic that will alternate between x and o
// add logic to register after every turn if someone had won after 3rd move
    // find best way to add logic for winning 
        

module.exports = {
  clickT
}
