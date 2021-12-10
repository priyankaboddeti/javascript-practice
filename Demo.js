//data types

console.log(a) //undefined
//console.log(b) // canot accesss 'b' before initialization
var a=20; let b=30
var c=a+b
var d="priya", e="nka"
console.log(a)
console.log(b)
console.log(c)

console.log(d+e)
console.log("hello Innovation Labs")

//Scope of datatypes

z="hello"
const x=11  //Global
var a=123  //Global
let y=10
console.log(a)
if(true)
{
     // x=12       //you cannot reassign the value for const var
      z="string"
     a=10  //local var  //you can reassign the value for var
   
    let y=20    //you can reassign the value for let but scope for inside the block
    console.log("inside if "+a)
    console.log("inside if "+y)
    console.log(z)
}
console.log("outside if "+x)
console.log(y)
var car={type:"Volvo"}
console.log(car)
console.log(z)

//operators
//exponentiation
var a=10
var b=2
console.log(a**b)

const x=5;           // Now x is undefined
         // Now x is a Number
x = "John"; 
console.log(x)

//Arrays
const cars = ["Saab", "Volvo", "BMW"]; 
//console.log(cars[0])
for(i=0;i<cars.length;i++)
{
    console.log(cars[i])
}

cars=["a","b","c"]    //we cannot reassign again
console.log(cars[0])

//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("after")

console.log(array);
console.log(array2);