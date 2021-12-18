//              MRF methods H.W
// TO FILTER THE COUNTRIES IN ASIA
// coutries with population less than 2laks
// coutries with  total population
// Print the following details name, capital, flag using forEach function
// Print the country which uses US Dollars as currency.

var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
 


request.send();

request.onload=function(){
var data=JSON.parse(request.response);
let result = data.filter((element)=>element.region=="Asia"); // countries in Asia
let result1 = data.filter((element)=>element.population<200000); // population below 2lakhs
let result2 = data.reduce((acc,element)=>acc+element.population,0); // Total population

let result3 = data.filter((element)=>{
    for(let i in element.currencies){
         if(element.currencies[i].code==="USD");
        
}

});
data.forEach((element)=>{console.log(`${element.name},${element.capital},${element.flag}`)})//name,cap,flag using foreach
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
}