let userArray = []
let userString = ""

/*function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
  let userArray = Array.push()
  console.log(userArray)
}*/




function beepBoop(input) {
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
  userArray = userArray.replace(/[1]{1,}/g, "beep!")
  userArray = userArray.replace(/[2]{1,}/g, "boop!")
  userArray = userArray.replace(/[3]{1,}/g, "won't you be my neighbor?")
}





$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
    console.log(userArray)
    $("#result").html(userString)
  })
})




/*
As far as i got trying to do the project the 'real' way as of Sunday night:

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
*/


/*
I played with loops a little bit. I shouldve done more



function beepBoop() {
for (let i = 0; i < personInput.length; i++) {
  let userArray = [personInput]
 return userArray
 }
}
*/

/*
Some of my favorite regexs

let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
  userArray = userArray.replace(/[1]{1,}/g, "beep!")
  userArray = userArray.replace(/[2]{1,}/g, "boop!")
  userArray = userArray.replace(/[3]{1,}/g, "won't you be my neighbor?")
}//these are almost good regexs
//i like this too
[...Array(10).keys()]//comes back"1234567"

Array.from(String(12345), Number);//comes back"1234567"

let userArray = [...Array(input).keys()]
*/

/*
let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
  userArray.replace(/[1]/g, "beep!")
  userArray.replace(/[2]/g, "boop!")
  userArray.replace(/[3]/g, "won't you be my neighbor?")
  console.log(userArray)
}
*/

/*
let userArray = []
let userString = ""

function inputToArray(input) {
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
}

function beepBoop(string) {
  string.replace(/3/g, "Won't you be my neighbor?")
  console.log(userString)
}

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
--This one sort of works, but I don't really like it
*/

/*
also shouldve played with if else more

function beepBoop(input) {
  let userArray = [input]
  if (input == [NaN]) {
    alert("broken")
  } else {
    console.log(userArray)

  }
}




/*
A hodgepodge of weird ideas

let botArray = ["Beep!", "Boop!", "Won't you be my neighbor?"]
let userArray = []
let newArray = []
let amendedArray = []



function beepBoop(input) {
  let userArray = Array(input)
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



//THIS IS THE ONE -- just need to
let userArray = []
let userString = ""

function beepBoop(input) {
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
}




$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
    console.log(userArray)
  })
})


const beep = "Beep!"
const boop = "Boop!"
const beMy = "Won't you be my neighbor?"
const botArray = ["Beep!", "Boop!", "Won't you be my neighbor?"]
let userArray = []
let amendedArray = []

$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
  });

  $(".refresh").click(function () {
    location.reload()
  })
});

function beepBoop() {
  for (let i = 0; i < personInput.length; i++) {
    let userArray = [personInput]
    return userArray
  }
}
*/


/*
function beepBoop(string) {
  string.replace(/3/g, "Won't you be my neighbor?")
  console.log(userString)
}

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

/*
let newArray = []
let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
    userArray.forEach(function (element) {
      newArray.push(element)
    })
  }
}
//.forEach is not a function?


//dont touch

let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
}
//will return "012345678910" if beepBoop(10) is entered and userArray is typed into console




/*
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


let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
  console.log(userArray)
}

*/

//const beep = "Beep!"
//const boop = "Boop!"
//const beMy = "Won't you be my neighbor?"
//const botArray = ["Beep!", "Boop!", "Won't you be my neighbor?"]
//let userArray = []
//let amendedArray = []

//$(document).ready(function () {
//  $("#formOne").submit(function (e) {
//    e.preventDefault();
//    const personInput = parseInt($('input#userNum').val())
 // });

 // $(".refresh").click(function () {
 //   location.reload()
 // })
//});

//function beepBoop() {
  //for (let i = 0; i < personInput.length; i++) {
  //  let userArray = [personInput]
   // return userArray
 // }
//}


/*
function beepBoop(input) {
  let userArray = []
  let userString = ""
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
  console.log(userArray)
  console.log(userString)
  userArray.replace(/[1]{1,}/g, "beep!")
  //userArray = userArray.replace(/[2]{1,}/g, "boop!")
  //userArray = userArray.replace(/[3]{1,}/g, "won't you be my neighbor?")
}
*/
/*
let userArray = []
let userString = ""

function inputToArray(input) {
  userArray = [...Array(input + 1).keys()]
  userString = userArray.toString()
}

function beepBoop(string) {
  string.replace(/3/g, "Won't you be my neighbor?")
  console.log("This is the userString: " + userString)
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

// $(document).ready(function () {
//   $("#formOne").submit(function (e) {
//     e.preventDefault();
//     const personInput = parseInt($('input#userNum').val())
//     inputToArray(personInput)
//     //console.log(userArray)
//     //console.log(userString)
//     beepBoop(userString)//new line

//     $("#result").html(userString)

//   })
// })

/*
$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
    beepBoop(personInput)
    console.log(userArray)
    $("#result").html(userString)
  })
})
*/