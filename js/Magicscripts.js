//
function beep(string) {//these dont work unless we string.replace? Also Regex need tuning
  string = string.replace(/[1]{1,}/g, "Beep!")
}
function boop(string) {
  string = string.replace(/[2]{1,}/g, "Boop!")
}
function dontYou(string) {
  string = string.replace(/[3]{1,}/g, "Won't you be my neighbor?")
}
function inputToBleep(input) {
  let userArray = []
  let userString = ""
  userArray = [...Array(input + 1).keys()]
  beep(userArray)
  boop(userArray)
  dontYou(userArray)
  userString = userArray.toString()
  return userString//still unclear what the return does
}
$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    inputToBleep(personInput)
    $("#result").html(userString)
  })
})