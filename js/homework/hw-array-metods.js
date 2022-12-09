class MyArray extends Array {
  // constructor(arr = []) {
  //   super();
  //   this.array = arr;
  // }
  // customForEach(callback) {
  //   for (let i = 0; i < this.array.length; i += 1) {
  //     callback(this.array[i], i, this.array);
  //   }
  // }
  // customMap(callback) {
  //   let innerArr = [];
  //   for (let i = 0; i < this.array.length; i += 1) {
  //     innerArr.push(callback(this.array[i], i, this.array));
  //   }
  //   return innerArr;
  // }
  // customFlatMap(callback) {
  //   let innerArr = new MyArray([]);
  //   for (let i = 0; i < this.array.length; i += 1) {
  //     innerArr = [...innerArr, ...callback(this.array[i], i, this.array)];
  //   }
  //   return new MyArray(innerArr);
  // }
  // customFilter(callback) {
  //   let innerArr = new MyArray([]);
  //   for (let i = 0; i < this.array.length; i += 1) {
  //     if (callback(this.array[i], i, this.array)) innerArr.push(this.array[i]);
  //   }
  //   return new MyArray(innerArr);
  // }
}

// const arr = new MyArray([1, 2, 3]);
// console.log('arr :>> ', arr);

// customForEach
{
  // const arr = new MyArray([1, 8, 5]);
  // const a = [];
  // arr.customForEach((elem) => {
  //   console.log('elem: ', elem);
  //   a.push(elem * 2);
  // });
  // console.log('a: ', a);
  // const x = [];
  // const z = [];
  // arr.customForEach((el, ind) => {
  //   if (el % 2) {
  //     x.push(el);
  //     z.push(ind);
  //   }
  // });
  // console.log('x: ', x);
  // console.log('z: ', z);
  // arr.customForEach(foo);
  // function foo(a, b, c) {
  //   console.log('element: ', a, ', index: ', b, ', array: ', c);
  // }
}

// customMap
{
  // const planets = new MyArray(['Земля', 'Марс', 'Венера', 'Юпітер']);
  // console.log('planets: ', planets);
  // const planetsToLowerCase = planets.customMap((planet) =>
  //   planet.toLowerCase()
  // );
  // console.log(planetsToLowerCase); //['земля', 'марс', 'венера', 'юпітер']
  // const planetsToUpperCase = planets.customMap((planet) =>
  //   planet.toUpperCase()
  // );
  // console.log(planetsToUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
  // const students = new MyArray([
  //   { name: 'Манго', score: 83 },
  //   { name: 'Полі', score: 59 },
  //   { name: 'Аякс', score: 37 },
  //   { name: 'Ківі', score: 94 },
  //   { name: "Х'юстон", score: 64 },
  // ]);
  // const names = students.customMap((student) => student.name);
  // const namesScore = students.customMap((student) => student.score);
  // console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
  // console.log(namesScore); // [83, 59, 37, 94, 64]
}

// customFlatMap
{
  //   const students = new MyArray([
  //     { name: 'Манго', courses: ['математика', 'фізика'] },
  //     { name: 'Полі', courses: ['інформатика', 'математика'] },
  //     { name: 'Ківі', courses: ['фізика', 'біологія'] },
  //   ]);
  //   const courses = students.customMap((student) => student.courses);
  //   console.log(courses);
  //   // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
  //   const allCourses = students.customFlatMap((student) => student.courses);
  //   console.log(allCourses);
  //   // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
}

// customFilter
{
  //   const values = new MyArray([51, -3, 27, 21, -68, 42, -37]);
  //   const positiveValues = values.customFilter((value) => value >= 0);
  //   console.log(positiveValues); // [51, 27, 21, 42]
  //   const negativeValues = values.customFilter((value) => value < 0);
  //   console.log(negativeValues); // [-3, -68, -37]
  //   const bigValues = values.customFilter((value) => value > 1000);
  //   console.log(bigValues); // []
  //   //   Оригінальний масив не змінився
  //   console.log(values); // [51, -3, 27, 21, -68, 42, -37]
  // ------------------------------------------
  // const allCourses1 = new MyArray([
  //   'математика',
  //   'фізика',
  //   'інформатика',
  //   'математика',
  //   'фізика',
  //   'біологія',
  // ]);
  // const uniqueCourses = allCourses1.customFilter(
  //   (course, index, array) => array.indexOf(course) === index
  // );
  // console.log(uniqueCourses);
  // const students = new MyArray([
  //   { name: 'Манго', courses: ['математика', 'фізика'] },
  //   { name: 'Полі', courses: ['інформатика', 'математика'] },
  //   { name: 'Ківі', courses: ['фізика', 'біологія'] },
  // ]);
  // const allCourses = students.customFlatMap((student) => student.courses);
  // console.log('allCourses: ', allCourses);
  //   const uniqueCourses = allCourses.customFilter(
  //     (course, index, array) => array.indexOf(course) === index
  //   );
  //   console.log(uniqueCourses);
  //   const uniqueCourses = allCourses.customFilter((course, index, array) => {
  //     array.indexOf(course) === index;
  //   });
  //   console.log(uniqueCourses);
}

// ========================================================================================

function customForEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}
// customForEach
{
  // const arr = [1, 8, 5];
  // const a = [];
  // customForEach(arr, (elem) => {
  //   console.log('elem :>> ', elem);
  //   a.push(elem * 2);
  // });
  // console.log('a :>> ', a);
  // console.log('====================');
  // const x = [];
  // const z = [];
  // customForEach(arr, (el, ind) => {
  //   if (el % 2) {
  //     x.push(el);
  //     z.push(ind);
  //   }
  // });
  // console.log('x :>> ', x);
  // console.log('z :>> ', z);
  // console.log('====================');
  // customForEach(arr, foo);
  // function foo(a, b, c) {
  //   console.log('element :>> ', a, ', index :>> ', b, ', array :>> ', c);
  // }
}

