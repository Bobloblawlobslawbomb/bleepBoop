# _bleepBoop or How I learned to stop worrying and love the Dom_

#### _this program simulates true robotic communication_

#### By _**Giancarlo Vigneri**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Arrays and Loops_
* _TDD_
* _Reg Ex_


## Description
 _This program presents the user with a statement: "" and provides a field to enter a number. Once the user has entered the number and pressed the button labeled: "" The page/program will display a string that follows the set of rules: "" Purporting to allow the user to speak like a robot (it does not in fact provide this functionality)_

## Setup/Installation Requirements

*_This is the place_
*_where one would_
*_list setup instructions_
*_in a simple and easy_
*_to understand format_

_{Leave nothing to chance. It should be easy for anyone to run your app. All the things necessary to make it happen, including otherr software or hardware setups needed. A good idea may be to delete the folder from your local machine and re-clone the project from Github and writting down all the necessary steps to get the application working again}_

## Known Bugs

* _Any known issues_
* _should go here_



## License [GPL] (https://choosealicense.com/licenses/gpl-3.0/)

_if you do run into any issues or have questions, ideas, or concerns; I would greatly encourage you to send feedback or make a contribution to the code_

## Contact Information

_Contact Giancarlo Vigneri at: bobloblaw.vigneri@gmail.com_

# Specs/Tests:
 _note: All tests are purely hypothetical at this point_

 Describe: beepBoop() --a function that will loop through an arrays' elements. While doing so, it will change the values for elements that trigger rules: 
 
*  ### any elements that have a '1' and not a '2' or '3' : [1,10,11,/14-19/] become "Beep!"

* ### any elements that have a '2' and not a '3': [2,12,/20-22/,/24-29/] become "Boop!"

* ### any elements that have a '3' and are below 40: [3,13,23,/30-39/] become "Won't you be my neighbor?"

* ### (optional) any elements past '40' become "ERROR: I CANNOT COMPUTE"

 Test: "It should return an array with a 0 if the number 0 is input"
 Code: beepBoop(0);
 Expected Output: 0

Describe: beepBoop()
Test: "It should return an array of "0, Beep!" if the number 1 is input
Code: beepBoop(1);
Expected Output: [0,"Beep!"]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!" if the number 2 is input
Code: beepBoop(2);
Expected Output: [0,"Beep!","Boop!"]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?" if the number 3 is input
Code: beepBoop(3);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?"]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4" if the number 4 is input
Code: beepBoop(4);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!" if the number 10 is input
Code: beepBoop(10);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!"]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!,Beep!,Boop!" if the number 12 is input
Code: beepBoop(12);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!","Beep!","Boop!"]

Describe: beepBoop()
Test: "It should return an array of "0,Beep!,Boop!,Won't you be my neighbor?,4,...,9,Beep!,Beep!,Boop!,Won't you be my neighbor?" if the number 13 is input
Code: beepBoop(13);
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,...,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?"]

