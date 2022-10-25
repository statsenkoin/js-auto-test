/**
 ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ
Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, 
де ім'я властивості - це ім'я співробітника, а значення властивості - 
це зарплата. Функція повинна розрахувати загальну суму зарплат 
співробітників і повернути її. Використовуй змінну totalSalary 
для зберігання загальної суми зарплати.
 */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  //   const salariesVal = Object.values(salaries);
  //   for (let salary of salariesVal) totalSalary += salary;

  for (let salary of Object.values(salaries)) totalSalary += salary;

  //   totalSalary = Object.values(salaries).reduce((a, b) => a + b, 0);

  // Change code above this line
  return totalSalary;
}

// -----------------------------------------------
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
