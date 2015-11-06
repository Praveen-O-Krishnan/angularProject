// jshint devel:true
console.log('\'Allo \'Allo!');

function person(product, quantity) {
  this.product = product;
  this.quantity = quantity;
  this.prodLaptopLeft = leftLaptop;
}

function leftLaptop() {
  var numLft = 100 - this.quantity;
  return numLft;
}
var praveen = new person("laptop", "10");
var nisha = new person("laptop", "50");

console.log(praveen.product);
console.log(nisha.quantity);
console.log(praveen.quantity);
console.log(praveen.prodLaptopLeft());
console.log(nisha.prodLaptopLeft());

//Object Initializers

var bucky = {name: "bucky roberts", age: "24"};
var taylor = {name: "taylor swift", age: "20"};

console.log("full name of bucky: " + bucky.name);
console.log("full name of taylor: " + taylor.name);

// arrays
var girls = new Array("nisha", "subhana", "bhavana");
var boys = new Array("praveen", "prajeesh", "ranjith");
var people = girls.concat(boys);
console.log(people);

var movies = ['avatar','transformer','black'];
var string = movies.join(" - ");
movies.push("titanic");
console.log(string);
console.log(movies);
