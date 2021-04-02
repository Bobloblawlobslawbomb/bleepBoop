function beepBoop(input) {
  console.log(input);
}



$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())

    //console.log(personInput)//at this point we have an input gathered from the user
    beepBoop(personInput)

  })
})
