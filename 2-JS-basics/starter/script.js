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

var firstName = 'John';
var age = 19;

if (age < 13){
    console.log(firstName + ' is a boy.')
} else if(age >= 13 && age < 20 ){ // between 13 & 20
    console.log(firstName + ' is a teenager.')
} else if(age >= 20 && age < 30 ){ // between 13 & 20
    console.log(firstName + ' is a young man.')
}
 else {
    console.log(firstName + ' is a man.')
}
