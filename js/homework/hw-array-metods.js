class MyArray extends Array {
  constructor(arr = []) {
    super();
    this.array = arr;
  }
  customForEach(callback) {
    for (let i = 0; i < this.array.length; i += 1) {
      callback(this.array[i], i, this.array);
    }
  }
  customMap(callback) {
    let innerArr = [];
    for (let i = 0; i < this.array.length; i += 1) {
      innerArr.push(callback(this.array[i], i, this.array));
    }
    return new MyArray(innerArr);
  }
  customFlatMap(callback) {
    let innerArr = new MyArray([]);
    for (let i = 0; i < this.array.length; i += 1) {
      innerArr = [...innerArr, ...callback(this.array[i], i, this.array)];
    }
    return new MyArray(innerArr);
  }
  customFilter(callback) {
    let innerArr = new MyArray([]);
    for (let i = 0; i < this.array.length; i += 1) {
      if (callback(this.array[i], i, this.array)) innerArr.push(this.array[i]);
    }
    return new MyArray(innerArr);
  }
}

// const arr = new MyArray([1,2,3]);

// customForEach
{
  //   const arr = new MyArray([1, 8, 5]);
  //   const a = [];
  //   arr.customForEach((elem) => {
  //     console.log('elem: ', elem);
  //     a.push(elem * 2);
  //   });
  //   console.log('a: ', a);
  //   const x = [];
  //   const z = [];
  //   arr.customForEach((el, ind) => {
  //     if (el % 2) {
  //       x.push(el);
  //       z.push(ind);
  //     }
  //   });
  //   console.log('x: ', x);
  //   console.log('z: ', z);
  //   arr.customForEach(foo);
  //   function foo(a, b, c) {
  //     console.log('element: ', a, ', index: ', b, ', array: ', c);
  //   }
}

// customMap
{
  //   const planets = new MyArray(['Земля', 'Марс', 'Венера', 'Юпітер']);
  //   console.log('planets: ', planets);
  //   const planetsToLowerCase = planets.customMap((planet) =>
  //     planet.toLowerCase()
  //   );
  //   console.log(planetsToLowerCase); //['земля', 'марс', 'венера', 'юпітер']
  //   const planetsToUpperCase = planets.customMap((planet) =>
  //     planet.toUpperCase()
  //   );
  //   console.log(planetsToUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
  //   const students = new MyArray([
  //     { name: 'Манго', score: 83 },
  //     { name: 'Полі', score: 59 },
  //     { name: 'Аякс', score: 37 },
  //     { name: 'Ківі', score: 94 },
  //     { name: "Х'юстон", score: 64 },
  //   ]);
  //   const names = students.customMap((student) => student.name);
  //   const namesScore = students.customMap((student) => student.score);
  //   console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
  //   console.log(namesScore); // [83, 59, 37, 94, 64]
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
  const allCourses1 = new MyArray([
    'математика',
    'фізика',
    'інформатика',
    'математика',
    'фізика',
    'біологія',
  ]);
  const uniqueCourses = allCourses1.customFilter(
    (course, index, array) => array.indexOf(course) === index
  );
  console.log(uniqueCourses);
  const students = new MyArray([
    { name: 'Манго', courses: ['математика', 'фізика'] },
    { name: 'Полі', courses: ['інформатика', 'математика'] },
    { name: 'Ківі', courses: ['фізика', 'біологія'] },
  ]);
  const allCourses = students.customFlatMap((student) => student.courses);
  console.log('allCourses: ', allCourses);
  //   const uniqueCourses = allCourses.customFilter(
  //     (course, index, array) => array.indexOf(course) === index
  //   );
  //   console.log(uniqueCourses);
  //   const uniqueCourses = allCourses.customFilter((course, index, array) => {
  //     array.indexOf(course) === index;
  //   });
  //   console.log(uniqueCourses);
}
