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

function openURL(id) {
  switch (id) {
    case 'google':
      google = confirm('want to open Google!');
      if(google == true) {
        alert('going..');
        window.open('https://www.google.co.in/');
      } else {
        alert('aborting!');
      }
      break;

    case 'fb':
      fb = confirm('want to open facebook!');
      if(fb == true) {
        alert('going');
        window.open('')
      }
      break;

    case 'youtube':
      alert('youtube');
      break;

    case 'imdb':
      alert('imdb');
      break;

    default:

  }
}

function totalNum() {
  var total = document.getElementById('totalNum').value;
  var count = 0;
  console.log(parseFloat(total));
  for(i=1; i<=total; i++) {
    var i;
    var numbers = prompt('enter value', '');
    //document.getElementById('values').innerHTML = "You entered values: " + numbers;
    count = parseFloat(numbers) + count;
  }
  document.getElementById('totalNum').value = '';
  document.getElementById('result').innerHTML = 'Result = ' + count;
}

function karState() {
  var state = [['Bagalkot', 6575],
  ['Bengaluru Urban', 2190],
  ['Bengaluru Rural', 2259],
  ['Belagavi', 13415],
  ['Bellary', 8450],
  ['Bidar', 5448],
  ['Vijayapura', 10494],
  ['Chamarajanagar', 5101],
  ['Chikballapur', 4524],
  ['Chikkamagaluru', 7201],
  ['Chitradurga', 8440],
  ['Dakshina Kannada', 4560],
  ['Davanagere', 5924],
  ['Dharwad', 4260],
  ['Gadag', 4656],
  ['Kalaburagi', 10951],
  ['Hassan', 6814],
  ['Haveri', 4823],
  ['Kodagu', 4102],
  ['Kolar', 3969],
  ['Koppal', 7189],
  ['Mandya', 4961],
  ['Mysuru', 6854],
  ['Raichur', 6827],
  ['Ramanagara', 3556],
  ['Shivamogga', 8477],
  ['Tumakuru', 10597],
  ['Udupi', 3880],
  ['Uttara Kannada', 10291],
  ['Yadgir', 5273]];

  for(var i = 0; i < state.length; i++) {
      var states = state[i];
      for(var j = 0; j < states.length; j++) {
          document.write(states[j] + '<br>');
      }
  }
}

function calcCost() {
  alert('Cost calculating.. wait a moment!');
  var width = document.getElementById('roomWidth').value;
  var length = document.getElementById('roomLength').value;
  var cost = document.getElementById('cost').value;
  var sqrFt = width * length;
  var extra = sqrFt * 1/4;
  var price = (sqrFt + extra) * cost;
  console.log('total square feet= <br>'+ sqrFt);
  console.log('extraa==== '+ extra)
  console.log('total price ==== ' + price);
  document.getElementById('totalCost').innerHTML = price;
}
