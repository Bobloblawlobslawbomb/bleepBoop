
//function expression -or a- function literal:
const add = function (number1, number2) { return number1 + number2; }
add(3, 5)
8

//same as:
function add(number1, number2) {
  return number1 + number2;
}

//********/

//this example is a forEach loop that contains a function which console logs the array multiplied by 2: 

const array = [0, 1, 2, 3, 4, 5];
array.forEach(function (number) {
  console.log(number * 2);
});

//****************** */

//this is how we could store the return values of the array above
const array = [0, 1, 2, 3, 4, 5];
let doubledArray = [];
array.forEach(function (element) {
  doubledArray.push(element * 2);
});

//doubledArray;
//output: [0,1,2,3,4,5]
//array;
//output: [0,1,2,3,4,5]

//********************** */

//this example will show how the variables change each time the .forEach loop is run through. goto the console and add 'oldSum' and 'numberToAdd' to Watch, then click on blue step arrow
const array = [0, 1, 2, 3, 4, 5];
let sum = 0;
let oldSum;
let newSum;
array.forEach(function (numberToAdd) {
  debugger;
  oldSum = sum;
  sum = sum + numberToAdd;
  newSum = sum;
});


//********************************* */
//this example adds to a string, not a number -- note 'let=thingsILIke=*string*' you could initialize with "", but in this case we have a string to start with also '.concat' is non-destructive.

let thingsILike = "I like...";
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function (thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});
thingsILike;
"I like... bubble baths! kittens! good books! clean code!"

//***************************** */

//this would do the same with JQuery and would .append a string to a thing in the DOM with an id of #likable-things. As a result we wouldnt have to store likeableThings as a variable.

const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function (thing) {
  $("#likable-things").append(" " + thing + "!")
});

//**************************** */

// this wordCounter function takes the parameter 'text' Then we have a variable cvalled wordCount that will be used to keep track of the number of words (the count). We create an array of words called wordArray by splitting the text at the spaces (" ")  text is passed in as 'text' in wordCounter(text) in this instance 'text' is a parameter --it could be anyword, just be descriptive of what it is. Moving on, we do a .forEach loop on the array called wordArray for each element--a word in this case-- we incremnent the variable wordCount +1. We run the loop and the fuynction then returns the value for word count. in this case being the amount of words entered in the string broken out by thje spaces between the words.


function wordCounter(text) {
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}

//********************************* */

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

//********* */
//dont touch 

let userArray = []

function beepBoop(input) {
  for (let index = 0; index <= input; index += 1) {
    userArray = userArray + index;
  }
}
//will return "012345678910" if beepBoop(10) is entered and userArray is typed into console




//********** */
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