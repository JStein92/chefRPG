import {ChefClass} from './../js/chefClass.js';
import {Character} from './../js/character.js';
import {Ingredient} from './../js/ingredient.js';
import {BattleManager, Encounter} from './../js/battleManager.js';

describe('Character', function(){

let pastryChef;
let fryCook;
let meatCook;
let tomato;
let newCharacter;
let battleManager;
let encounter;

  beforeEach(function(){
     pastryChef = new ChefClass("Pastry Chef", 3, 3, 8, 5);

     fryCook = new ChefClass("Fry Cook", 5, 4, 2, 4);

     meatCook = new ChefClass("Meat Cook", 4, 9, 2, 4);

     tomato = new Ingredient ("Tomato", 20, "Soft");
     newCharacter = new Character ("Female", "Tall", 35, pastryChef);
     battleManager = new BattleManager();
     encounter = new Encounter(battleManager.chooseIngredients(Math.floor(Math.random() * (6 -1) + +1)));

  });

  it('should assign a class to a character',function(){
    expect(newCharacter.chefClass.decorate).toEqual(8);
  });

  it('should return 3 random ingredients',function(){
    let chosenIngredients = [];
    chosenIngredients = battleManager.chooseIngredients(3);

    // for (var i = 0; i < 3; i++) {
    //   console.log(chosenIngredients[i]);
    // }
    expect(chosenIngredients.length).toEqual(3);
  });

  it('should hurt an ingredient when it is cut',function(){
    newCharacter.cut(tomato);
    expect(tomato.health).toEqual(14);
  });

  it('should hurt an ingredient when it is fried', function(){
    newCharacter.fry(tomato);
    expect(tomato.health).toEqual(11);
  });

  it('should hurt an ingredient when it is decorated', function(){
    newCharacter.decorate(tomato);
    expect(tomato.health).toEqual(4);
  });

  it('should check if an ingredient is alive', function(){
    newCharacter.decorate(tomato);
    newCharacter.decorate(tomato);
    battleManager.checkIngredientHealth(tomato);
    expect(tomato.alive).toEqual(false);
  });

  it ('should generate an encounter', function(){
    for (var i = 0; i < encounter.ingredients.length; i++) {
    //  console.log(encounter.ingredients[i].name);
    }

    expect(encounter.reward).toEqual(encounter.ingredients.length*100);
  });

  it ('should take time when a player attacks an enemy in an encounter', function(){

      newCharacter.encounter = encounter;

      newCharacter.cut(encounter.ingredients[0]);


      for (var i = 0; i < encounter.ingredients.length; i++) {
        console.log(encounter.ingredients[i]);
      }


      expect(encounter.time).toEqual(encounter.ingredients.length * 5 -1)

  });
});
