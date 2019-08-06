/**************************
* VARIABLE AND DATA TYPES
***************************/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;


// var fullAge = true;
// console.log(fullAge);


// var job;
// console.log(job);


// job = 'Teacher';
// console.log(job);

//VARIABLE NAMING RULES
// VARIABLE NAMES CAN NOT START WITH A NUMBER
// var 3year =3; 
// ^^ NOT VALID - will throw syntax error 
// MUST START WITH: Letter, $, _
// CAN NOT NAME VARIABLE KEYWORDS (FUNCTION, IF, DELETE, Etc)


/**************************
* VARIABLE MUTATION AND TYPE COERCION - JS will automatically automatically convert types for one another
***************************/

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// //Variable Mutation 
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried)

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/**************************
* BASIC OPERATORS
***************************/

// var now, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn)

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // LOGICAL OPERATORS 
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// var markOlder = ageMark < ageJohn;
// console.log(markOlder);


// //typeof operator 
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


/**************************
* OPERATOR PRECEDENCE 
***************************/
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //MULTIPLE OPERATORS
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge)

// //GROUPING
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = ageJohn + ageMark / 2;

// //MULTIPLE ASSIGNMENTS 
// var x, y;
// x = y = (3+5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // ===26
// // ASIGNMENT OPERATOR ASSOCIATIVITY WORKS RIGTH TO LEFT 
// console.log(x, y);

// //MORE OPERATORS

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var massJohn, heightJohn, bmiJohn, massMark, heightMark, bmiMark, markHigherBmi;
// massMark = 78; //kg
// heightMark = 1.69; //meters
// bmiMark = massMark / (heightMark * heightMark);

// massJohn = 92; // kg
// heightJohn = 1.95; // meters
// bmiJohn = massJohn / (heightJohn * heightJohn);


// markHigherBmi = bmiMark > bmiJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
// console.log('Mark BMI: ' + bmiMark, 'John BMI: ' + bmiJohn)




/*****************************
* IF ELSE STATEMENTS
*/


// var firstName = 'john';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :) ');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :) ');
// }




// var massJohn, heightJohn, bmiJohn, massMark, heightMark, bmiMark, markHigherBmi;
// massMark = 78; //kg
// heightMark = 1.69; //meters
// bmiMark = massMark / (heightMark * heightMark);

// massJohn = 92; // kg
// heightJohn = 1.95; // meters
// bmiJohn = massJohn / (heightJohn * heightJohn);

// if (bmiMark>bmiJohn) {
//     console.log('Mark\'s BMI is  higher than John\'s')
// } else {
//     console.log('John\'s BMI is higher than Mark\'s')
// }
// markHigherBmi = bmiMark > bmiJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
// console.log('Mark BMI: ' + bmiMark, 'John BMI: ' + bmiJohn)


/*****************************
* BOOLEAN LOGIC
*/

// var firstName = 'John';
// var age = 19;

// if (age < 13){
//     console.log(firstName + ' is a boy.')
// } else if(age >= 13 && age < 20 ){ // between 13 & 20
//     console.log(firstName + ' is a teenager.')
// } else if(age >= 20 && age < 30 ){ // between 13 & 20
//     console.log(firstName + ' is a young man.')
// }
//  else {
//     console.log(firstName + ' is a man.')
// }



/*****************************
* THE TERNARY OPERATOR AND SWITCH STATEMENTS
*/


// var firstName = 'John';
// var age = 22;


// //TERNARY OPERATOR
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : juice;
// console.log(drink);

// // if (age >= 18) {
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }

// //SWITCH STATEMENT
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer': 
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.')
// }


// age = 56;
// switch(true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.')
//         break;
//     case age>= 20 && age < 30:
//         console.log(firstName + ' is a young man.')
//         break;
//     default:
//         console.log(firstName + 'is a man.')

//     }



/*****************************
* TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
*/

//falsey values: undefined, null, 0, '', NaN
//Truthy values: NOT falsey Values


// var height ;
// height = '23';

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// //Equality Operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var scoreJohn, scoreMike, scoreMary;
scoreJohn = (89 + 120 + 103) / 3;
scoreMike = (111 + 94 + 123) / 3;
scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

/// SOLUTION TO STEPS 1-3
// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike >scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw')
// }

//SOLUTION TO EXTRA STEPS USING LOGICAL OPERATORS 
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn & scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn & scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw')
}

