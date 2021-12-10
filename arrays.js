const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  console.log(cars[0]); //Acessing the elements
  console.log(cars);
  cars.push("hello"); //adding an element //push
  cars[4]="Hai";      //adding an element //index
  cars[3]="world";    //changing an array element
  console.log(cars);

  console.log(cars.length); //length property

  //Methods
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fruitssort=fruits.sort(); //Sort Method
        console.log("Sort Method : "+fruitssort);
        console.log(fruits.toString());  //converts array to string 
        fruits.push("Dates");  //push
        console.log(fruits);
        fruits.join("*");  //join
        console.log(fruits);
        fruits.pop("Orange");
        console.log(fruits);
        fruits.shift(); //shift
        console.log(fruits);
        fruits.unshift("Apple"); //unshift
        console.log(fruits);
        console.log(fruits.slice(3)); //extract the part in array
        console.log(fruits.slice(1,4));
        console.log(fruits.concat(cars));   //concat

        const points = [40, 100, 1, 5, 25, 10];
        console.log(points.sort());
        console.log(points[0]);  //lowest number in array
        console.log(points.length);
        console.log(points[len]);
        console.log(points.sort(function(a, b){return a-b}));  //Ascending
        console.log(points.sort(function(a, b){return b-a}));  //Descending

//remove duplicates in Array
const box=["priya","manu","priya","sai","sai","manu","sri","ramya","uma","uma"]
let unique=[...new Set(box)];
console.log(unique);
