//if else condition
let isRaining = true;
let isCloudy = false;
if(isRaining || isCloudy){
    console.log("The weather is normal")
}else{
    console.log("the weather is raining")

}
//if the hour is betwen 12 am to 1 pm ->Good Morning
//if the hour is betwen 1 am to 5 pm ->Good Afternoon
//if the hour is betwen 5 am to 12 am ->Good Evening

//let hours = new Date(); //different type of variable
//let hour = hours.getHours(); //different type of variable
//let hour = 18; //different type of variable
let hour = new Date().getHours();
if(hour >= 0 && hour <= 13)
{
console.log("Greetings : Good Morning")
}
else if (hour >=13 && hour <= 17)
{
    console.log("Greetings: Good Afternoon");
}
else
{
console.log("Greetings : Good Evening");
}
//Switch Case
 // Exercise 1
let grade = "C" ;
switch(grade){
    case "A":    //use collanc : and "" while declaring case
        console.log("Super Grade");
        break;
        case "A":
            console.log("Excellent");
            break;
            case "B":
                case "C":
                console.log("Average");
                break;
                default :             
                console.log("Just pass");
}
// Exercise 2
let savingAmount = "15000";
switch(true){
case (savingAmount >= 5000 && savingAmount <= 10000) :
    console.log("Buy Android Phone");
    break;
    case (savingAmount >= 10001 && savingAmount <= 30000) :
        console.log("Buy Iphone");
        break;
        case (savingAmount >= 30001 && savingAmount <= 60000) :
            console.log("Buy Laptop mobile");
            break;
            default:
                console.log("You cant afford mobile now")
                
                
}
// Exercise 3
let savings = 60000;
switch(true)
{
    case (savings >= 13000 && savings <= 17000):
    console.log("Buy an Android Phone")
break;
case (savings >= 17000 && savings <= 45000):
    console.log("buy an iphone");
    break;
    case (savings >= 45000 && savings <= 60000):
    console.log("buy an laptop")
    break;
    default:
        console.log("You cant afford phone");
}
// Exercise 4
let BuyMobile = "14000";
switch(true){
    case(BuyMobile >= 5000 && BuyMobile <= 10000): //5000 mela 10000 ku ulla
    console.log("Buy an Basic Phone")
    break;
    case (BuyMobile >= 10000 && BuyMobile <= 60000) : //above 10k and 60000k ulla
    console.log("buy an Android");
    break;
    case (BuyMobile >= 60000) :  //60000 mela
    console.log("Buy an iphone")
    break;
    default :
    console.log("You cant afford mobile now")
}