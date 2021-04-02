## Specs

 Describe: beepBoop()
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









Describe: beepBoop()
Test: "It should show div id ='error" if no number is input"
Code: beepBoop("string");
Expected Output: show#error
