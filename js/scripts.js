let userArray = []

function beepBoop(input) {
  //let userArray = [input]//trying to make it into an array
  let userArray = Array.push()
  console.log(userArray)
}

$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
  })
})
