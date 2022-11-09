/* Kata 12 - The Great Codeville Bake-off
We need to complete a function called chooseRecipe(), which will receive 
three parameters: - An array of ingredients in stock at Bakery A - An 
array of ingredients in stock at Bakery B - An array of recipe objects. 
Each recipe has a name property(string) and an ingredient property(array)
*/

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  /*Placeholders for BakeryA & BakeryB where they can possibly make a 
  Recipe based off having one single ingreident*/
  let arr1 = []; let arr2 = []; 

  //function to check what recipe a bakery can make given thier ingredients
  let findIngr = (recipeBook,baker,possible) => {
    for (let recipe of recipeBook) {
      for (let x = 0; x <= recipe.ingredients.length; x++) {
        for (inventory of baker) {
          if (inventory === recipe.ingredients[x]) {
             possible.push(recipe.name);
          }
        }
      }
    }
  };

  //Check each bakery for possible recipes
  findIngr(recipes,bakeryA,arr1);
  findIngr(recipes,bakeryB,arr2);

  //Function to find matching recipes by both Bakerys
  let makeThis = (bakerA,bakerB) => {
    for (let x of bakerA) {
      for (let y of bakerB) {
        if (x === y) {return x;}        
      }
    }
  };

  return makeThis(arr1,arr2); //Return single recipe
}

// TEST CASES //
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));