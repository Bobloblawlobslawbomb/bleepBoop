const beep = "Beep!"
const boop = "Boop!"
const beMy = "Won't you be my neighbor?"
const botArray = ["Beep!", "Boop!", "Won't you be my neighbor?"]
const userArray = []
const amendedArray = []


$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault();
    const personInput = parseInt($('input#userNum').val())
  });
});


//const personInput = parseInt($('input#userNum').val())
//answerOne = parseInt($("#radioOneDiv input[type='radio']:checked").val())