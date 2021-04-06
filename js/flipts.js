let userArray = []
let userString = ""


function inputToArray(input) {
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
}
//everything above is good


function beepBoop(string) {
  string.replace(/3/g, "Won't you be my neighbor?")
  console.log(userString)
}



/*
function beep(string) {
  string = string.replace(/1./g, "Beep!")
  console.log(string)
}


function boop(string) {
  string = string.replace(/[2]+/g, "Boop!")
  console.log(string)
}


function wont(string) {
  string = string.replace(/[3]+/g, "Won't you be my neighbor?")
  console.log(string)
}
*/
//ewverything below is good
$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    inputToArray(personInput)

    console.log(userArray)
    console.log(userString)
    //beepBoop(userArray)//new line

    $("#result").html(userString)

  })
})





//function beepBoop(array){
//  for (let i=0; i<=array.length; i+=1){
//  
//  }
//  } 

/*
$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    inputToArray(personInput)
    console.log(userArray)
    console.log(userString)
    $("#result").html(userString)
  })
})
*/

/*
function beep(array) {
  array = array.replace(/[1]/g, "Beep!")
  console.log(array)
}
"array.replace is not a function"
*/
/*
let userArray = []

function beepBoop(input) {
  let userArray = [input]
  if (input == [NaN]) {
    alert("broken")
  } else {
    console.log(userArray)

  }
}
*/