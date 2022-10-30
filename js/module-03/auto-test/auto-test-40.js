/** ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
Доповни метод updatePotionName(oldName, newName) таким чином, 
щоб він оновлював назву зілля з oldName на newName в масиві зілля 
у властивості potions.
*/

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line

    //   const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
    return this.potions;

    // Change code above this line
  },
};

// ---------------------------------------------------------------
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// ["Speed potion", "Polymorth", "Stone skin"]
console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));
// ["Speed potion", "Polymorth", "Invisibility"]
