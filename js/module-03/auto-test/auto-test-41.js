/** ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР
Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, 
але й ціною, а в майбутньому, можливо, й іншими характеристиками. 
Тому зараз у властивості potions буде зберігатися масив об'єктів з 
наступними властивостями.

{
  name: "Dragon breath",
  price: 700
}

Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони 
працювали не з масивом рядків, а з масивом об'єктів.

getPotions() - метод для отримання всього зілля. Повертає значення 
властивості potions.
addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив 
у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. 
В іншому випадку повертається рядок.
removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву 
у властивості potions.
updatePotionName(oldName, newName) - оновлює властивість name 
об'єкта-зілля з назвою oldName на newName в масиві potions.
*/

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   makeNameArray() {
//     const nameArr = [];
//     for (const { name } of this.potions) {
//       nameArr.push(name);
//     }
//     return nameArr;
//   },

//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     // const nameArr = [];
//     // for (const { name } of this.potions) {
//     //   nameArr.push(name);
//     // }
//     // // return nameArr;
//     // console.log(nameArr);

//     if (this.makeNameArray().includes(newPotion.name)) {
//       // if (nameArr.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   //   addPotion(newPotion) {
//   //     for (const potion of this.potions) {
//   //       if (Object.values(potion).includes(newPotion.name)) {
//   //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   //       }
//   //     }

//   //     this.potions.push(newPotion);
//   //     return this.potions;
//   //   },

//   //   addPotion(newPotion) {
//   //     for (const potion of this.potions) {
//   //       const { name } = potion;
//   //       if (name === newPotion.name) {
//   //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//   //       }
//   //     }

//   //     this.potions.push(newPotion);
//   //     return this.potions;
//   //   },

//   removePotion(potionName) {
//     // const nameArr = [];
//     // for (const { name } of this.potions) {
//     //   nameArr.push(name);
//     // }
//     // return nameArr;
//     // console.log(nameArr);

//     // const potionIndex = nameArr.indexOf(potionName);
//     const potionIndex = this.makeNameArray().indexOf(potionName);

//     // console.log(nameArr.indexOf(potionName));

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//   },

//   //   removePotion(potionName) {
//   //     let potionIndex = 0;
//   //     for (const potion of this.potions) {
//   //       const { name } = potion;
//   //       if (name === potionName) {
//   //         potionIndex = this.potions.indexOf(potion);
//   //         // console.log('potionIndex ', potionIndex);
//   //       }
//   //     }

//   //     if (potionIndex === -1) {
//   //       return `Potion ${potionName} is not in inventory!`;
//   //     }

//   //     this.potions.splice(potionIndex, 1);
//   //     return this.potions;
//   //   },

//   updatePotionName(oldName, newName) {
//     // const nameArr = [];
//     // for (const { name } of this.potions) {
//     //   nameArr.push(name);
//     // }
//     // console.log(nameArr);

//     // const potionIndex = nameArr.indexOf(oldName);
//     const potionIndex = this.makeNameArray().indexOf(oldName);
//     // console.log(nameArr.indexOf(oldName));
//     // console.log(this.potions[potionIndex]);
//     this.potions[potionIndex].name = newName;

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     // this.potions.splice(potionIndex, 1, newName);
//     return this.potions;
//   },

//   // updatePotionName(oldName, newName) {
//   //   let potionIndex = 0;
//   //   for (const potion of this.potions) {
//   //     const { name } = potion;
//   //     if (name === oldName) {
//   //       // potionIndex = this.potions.indexOf(potion);
//   //       // console.log(potion);
//   //       potion.name = newName;
//   //       // console.log(potion);
//   //     }
//   //   }
//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }
//   //   // this.potions.splice(potionIndex, 1, potion);
//   //   return this.potions;
//   // },
//   //   Change code above this line
// };

// ============================================================================
// ========== result code =====================================================

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  makeNameArray() {
    const nameArr = [];
    for (const { name } of this.potions) {
      nameArr.push(name);
    }
    return nameArr;
  },

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    if (this.makeNameArray().includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
    return this.potions;
  },

  removePotion(potionName) {
    const potionIndex = this.makeNameArray().indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
    return this.potions;
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.makeNameArray().indexOf(oldName);
    this.potions[potionIndex].name = newName;

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    return this.potions;
  },
};

// ============================================================================

// ----------------------------------------------------------------
// console.log(atTheOldToad.getPotions());
// [
//   { name: 'Speed potion', price: 460 },
//   { name: 'Dragon breath', price: 780 },
//   { name: 'Stone skin', price: 520 },
// ];
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Speed potion'));

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );
