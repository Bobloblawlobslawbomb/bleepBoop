let botArray = ["Beep!", "Boop!", "Won't you be my neighbor?"]
let userArray = []
let newArray = []
let amendedArray = []



function beepBoop(input) {
  userArray = Array.from(Number(input))
}


$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
  })
})



////Array.from({length: n}, (_, i) => i + 1)


//all below goes into beepBoop
//let userArray = [input]
//console.log(userArray)
//for (let i = 0; i < input.length; i++) {
//  userArray = 
//}