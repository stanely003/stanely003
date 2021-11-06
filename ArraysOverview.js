//Push
let cart = ["root", "2", "true"];
cart.push(3)
cart.unshift('vengayam')
cart.splice(1, 0, "Thakkali")
console.log(cart);

//Find the elements ....-1 means illadha value ah define pannum..for single elememts use -1 for double use ===
let thedu = ["soru", "paal", "bread"]
let iruka = thedu.find((value) => value === "paal")
console.log(iruka);

//find elements in refference type // use FindIndex in reffference anf indexof (find also) in premitive

let Names = [
    {id:1, Peru:"Stanley", age : 27 },
    {id:2, Peru:"Stan", age :25 },
    {id:3, Peru:"Lee", age : 28 }
];
 let thakkaliTokku = Names.find(function(value) //Find Method
 {
return value.Peru === "Stan";

 })
 console.log(thakkaliTokku);

//Arrow function

let Yaru = [
    {id:1, Peru:"Stanley", age : 27 },
    {id:2, Peru:"Stan", age :25 },
    {id:3, Peru:"Lee", age : 28 }
];
 let thakkaliTokkuu = Yaru.find((value) => value.age === 27);
 console.log(thakkaliTokkuu);

// Find only shows the nearest valse.. but the filter function shows all available values

//removing the element

let again = [1,2,3,5,6,8,9];
again.pop()
again.shift()
again.splice(4, 1, 12)
console.log(again);

//Emptying the Array

let agains = [1,2,3,5,6,8,9];
agains.length = 0; //or agains = [];
console.log(agains);

//Sorting the elements

let Sortings = [2, 1, 3, 5, 9,7];
//Sortings.sort()
//Sortings.reverse()
Sortings.sort(function(a, b){
    return b - a ; //reverse  a - b 
})
console.log(Sortings);

//in Refference method

let Arrange = 
[
    {id: 1, name : "Stanley", age: 26},
    {id: 2, name : "David", age: 25},
    {id: 3, name : "Lee", age: 28}
];

let inRef = Arrange.sort(function(a,b)
{
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0
});
console.log(inRef);

//Combining the arrays 

let Seru = [1,3,4,5];
let seru2 = [2,4,5,7];
let rendum = Seru.concat(seru2)
console.log(rendum);

let soru = [{fast: "idly"}];
let soru2 = [3,4,2,5];
soru[0].fast = "maggi";  // update the elememts
let combination = [...soru, ...soru2]
console.log(combination);

//extract the elements

let piri = [12, 43, 54, 65, 43]
let pirii = piri.slice(2, 4)
console.log(pirii);

//for in

let thedus = ["honour", "obidience", "guide"]
for(let ins of thedus)
console.log(ins)

//for in
let thenga = ["venna", "dosa", "manga"];
for(let lee in thenga )
console.log(lee, thenga[lee]);

//for each loop

let venna = ["root", "thala", "23B"];
venna.forEach(function(vennai, vennaiIndex){
    console.log(vennaiIndex, vennai);
});

