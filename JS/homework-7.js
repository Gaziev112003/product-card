//функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль

const getTemperatureCity = (City, Temperature) => {
  return `Температура в городе ${City} составляет ${Temperature}°C`;
};
console.log(getTemperatureCity("Москва", 20));
console.log(getTemperatureCity("Санкт-Петербург", 15));
console.log(getTemperatureCity("Новосибирск", 10));

// Скорость света

const SPEED_JIGHT = 299792458;

if (SPEED_JIGHT > 299792458) {
  console.log("Сверхсветовая скорость");
} else if (SPEED_JIGHT === 299792458) {
  console.log("Скорость света");
} else {
  console.log("Субсветовая скорость");
}

//Функция, которая принимает 1 параметр: бюджет и выводит сообщение о покупке товара

let product = "Меч";
let price = 125000;

function buyProduct(budget) {

if (budget >= price) {
  console.log(`"${product}" приобретён. Спасибо за покупку!`);
} else {
  const notEnough = price - budget;
  console.log(`Вам не хватает ${notEnough}$, пополните баланс`);
}
}

buyProduct(100000)