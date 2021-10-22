//Arithmetic operator
let a = 10,b = 12;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(++a)
console.log(--a)
//Assignment operator
let x = 10 ; 
x = x + 1 ;
console.log(x)
let y = 12;
y *= 7
console.log(y)
//Ternary operator
let age = 15
let type = age > 18 ? "Adult" : "Child";
console.log(type)
//comparison operator
let d = 4;
console.log(d > 3)
console.log(d >= 5)
console.log(d < 4)
console.log(d <= 3)
console.log('alan' > 'stan') //String Comparison
console.log('1' < 5) //mixed data type
//Equally operators
console.log(1===1)
console.log(1==1)
console.log('1'===1) //mixed data type
console.log('1'==1)
//Logical operators
let Income = "True";
let Cibilscore = "True";
let eligiblePerson = Income && Cibilscore;
console.log("Status : " +eligiblePerson)
let Incomes = "false";
let Cibilscores = "false";
let eligiblePersons = Incomes || Cibilscores
console.log("Loan Status : " +eligiblePersons)
