/** Термін slug - це людино-зрозумілий унікальний ідентифікатор,
 * який використовується у веб-розробці для створення читабельних URL-адрес.
 * Наприклад, замість того, щоб користувач побачив в адресному рядку
 * mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті.
 * В результаті адреса буде приємнішою для сприйняття:
 * mysite.com/posts/arrays-for-begginers.
 * Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
 *
 * Напиши функцію slugify(title), яка приймає заголовок статті,
 * параметр title, і повертає slug, створений з цього рядка.
 *
 * Значенням параметра title будуть рядки, слова яких розділені лише пробілами
 * Усі символи slug повинні бути у нижньому регістрі
 * Всі слова slug повинні бути розділені тире
 * */

function slugify(title) {
  //   const newTitle = title.toLowerCase();
  //   console.log(newTitle);
  //   const newTitleToArray = newTitle.split(' ');
  //   console.log(newTitleToArray);
  //   const newTitleSlug = newTitleToArray.join('-');
  //   console.log(newTitleSlug);
  //   return newTitleSlug;

  // Change code below this line
  return title.toLowerCase().split(' ').join('-');
  // Change code above this line
}

// ------------------------------------------
console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
