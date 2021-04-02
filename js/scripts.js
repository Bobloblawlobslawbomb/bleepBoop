let userArray = []

function beepBoop(input) {
  let userArray = [input]
  console.log(userArray)
}

$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
  })
})
