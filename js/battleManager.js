import {Ingredient} from './../js/ingredient.js';

export class BattleManager{

  chooseIngredients(number){

    let chosenIngredients = [];


    for (var i = 0; i < number; i++) {

      let tomato = new Ingredient("Tomato", 20, "Soft");
      let lettuce = new Ingredient("Lettuce", 30, "Crunchy");
      let beef = new Ingredient("Beef", 100, "Tough");
      let cheese = new Ingredient("Cheese", 45, "Soft");

      const ingredientArray = [tomato, lettuce, beef, cheese];


      chosenIngredients.push(ingredientArray[Math.floor(Math.random() * (ingredientArray.length - 0)) + 0]);
    }

    return chosenIngredients;
  }

  checkIngredientHealth(ingredient){
    if(ingredient.health <= 0) {
      ingredient.alive = false;
    }
  }

}

export class Encounter{

  constructor(ingredients, reward, time) {
    this.ingredients = ingredients;
    this.reward = ingredients.length*100;
    this.time = ingredients.length *5;
  }

}
