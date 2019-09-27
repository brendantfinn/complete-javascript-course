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

//////////// /// sept 26 try again

// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92; //kg
// let heightJohn = 1.95; // meters

// let markBMI = massMark / (heightMark * heightMark);
// let johnBMI = massJohn / (heightJohn * heightJohn);

// console.log(`MARK BMI: ${markBMI}`)
// console.log(`JOHN BMI: ${johnBMI}`)

// let markHigherBMI = markBMI > johnBMI;
 
// if(markBMI > johnBMI){
//     console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI)
// } else {
//     console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI)
// }


///old stuff



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

// var scoreJohn, scoreMike, scoreMary;
// scoreJohn = (89 + 120 + 103) / 3;
// scoreMike = (111 + 94 + 123) / 3;
// scoreMary = (97 + 134 + 105) / 3;
// // console.log(scoreJohn, scoreMike, scoreMary);

// /// SOLUTION TO STEPS 1-3
// // if (scoreJohn > scoreMike) {
// //     console.log('John\'s team wins with ' + scoreJohn + ' points');
// // } else if (scoreMike >scoreJohn) {
// //     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// // } else {
// //     console.log('There is a draw')
// // }

// //SOLUTION TO EXTRA STEPS USING LOGICAL OPERATORS 
// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn & scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn & scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw')
// }



/*****************************
 * Function Statements and Expressions //Expressions produce an immediate value /// statements dont return an result immediately  
 */

// var whatDoYouDo = function(job, firstName) {
// switch(job) {
//     case 'teacher':
//         return firstName + ' teaches kids how to code';
//     case 'driver':
//         return firstName + ' drives an Uber in Libson';
//     case 'designer':
//         return firstName + ' designs beautiful websites';
//     default: 
//         return firstName + ' does somethign else';
//     }   
// }

// console.log(whatDoYouDo ('teacher', 'John'));
// console.log(whatDoYouDo ('designer', 'Jane'));
// console.log(whatDoYouDo ('retired', 'Mark'));


/*****************************
 * ARRAYS
 */

 //Initilized new array
//  var names = ['John', 'Mark', 'Jane']
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[2]);
//  console.log(names.length);

//  // Mutated Array Data
//  names[1] = 'Ben';
//  names[names.length] = 'Mary';
//  console.log(names);

//  //Different Data Types
//  var john = ['John', 'Smith', 1990, 'teacher', false];

//  john.push('blue'); // adds element to the end of the array
//  john.unshift('Mr.'); // Adds element to the begining of the array 
// console.log(john);

// john.pop()
// john.shift()
// console.log(john);

// //indexOf basically searches the array for element to return to you what spot its in
// console.log(john.indexOf(23)); // -1 means element is not in array 


// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// function tipCalculator(bill){
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];                 
//  console.log(tips, finalValues);



/*****************************
* OBJECT AND PROPERTIES 
*/

//CURLY BRACES === {} OBJECT LITERALS
// var john = {
// //  key: 'Value' \\\\\KEY VALUE PAIRS
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName + ' ' + john.lastName); // Access values via dot notation or bracket notation
// console.log(john['lastName']); // or Bracket notation
// var x = 'birthYear';
// console.log(john[x]); // only seems to work with braket notation

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);


// //NEW OBJECT SYNTAX
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);






/*****************************
* OBJECT AND PROPERTIES 
*/
// var curentYear = 2019;
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         this.age = curentYear - this.birthYear; // this. means THIS CURRENT OBJECT 
//     }
// };

// john.calcAge();
// console.log(john);



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
[X]1. For each of them, create an object with properties for their full name, mass, and height
[x]2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
[ ]3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var mark, john;


// john = {
//     fullName: 'John Smith',
//     mass:110, //kg
//     height: 1.95, //meters
//     bmiCalc: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// }

// mark = {
//     fullName: 'Mark Smith',
//     mass: 78, //kg
//     height: 1.69, //meters
//     bmiCalc: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// }




// if (john.bmiCalc() > mark.bmiCalc()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
// } else if((mark.bmi > john.bmi)) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
// } else {
//     console.log('They have the same BMI')
// };




/*****************************
* LOOPS AND ITERATION
*/

// for (var i = 1; i < 20; i+= 2) {
//     console.log(i);
// }

// // i = 0, 0 < 10 true, log i to console, i++
// // i =1, 1 < 10 true, log i to console, i++
// // ..happens a few more times
// // i = 9, 9 < 10 true, log i to console, i++
// // i =10, 10 < 10 FALSE, EXIT THE LOOP! 


// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++)
// console.log(john[i]);

// //While Loop
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// //continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i =0; i<john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// //looping backwards
// for (var i = john.length -1; i >= 0; i--){
// console.log(john[i]);
// }
    



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for(var i = 0; i < this.bills.length; i++){
//             //Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];

//             if  (bill< 50){
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200){
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
//             //add results to the corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// };
// john.calcTips();
// console.log(john);





/***************************  AS OF 08/26 RESTARTED AFTER CHALALNGE 1 ******************** **/
/***************************  AS OF 08/26 RESTARTED AFTER CHALALNGE 1 ******************** **/
/***************************  AS OF 08/26 RESTARTED AFTER CHALALNGE 1 ******************** **/
/***************************  AS OF 08/26 RESTARTED AFTER CHALALNGE 1 ******************** **/
// // // // 15. Boolean Logic
/***************
 * Boolean Logic
 */


//  let firstName = 'John';
//  let age = 16;

//  if(age < 13){
//     console.log(` ${firstName} is a boy.`);
//  } else if(age >= 13 && age < 20){
//     console.log(`${firstName} is a teenager`);
//  } else {
//     console.log(`${firstName} is a man`);
//  }


// // // // 16. The Ternary Operator and Switch Statements
/***************
 * The Ternary Operator and Switch Statements
 */

 let firstName = 'John';
 let age = 21;

 age >= 18 ? console.log(`${firstName} drinks beer.`) : console.log(`${firstName} drinks juice`);

 let drink = age >= 18 ? 'beer' : 'juice'
 console.log(drink)

//  if (age >= 18) {
//      let drink = 'beer';
//  } else {
//      let drink = 'juice';
//  }

// Switch Statement 
let job = 'designer';
switch(job){
    case 'teacher':
        console.log(`${firstName} teaches kids how to code.`);
        break;
    case 'driver':
        console.log(`${firstName} drives around libson.`); 
        break;
    case 'designer':
        console.log(`${firstName} designs beautiful websites.`);
        break;
    default:
        console.log(`${firstName} does something else.`);
    }


    age = 25;
    switch(true){
        case age < 13:
            console.log(` ${firstName} is a boy.`);
            break;
        case age >= 13 && age < 20:
            console.log(` ${firstName} is a teenager.`);
            break;
        case age >= 20 && age < 30:
            console.log(` ${firstName} is a young man.`);
            break;
        default:
            console.log(`${firstName} is a man`)
    }


