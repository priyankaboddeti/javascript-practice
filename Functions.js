const x = function (a, b) {return a * b};
let z = x(4, 3);
console.log(z);

const y=new Function("a","b","return a*b");
let w=y(3,4);
console.log(w);

//

var myObject = {
    firstName:"John",
    lastName: "Doe",
   
  }
  var fullName= function(a) {
    return a;
  }
  var res=fullName;
  console.log(res("pia"));
//we can give functions as a object methods
  const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(myObject.fullName());  

  //call()
  const persons={
  fullname:function(name,desig)
  {
    return this.a+","+name+","+desig;
  }
}
const person1=
{
  a:3215
}
const person2=
{
  a:5376
}
console.log(persons.fullname.apply(person2,["priya","Team Leader"]));

//callback Functions

function greet(name,call) {
    console.log('Hi' + ' ' + name);
    call();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//asynchronous callback functions
function add(n1,n2,call)
{
    let sum=n1+n2;
    call(sum);
}