function customMap(array, callback) {
  let innerArr = [];
  for (let i = 0; i < array.length; i += 1) {
    innerArr.push(callback(array[i], i, array));
  }
  return innerArr;
}

// customMap
{
  // const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];
  // console.log('planets:>> ', planets);
  // const planetsToLowerCase = customMap(planets, (planet) =>
  //   planet.toLowerCase()
  // );
  // console.log('planetsToLowerCase:>>', planetsToLowerCase); //['земля', 'марс', 'венера', 'юпітер']
  // const planetsToUpperCase = customMap(planets, (planet) =>
  //   planet.toUpperCase()
  // );
  // console.log('planetsToUpperCase:>>', planetsToUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
  // const students = [
  //   { name: 'Манго', score: 83 },
  //   { name: 'Полі', score: 59 },
  //   { name: 'Аякс', score: 37 },
  //   { name: 'Ківі', score: 94 },
  //   { name: "Х'юстон", score: 64 },
  // ];
  // const names = customMap(students, (student) => student.name);
  // const namesScore = customMap(students, (student) => student.score);
  // console.log('names:>> ', names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
  // console.log('namesScore:>> ', namesScore); // [83, 59, 37, 94, 64]
}

function customFlatMap(array, callback) {
  let innerArr = [];
  for (let i = 0; i < array.length; i += 1) {
    innerArr = [...innerArr, ...callback(array[i], i, array)];
  }
  return innerArr;
}

// customFlatMap
{
  // const students = [
  //   { name: 'Манго', courses: ['математика', 'фізика'] },
  //   { name: 'Полі', courses: ['інформатика', 'математика'] },
  //   { name: 'Ківі', courses: ['фізика', 'біологія'] },
  // ];
  // const courses = customMap(students, (student) => student.courses);
  // console.log('courses :>> ', courses);
  // // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
  // const allCourses = customFlatMap(students, (student) => student.courses);
  // console.log('allCourses :>> ', allCourses);
  // // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
}

function customFilter(array, callback) {
  let innerArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) innerArr.push(array[i]);
  }
  return innerArr;
}

// customFilter
{
  // const values = [51, -3, 27, 21, -68, 42, -37];
  // const positiveValues = customFilter(values, (value) => value >= 0);
  // console.log('positiveValues:>> ', positiveValues); // [51, 27, 21, 42]
  // const negativeValues = customFilter(values, (value) => value < 0);
  // console.log('negativeValues:>> ', negativeValues); // [-3, -68, -37]
  // const bigValues = customFilter(values, (value) => value > 1000);
  // console.log('bigValues:>> ', bigValues); // []
  // //   Оригінальний масив не змінився
  // console.log('values:>> ', values); // [51, -3, 27, 21, -68, 42, -37]
  // ------------------------------------------
  // const allCourses1 = [
  //   'математика',
  //   'фізика',
  //   'інформатика',
  //   'математика',
  //   'фізика',
  //   'біологія',
  // ];
  // const uniqueCourses = customFilter(
  //   allCourses1,
  //   (course, index, array) => array.indexOf(course) === index
  // );
  // console.log('uniqueCourses:>> ', uniqueCourses);
  // -----------------------------------------------------------
  // const students = [
  //   { name: 'Манго', courses: ['математика', 'фізика'] },
  //   { name: 'Полі', courses: ['інформатика', 'математика'] },
  //   { name: 'Ківі', courses: ['фізика', 'біологія'] },
  // ];
  // const allCourses = customFlatMap(students, (student) => student.courses);
  // console.log('allCourses: ', allCourses);
  // const uniqueCourses = customFilter(
  //   allCourses,
  //   (course, index, array) => array.indexOf(course) === index
  // );
  // console.log('uniqueCourses:>> ', uniqueCourses);
  // -----------------------------------------------------------
  // const students = [
  //   { name: 'Манго', courses: ['математика', 'фізика'] },
  //   { name: 'Полі', courses: ['інформатика', 'математика'] },
  //   { name: 'Ківі', courses: ['фізика', 'біологія'] },
  // ];
  // const uniqueCourses = customFilter(
  //   customFlatMap(students, (student) => student.courses),
  //   (course, index, array) => array.indexOf(course) === index
  // );
  // console.log('uniqueCourses:>> ', uniqueCourses);
}

function customFind(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return array[i];
  }
}
function customFindIndex(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return i;
  }
}
// customFind and customFindIndex
{
  // const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];
  // const planet = 'Венера';
  // const foundPlanet = customFind(planets, (item) => {
  //   return item === planet;
  // });
  // const foundPlanetIndex = customFindIndex(planets, (item) => {
  //   return item === planet;
  // });
  // console.log('foundPlanet :>> ', foundPlanet);
  // console.log('foundPlanetIndex :>> ', foundPlanetIndex);
}

const arr = [1, 2, , undefined, null, 5];
console.log('arr :>> ', arr);
console.log('arr[3] :>> ', arr[3]);
console.log('arr[2] :>> ', arr[2]);
console.log('arr[4] :>> ', arr[4]);
console.log('arr[2] === underfind :>> ', arr[2] === undefined);

const planets = ['Земля', 'Марс', , , , 'Венера', 'Юпітер'];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', , undefined, null, 'ВЕНЕРА', 'ЮПІТЕР']
console.log('planetsInUpperCase.length :>> ', planetsInUpperCase.length);
