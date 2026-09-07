import { socialComments } from './comments.js';

console.log(socialComments);

// УРОВЕНЬ.1
// 2.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fiveNumbers = numbers.slice(4, 10);

console.log(fiveNumbers);

// 3.

const islamBooks = ["Три основы",
  "40 хадисов ан-Навави",
  "Сира пророка",
  "40 аль-Кудси",
  "Понимание прекраснейших имен Аллаха",
  "Исламские финансы",
];

const findIslamBooks = islamBooks.includes("Сира пророка");

console.log(findIslamBooks);

// 4.

const reversNumbers = numbers.reverse();
const reversIslamBooks = islamBooks.reverse();

console.log(reversNumbers, reversIslamBooks);

// УРОВЕНЬ.2
// 7.

const comSocialComments = socialComments.filter(comment => comment.email.includes(".com"));

console.log(comSocialComments);

// 8.

const updatedSocialComments = socialComments.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  }
  else {
    comment.postId = 1;
  }
  return comment;
});

console.log(updatedSocialComments);

// 9.

const lightSocialComments = socialComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(lightSocialComments);

// 10.

const checkedSocialComments = socialComments.map(comment => {
  if (comment.body.length > 180) {
    comment.isInvalid = true;
  }
  else {
    comment.isInvalid = false;
  }
  return comment;
});

console.log(checkedSocialComments);

// 11.
// Вариант через .map()
const emailsWithMap = socialComments.map(comment => comment.email);

console.log(emailsWithMap);

// Вариант через .reduce()
const emailsWithReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduce);

// 12.
// Вариант через .toString()
const emailWithToString = socialComments.email.toString();

console.log(emailWithToString);

// Вариант через .join()
const emailWithJoin = socialComments.email.join(', ');

console.log(emailWithJoin);