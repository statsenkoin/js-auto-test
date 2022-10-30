/** ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ
Додай об'єкту atTheOldToad метод getPotions(), який просто повертає 
значення властивості potions.
*/

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

// --------------------------------------------------------------
console.log(atTheOldToad.getPotions());
//["Speed potion", "Dragon breath", "Stone skin"]
