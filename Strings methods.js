var a="webdevelo webpment";
console.log(a.search("web",3));

var a="webdevelo webpment";
console.log(a.indexOf("web",3));

var a="web development"
let pattern="/web/";
console.log(a.indexOf(pattern))
//search RE
var a="web development";
var pattern=/web/g
console.log(a.search(pattern))
//slice
var arr = [0, 1, 2, 3, 4, 5]; 
var newArr = arr.slice(0, 2);
console.log(newArr);