import {ChefClass} from './../js/chefClass.js';
import {Ingredient} from './../js/ingredient.js';

export class Character {
  constructor(gender, height, age, chefClass, encounter) {
    this.gender = gender;
    this.height = height;
    this.age = age;
    this.chefClass = chefClass;
  }

  cut(ingredient){ //cut an ingredient

    if (ingredient.armorType == "Soft") {
      ingredient.health -= this.chefClass.cut * 2;
    } else if (ingredient.armorType == "Crunchy") {
      ingredient.health -= this.chefClass.cut;
    }else {
      ingredient.health -= this.chefClass.cut * .5;
    }
    if (this.encounter !=null)
    {
        this.encounter.time -= 1;
    }

  }

  fry(ingredient){
    if(ingredient.armorType == "Soft") {
      ingredient.health -= this.chefClass.fry * 3;
    } else if (ingredient.armorType == "Crunchy") {
      ingredient.health -= this.chefClass.fry * 2;
    } else {
      ingredient.health -= this.chefClass.fry;
    }
    if (this.encounter !=null)
    {
        this.encounter.time -= 1;
    }
  }

  decorate(ingredient){
    if (ingredient.armorType == "Soft") {
      ingredient.health -= this.chefClass.decorate * 2;
    } else if (ingredient.armorType == "Crunchy") {
      ingredient.health -= this.chefClass.decorate;
    } else {
      ingredient.health -= this.chefClass.cut * .5;
    }

    if (this.encounter !=null)
    {
        this.encounter.time -= 1;
    }
  }


}
