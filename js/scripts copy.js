function beepBoop() {
  //userArray.forEach(function (number) {
  return (personInput);
  //})




}



$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())

    function beepBoop() {
      return (personInput);
    }
    //console.log(personInput)
    beepBoop(personInput)

  })
})
