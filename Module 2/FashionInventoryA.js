/*
You have a fashion catalog, an inventory of items from various high-fashion designers. 
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory ;= [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...

// ^ this implies that the return value is a string, with each new line separated by a newline symbol ('\n')

Write your own unit tests.
*/

function arrayToString(currentInventory){
  var string = "";
  for(var i = 0; i < currentInventory.length; i++) {
    var name = currentInventory[i].name;
    var shoes = currentInventory[i].shoes;
    for(var j = 0; j < shoes.length; j++) {
     var shoesName = currentInventory[i].shoes[j].name; 
     var shoesPrice = currentInventory[i].shoes[j].price; 
     string += (name + ", " + shoesName + ", " + shoesPrice + "\n");
    }
  }
  return string;
}

function checkArraysIfEqual(actual, expected) {
  if(actual.length !== expected.length) {
      return false;
    } else {
      for(var i = 0; i < actual.length; i++) {
        if(actual[i] !== expected[i]) {
          return false;
        }
      }
      return true;
    }
}

function assertArraysEqual(actual, expected, testName) {
    var areEqualArrays = checkArraysIfEqual(actual, expected);
    if(areEqualArrays) {
       console.log(testName + " passed");
    } else {
      console.log("FAILED ["+ testName +"] Expected " + '"' + expected + '"' + ", but got " + '"' + actual + '"' );
  }
}

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
var output = arrayToString(currentInventory).split("\n");

var actual = output.splice(0, output.length - 1);
var expected = ["Brunello Cucinelli, tasselled black low-top lace-up, 1000", "Brunello Cucinelli, tasselled green low-top lace-up, 1100", "Brunello Cucinelli, plain beige suede moccasin, 950", "Brunello Cucinelli, plain olive suede moccasin, 1050", "Gucci, red leather laced sneakers, 800", "Gucci, black leather laced sneakers, 900"];
assertArraysEqual(actual, expected, "Fashion Inventory A");

// after checking the solution, I was able to do the following on my own and enhancing my understanding for the Array.map(callbackfn) function

function renderShoesForDesigner(name, shoes) {
  shoes.map(function(shoe) {
      return [name, shoe.name, shoe.price].join(", ");
  });
}

function renderGoodsStringForDesigner(designerObject){
  return renderShoesForDesigner(designerObject.name, designerObject.shoes).join('\n');
}

function renderInventory(currentInventory) {
  currentInventory.map(function(designer){
      return renderGoodsStringForDesigner(designer).join('\n');
  });
}