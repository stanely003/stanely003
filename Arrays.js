//Adding an array element
let Fruit = ["apple", "orange", "Pinapille"];
Fruit.push("Vennila") //dont use = while assign array
Fruit.unshift("Mango") // asign like a function arguments
Fruit.splice(3, 0, "Banana")

console.log(Fruit)

// Finding the array(Primitive)
 let Friends = ["anbu", "sadam", "vicky"];

 //console.log(Friends.indexOf("sadam"))
 //console.log(Friends.indexOf("sadam") !== -1)
 
 console.log(Friends.includes("anbu"))

 // Finding the array(Refference) - Print only one value and the (filter)is print more values
 //shows object value while filter function shows array value
 
 /*let Enimies= [
    { name : "Sujitha", age: 47 , role : "Dividing the peoples in the name of religion" },
    { name : "Eunice", age: 21 , role : "Mothers Sombu thukki" },
    { name : "Madhu", age: 25 , role : "MotherFucker" }
 ];*/
  
 let Enimies = [
     {   name : "sujitha", age :47, thevidiaRole : "Dividing the peoples in the name of religion"},
         {name : "nelson", age :51, thevidiaRole : "Wife Sombu thukki"},
         {name : "Eunice", age :21, thevidiaRole : "Allakai"
     }
 ];
/*let role = Enimies.find(function(THUNDIVIDUVADHU){
 return THUNDIVIDUVADHU.age === 47
})
console.log(role)*/
//Arrow Function
let role = Enimies.find((THUNDIVIDUVADHU) => THUNDIVIDUVADHU.age == 21 ) //Arrow operator
console.log(role)
let roles = Enimies.findIndex((THUNDIVIDUVADHU) => THUNDIVIDUVADHU.age ===21 )
console.log(roles)

//Removing the elememts
let coin = ["one", "two", "three", "four", "six"];
coin.pop()
coin.shift()
coin.splice(1, 0, "five")
coin.splice(0, 2) //1=start index, which index you want to delete
console.log(coin)
//Emptying the array
coin = [];
//coin.length = 0;
console.log(coin)

//combining the arrays
let cart1 = ["idly", 'dosai', "poori"];
let cart2 = ["sambar", "chutney"];
let combine = cart1.concat(cart2);
//let combine = [...cart1, 45, ...cart2]; //Sepreate operator
console.log(combine)

//extract the arrays

let extract = combine.slice(1,3); //start index and end before index
console.log(extract)

//For of loop

let dailyRoutine = ["eat", "sleep", "conquir"];
for(let routine of dailyRoutine){
    console.log(routine); //call instance
}
 //for in loop
  for(let routine in dailyRoutine){
      console.log(routine, dailyRoutine[routine])
    
  }
 //For each loop
 dailyRoutine.forEach(function(routines, routinesIndex) //index caller 123
 {
     console.log(routinesIndex, routines)
 });

 //Arrow function
 dailyRoutine.forEach(routines => console.log( routines))


 //Reduce method in JS 
 //in premitive type
  let rollNo = [12, 23, 45, 55, 34];
 let addOn = rollNo.reduce(function(previousValue, currentvalue){
      return previousValue + currentvalue
  });
console.log("Total " , addOn);

//In refference method.....Accumulator value is must. it stores some default value. to print at first
let food = [
    {id:1 , product : "Idly", price : 50},
    {id:2 , product : "dosai", price : 70},
    {id:3 , product : "poori", price : 40},
]
let totalPrice = food.reduce(function(first, currentVal){
   return first + currentVal.price;
   }, 0);
console.log(totalPrice);
//arrow function
//let totalPrice = food.reduce((first, currentVal) => first + currentVal.price, 0);
//console.log("Morning Tiffen selavu" , totalPrice);

