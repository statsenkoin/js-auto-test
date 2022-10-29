/** ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО МАСИВУ
Операція .spread дозволяє створити копію масиву або «склеїти» довільну 
кількість масивів в один новий. Раніше для цього використовували методи 
slice() і concat(), але операція розподілу дозволяє зробити те саме у 
коротшій формі.

const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити 
його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з 
вихідного ящика temps - розподіляємо його в іншу колекцію. За такої умови, 
ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - 
їх точні копії.

У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. 
Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх 
яблук (елементів). Порядок розподілу важливий - він впливає на порядок 
елементів у новій колекції.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ---------------------------------------------------
У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються 
результати тестування окремих груп. Використовуючи розподіл, доповни код 
таким чином, щоб:

У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
У змінній bestScore був найвищий загальний бал.
У змінній worstScore був найнижчий загальний бал.
*/

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// --------------------------------------------------------------
console.log(allScores);
console.log(bestScore);
console.log(worstScore);
