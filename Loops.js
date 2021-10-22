//For Loop
for(let j = 1; j < 10; j++){
    if (j % 2 !== 0)
    {
        console.log("Show " + j);
    }  
}
for(ii = 2; ii <=10; ii++)
{
    if(ii % 2 == 0)
    {
        console.log(ii)
    }
}
for(i = 12; i >= 1; i--)
{
    if(i % 2 == 0)
    {
        console.log(i)
    }
}
//while

let s = 2;
while(s <= 22){
    if(s % 2 == 0){
        console.log( "Show " + s)
    }
  s++ ;

}
//For In Loop  // = , are main while declaring objects
let person = {
    name: "Stanley",
    age : 22,
    sex: "male",
};
for (let Key in person) //in keyword
console.log("details :" + person[Key])

//For of loop // befalf of the variable we apply new keyword in side for loop

let color = ['Red', 'Blue', 'Green'];
for(let venna of color)
{
    console.log("Niram :" + venna)
}