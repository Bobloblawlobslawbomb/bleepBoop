function beepBoop(userNumber) {//still need to add "," --think we can do it at the 'else' and after "neighbor?" 
  let createdArray = []
  for (let index = 0; index <= userNumber; index += 1) {
    if (index.toString().includes("1")) {
      createdArray.push("Beep!,")
    } else if (index.toString().includes("2")) {
      createdArray.push("Boop!,")
    } else if (index.toString().includes("3")) {
      createdArray.push("Won't you be my neighbor?")
    } else {
      createdArray.push(index)
    }
  }
  return createdArray
}//also it doesnt 'exclude' meaning 12 =beep!

$(document).ready(function () {
  $("#form-one").submit(function (e) {
    e.preventDefault();
    const personInput = $('input#userNum').val()
    $("#result").html(beepBoop(personInput))
  })
})