/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure as earlier:

var inventory = [
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

Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

Brunello Cucinelli,tasselled black low-top lace-up,1000
Gucci,black leather laced sneakers,900
etc



Write your own unit tests.

*/


var inventory = [
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

function checkBlack(shoe) {
    if((shoe.name).toLowerCase().includes("black")) {
        return shoe.name;
    }
}
  
function renderDesignerInventory(designerName, designerShoes) {
  designerShoes = designerShoes.filter(checkBlack);
  return designerShoes.map(function(shoe){
    return [designerName, shoe.name, shoe.price].join(", ");
  })
}

function renderInventory(inventory) {
    return inventory.map(function(designer){
        return renderDesignerInventory(designer.name, designer.shoes);
    }).join("\n");
}

var output = renderInventory(inventory);
console.log(output);
