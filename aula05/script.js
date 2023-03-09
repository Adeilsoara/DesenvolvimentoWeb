/* Laços de decisão */
var num = 2;
if (num % 2 == 0) {
    document.write(`${num} is a Even number`)
} else {
    document.write(`${num} is a Odd number`)
}


var num = 5;
var comeco = 1;
var fim = 7;
if (num >= comeco && num <= fim) {
  document.write(`${num} is between the range ${comeco} and ${fim}`);
} else {
  document.write(`${num} is outside the range ${comeco} and ${fim}`);
} 

var year =2020
if(((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
    console.log(`Year ${year} is a leap year`);
}
else{
    console.log(`Year ${year} is not a leap year`);
} 

