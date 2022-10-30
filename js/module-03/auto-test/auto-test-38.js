/** ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ
Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля 
potionName в кінець масиву зілля у властивості potions.
*/

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    return this.potions;
    // Change code above this line
  },
};
// --------------------------------------------------------
console.log(atTheOldToad.addPotion('Invisibility'));
//["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
console.log(atTheOldToad.addPotion('Power potion'));
//["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
