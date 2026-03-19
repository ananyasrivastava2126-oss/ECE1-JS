// script.js

// Basic console logs
console.log("JavaScript is working");

var num = 10;
console.log(num);
console.log(typeof(num));

num = false;
console.log(num);
console.log(typeof(num));

num = "Hello";
console.log(num);
console.log(typeof(num));

num = null;
console.log(num);
console.log(typeof(num));

num = undefined;
console.log(num);
console.log(typeof(num));
// ================= LOOPS =================

// 1. FOR LOOP
console.log("For Loop:");
for(let count = 0; count < 5; count++){
    console.log("Count: " + count);
}

// 2. WHILE LOOP
console.log("While Loop:");
let i = 0;
while(i < 5){
    console.log("Value: " + i);
    i++;
}

// 3. DO-WHILE LOOP
console.log("Do While Loop:");
let j = 0;
do {
    console.log("Value: " + j);
    j++;
} while(j < 5);
// 4. FOR...IN LOOP
const person = {
    fname: "Ajay",
    lname: "Singh",
    age: 25
};

console.log("For...in Loop:");
for(let key in person){
    console.log(key + " : " + person[key]);
}
// ================= CONDITIONAL STATEMENTS =================

// 1. IF STATEMENT
var age = 20;
if(age > 18){
    console.log("You are eligible to vote");
}

// 2. IF-ELSE
if(age > 18){
    console.log("You are Eligible to vote");
} else {
    console.log("You are a Minor");
}

// 3. IF-ELSE IF-ELSE
var marks = 75;
if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 75){
    console.log("Grade B");
} else if(marks >= 50){
    console.log("Grade C");
} else { console.log("Fail");
}

// 4. SWITCH CASE
var grade = "A";

switch(grade){
    case 'A':
        console.log("Good job");
        break;

    case 'B':
        console.log("Pretty Good");
        break;

    case 'C':
        console.log("Not so good");
        break;

    case 'D':
        console.log("Passed");
        break;

    case 'E':
        console.log("Fail");
        break;
default:
        console.log("Invalid Grade");
}
