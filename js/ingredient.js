export class Ingredient{
  constructor(name, health, armorType, alive=true) {
    this.name = name;
    this.health = health;
    this.armorType = armorType;
    this.alive = alive;
  }

}
