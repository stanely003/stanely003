//joining the Elements
let family = ["nirmala", "robert", "jessy"]
let members = family.join("'d ")
console.log(members)
////Split the Arrays
let fullName = "Robert Ivaraja";
let piri = fullName.split(" ")
console.log("my first name is  "+ piri[0] +"")
console.log("my last name is  "+ piri[1] +"")

//method 2
let fullNames = "Robert Ivaraja";
let userName = fullNames.split(" ");
let firstNames = userName[0];
let lastNames = userName[1];
console.log("my first name is "+ firstNames +" and my last name is "+ lastNames +"");

//Split and join the arrays
let ThingsToDo = "Eat well and sleep 8 hours daily" .toUpperCase() ;
let sujithavelai = ThingsToDo.split(" ");
let oruginaithal = sujithavelai.join ("_");
console.log(oruginaithal)

//Sorting the Arrays

let vayasu = ["23", " 25", "27"];
vayasu.sort()
console.log(vayasu);
let arrange = vayasu.sort(( a, b) => b-a );  //reverse
console.log(arrange);

//Sorting Arrays Refference type
let students = [
{ id : 1 , name : "stanley" , age: 27},
{ id : 2 , name : "anbu" , age: 29},
{ id : 3 , name : "sadam" , age: 28},

];
students.sort(function (a, b){
   if (a.name < b.name) return -1 ;
   if (a.name > b.name) return 1 ;
   return 0;
});
console.log(students)

//method 2
let cse = [
    { id : 1 , Per : "stanley" , age: 27},
    { id : 2 , Per : "anbu" , age: 29},
    { id : 3 , Per : "sadam" , age: 28},
    
    ];
    cse.sort(function (a, b){
    PerA = a.age;
    PerB = b.age;
    
    if(PerA < PerB)
    return -1 ;
    if(PerA > PerB)
    return 1 ;
    return 0;
    });
    console.log(cse);

    //Every and Some condition in js - Result will be true and false


    const favouriteNo = [12, 5, 8];
    let Dhoni = favouriteNo.every(function (value, index, array) {
          return value >= 5;
       }); 
console.log(Dhoni);

//odd or even function check using every and some function - Result will be true and false

let Nos = [12, 23, 35, 44, 56]
let isEven = Nos.every(function(index){
   return index % 2 == 0;
})
console.log(isEven);

//some condition
let Nose = [12, 23, 35, 44, 56]
let isodd = Nose.some(function(index){
   return index % 2 == 1;
})
console.log(isodd);

// In Refference type  - Result will be true and false

  let trees = [
     { id : 2, company : "Nokia", Available : true }, //Dont forgot to mention String in Double Quotes
     {id : 3, company : "Samsung", Available : true },
     {id : 4, company : "Apple", Available : false },
];

let IsAvailable = trees.every((value) => value.Available == true);

let IsDelivarable = trees.some(function(value)
{
   return value.Available == true;
});
console.log(IsAvailable);
console.log(IsDelivarable);

//Filter Function
let check = [1,3,5,6,7,8,4];
let evenCheck = check.filter(function(even){
 return even % 2 == 0;
});

//let oddCheck = check.filter(function(odd){
//return odd % 2 == 1;
// });
  let oddCheck = check.filter((odd) => {
     return odd % 2 == 1;
  });
  console.log(evenCheck);
  console.log(oddCheck);

  //Filter Function in refference type
let mobiles = [
{id : 1, model : "Nokia", price : 10500}, //use colon while assinging the elements and " "for string
{id : 2, model :"samsung", price: 20500},
{id : 3, model : "Apple", price: 70500}
];
 //let Afforadable_Mobile = mobiles.filter(function(compare){
 //   return compare.price <= 25000;
//});
let Afforadable_Mobile = mobiles.filter((compare) => {
   return compare.price <= 25000;
});
console.log(Afforadable_Mobile);

//Mapping Function  - changing the each element value. (own Behaviour) .used to transform the value

const oddNo = [1, 3, 5 , 7];
let result = oddNo.map(function (value) {
      return value * 2;
   }); //use passed argument instead of using declared variable while using condition
console.log(result);
 
//In refference type mapping function

let speaker =[
   {id: 1 , model: "Zebronics", price: 350},
   {id: 2 , model: "sony", price: 750},
   {id: 3 , model: "BoaT", price: 1350}
];
//let Lowest = speaker.map((value) => value.price * 1750);
//console.log(Lowest);
 //join the values

 let Joining = speaker.map(function(val) { 
    let full = [val.model , val.price].join(" ");   //while joining  use array for multile leads.
let Final = {id : val.id , Model : full}; //pass agrguments first while using . function
return Final ;
 });
console.log(Joining);

//Chaining Methods Try with all keywords.

/*let dress = [
   {id: 1, cloths: "Shirt" , price: 500},
   {id: 2, cloths: "pant" , price: 700},
   {id: 3, cloths: "shorts" , price: 250},
]
let lowestPrice = dress.sort(function (a,b)
{
   return a.price - b.price; //Accending in nos
   
   return b.price - a.price;  // Decending in nos
   
});*/
let dress = [
   {id: 1, cloths: "Shirt" , price: 500},
   {id: 2, cloths: "pant" , price: 700},
   {id: 3, cloths: "shorts" , price: 250},
]//sort by lowest price
let LowestPrice = dress.sort(function(a, b)
{
  return a.price - b.price;
})
.sort(function(a,b)
{
  if( a.cloths < b.cloths) 
   return -1;
  if( b.cloths >a.cloths)
   return 1;
})
.filter(function(val){
   return    val.price <= 500;

})
.map(function(val)
{
     return val.cloths +" "+ val.price; //for concadinate use + symbol before ""
});
console.log(LowestPrice)

//Sort it using lowest price
//sort it by title assecding
//filter products lessthan 2000
//map it like this company - puma

let shoe = [
   {id:1, brand : "Nike", price : 2500 },
   {id:2, brand : "Puma", price : 2000 },
   {id:3, brand : "Adidas", price : 1500 },
]
let finals = shoe.sort(function(a,b){
   return a.price - b.price; //Assending
   //return b.price - a.price   //Decending
});
let byTitle = finals.sort(function(a,b){
   if (a.brand < b.brand)  //Use if condition
   return -1;
   if(b.brand > a.brand)
   return 1;
});
let byfilter = byTitle.filter(function(value){
      return  value.price <= 2000
});
let mapThis = byfilter.map(function(value)
{
   return value.brand +"  "+ value.price;  //dont use() 
});
console.log(mapThis)


