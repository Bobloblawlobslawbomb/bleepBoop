# _bleepBoop, or: How I learned to stop worrying and love the Dom_

#### *_this program simulates true robotic communication_

## By _**Giancarlo Vigneri**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Arrays and Loops_
* _TDD_

## Description
 _This program presents the user with a statement: "Heyo! Neighbor, please input a number" and provides a field to enter a number. Once the user has entered the number and pressed the button labeled: "Count like a friendly '70's Robot!" The page/program will display an array that follows the set of rules: "any number with a '1', but not a '2' or '3', will be replaced with 'Beep!'. Any number with a '2', but not a '3', will be replaced with 'Boop!'. Any number with a '3', will be replaced with 'Won't you be my neighbor?'" note- the page purports to allow the user to speak like a robot (it does not in fact provide this functionality)_

## Setup/Installation Requirements

1. Navigate to (https://github.com/Bobloblawlobslawbomb/bleepBoop)
2. Clone or download 'bleepBoop'
3. Double click index.html or right-click, (select 'open with...') and choose which program to open or view files
4. Once page has loaded you will be presented with a friendly statement and a field in which to enter a number.
5. Next the user must either click on the button provided below the field or just simply press 'enter'.
6. The page will display an array below the button made up of the elements of the array with a comma concatenated to the end of each element.
7. You may enter another number and the page will display a new array following the same set of rules.

## Known Bugs

### * Adds comma to last element 
 
##### _Would like to use this updated branching statement, however it does not provide the funtionality sought_

 function beepBoop(userNumber) {
  let createdArray = []
  for (let index = 0; index <= userNumber; index += 1) {
    if (index.toString().includes("3")) {
      createdArray.push("Won't you be my neighbor?" + ",")
    } else if (index.toString().includes("2")) {
      createdArray.push("Boop!" + ",")
    } else if (index.toString().includes("1")) {
      createdArray.push("Beep!" + ",")
    } else if (index === userNumber && index.toString().includes("1")) {
      createdArray.slice(index)        //tried pop() too -why this no work?
      createdArray.push("Beep!")
    } else if (index === userNumber && index.toString().includes("2")) {
      createdArray.slice(index)
      createdArray.push("Boop!")
    } else if (index === userNumber && index.toString().includes("3")) {
      createdArray.slice(index)
      createdArray.push("Won't you be my neighbor?")
    } else {
      createdArray.push(index + ",")
    }
  }
  return createdArray
}

##### _Or a Regular Expression, similar to, but not:_

createdArray.toString().replace(/(\W)(?!.*\W\1)/, "")

_note_ (?!.*\W\1) --was found on StackOverflow as 'last occurence of regex word'... maybe it is looking to see if the thing to replace is just a '\W' and we need to ask is to look at '\W'-and any preceding characters

# Specs/Tests:
 _note: All tests are purely hypothetical at this point_

### Describe: beepBoop() --a function that will loop through an arrays' elements. While doing so, it will change the values for elements that trigger rules: 
 
*  ##### any elements that have a '1' and not a '2' or '3' : [1,10,11,/14-19/] become "Beep!"

* ##### any elements that have a '2' and not a '3': [2,12,/20-22/,/24-29/] become "Boop!"

* ##### any elements that have a '3' and are below 40: [3,13,23,/30-39/] become "Won't you be my neighbor?"

* #### (optional) if the input is not a number, the program will display an error message and prompt the user to input a number"

>Test: "It should return an array with a 0 if the number 0 is input"
Code: beepBoop(0);
Expected Output: 0

>Describe: beepBoop()
Test: "It should return an array of "0, Beep!" if the number 1 is input
Code: beepBoop(1);
Expected Output: [0,"Beep!"]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!" if the number 2 is input
Code: beepBoop(2);
Expected Output: [0,"Beep!","Boop!"]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?" if the number 3 is input
Code: beepBoop(3);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?"]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4" if the number 4 is input
Code: beepBoop(4);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!" if the number 10 is input
Code: beepBoop(10);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!"]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!,Beep!,Boop!" if the number 12 is input
Code: beepBoop(12);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!","Beep!","Boop!"]

>Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!,Beep!,Boop!,Won't you be my neighbor?" if the number 13 is input
Code: beepBoop(13);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?"]

## License [GPL] (https://choosealicense.com/licenses/gpl-3.0/)

_if you do run into any issues or have questions, ideas, or concerns; I would greatly encourage you to send feedback or make a contribution to the code_

## Contact Information

_Contact Giancarlo Vigneri at: bobloblaw.vigneri@gmail.com_