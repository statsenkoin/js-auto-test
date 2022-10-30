/** ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля 
potionName з масиву зілля у властивості potions.
*/

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    // Change code below this line

    // const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(this.potions.indexOf(potionName), 1);
    return this.potions;

    // Change code above this line
  },
};

// --------------------------------------------------------------
console.log(atTheOldToad.removePotion('Dragon breath'));
//["Speed potion", Stone skin"]
console.log(atTheOldToad.removePotion('Speed potion'));
//["Stone skin"]
