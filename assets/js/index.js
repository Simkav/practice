'use strict';
//1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
function summarize(number) {
  if (typeof number !== 'number') {
    throw new TypeError('Not a number');
  }
  if (number <= 0) {
    throw new RangeError('Number bust be positive');
  }
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result = result + i;
  }
  return result;
}
// summarize(5) / 15
// summarize(10) / 55;

//2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
class Student {
  constructor(name, surName, isMale, contacts, university = new University()) {
    this.name = name;
    this.surName = surName;
    this.isMale = isMale;
    this.contacts = contacts;
    this.university = university;
  }
  //2.4 Реализовать функцию выводит на экран всю информацию о студенте
  //TODO REFACTOR FUNCTION
  getInfo() {
    const buffer = [];
    Object.entries(this).forEach((v) => {
      if (v[1] instanceof University) {
        Object.entries(v[1]).forEach((e) => {
          buffer.push(e.join(':'));
        });
      } else if (Array.isArray(v[1])) {
        buffer.push(v[0] + ':' + v[1].join(','));
      } else {
        buffer.push(v.join(':'));
      }
    });
    return buffer.join(';');
  }
}

//2.2 Создать объект, который содержит свойства, о факультете и кафедре.
class University {
  constructor(faculty, department) {
    this.faculty = faculty;
    this.department = department;
  }
}
const ZNTU = new University('computer since', 'System analysis');
const std = new Student('Test', 'Testovich', true, ['gmail', 'test']); //2.3
std.university = ZNTU;
console.log(std.getInfo());

//3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const arr = new Array(25).fill(0);
//3.1*Инициализация с помощью случайных чисел
arr.forEach((v, i) => {
  arr[i] = Math.floor(Math.random() * 50);
});
console.log('//3.1*Инициализация с помощью случайных чисел', arr);
//3.2 Вывести элементы с четными индексами
console.log(
  '//3.2 Вывести элементы с четными индексами',
  arr.filter((v, i) => {
    if (i % 2 == 0) {
      return v;
    }
  })
);
//3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
console.log(
  '3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)',
  arr.filter((e) => {
    if (e % 2 === 0) {
      return e;
    }
  })
);
//3.4 Вывести индексы нулевых элементов (элемент равен нулю)
const zeroElements = new Array();
arr.forEach((e, i) => {
  if (e === 0) {
    zeroElements.push(i);
  }
});
console.log(
  '3.4 Вывести индексы нулевых элементов (элемент равен нулю)',
  zeroElements
);
//3.5 Подсчитать количество нулевых элементов
console.log('3.5 Подсчитать количество нулевых элементов', zeroElements.length);
//4 Книга (автор, название, год издания, издательство)
class Book {
  constructor(author, name, year, publishingHouse) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishingHouse = publishingHouse;
  }
}
//4.1 Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class EBook extends Book {
  constructor(author, name, year, publishingHouse, format, id) {
    super(author, name, year, publishingHouse);
    this.format = format;
    this.id = id;
  }
}
const ebk = new EBook('Avtor', 'Kekw', 22031, 'publish', 'pdf', 25);
console.log(ebk);
//5. fizzbuzz
const fizzbuzz = (n = 100) => {
  for (let i = 1; i <= n; i++) {
    let result = [];
    if (i % 3 === 0) {
      result.push('fizz');
    }
    if (i % 5 === 0) {
      result.push('bazz');
    }
    if (result.length === 0) {
      result.push(i);
    }
    console.log(result.join(''));
  }
};
fizzbuzz(16);
