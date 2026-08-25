// 3. Создайте объект на основе ваших данных.

const userProfile = {
  firstName: "Amir",
  lastName: "Gaziev",
  age: 22,
  email: "gaziev736@gmail.com",
  job: "Frontend Developer",
  country: "Russia",
  city: "Kizlyar",
  hobbies: "football",
};

// 4. Создайте объект, который будет хранить данные об автомобиле.

const carInfo = {
  brand: "BMW",
  model: "m5 F90",
  year: 2023,
  color: "grey",
  transmission: "automatic",
};

// Добавляем объект userProfile в объект carInfo

carInfo.owner = userProfile,

  // 5. Создайте функцию, которая будет проверять наличие свойства "maxSpeed".

  function checkMaxSpeed(carInfo) {

    if ("maxSpeed" in carInfo) {
      return;
    }

    carInfo.maxSpeed = 360;
  }

// Вызов функции checkMaxSpeed.

checkMaxSpeed(carInfo);

// 6. Написать функцию где ты пишешь наз.объекта и наз.ключа, а она тебе дает свойство.

function showObjValue(object, key) {
  console.log(object[key]);
}

showObjValue(carInfo, "brand");

// 7. Создать массив, который содержит названия продуктов.

const products = ["Мука", "Сахар", "Соль", "Рис", "Молоко"];

// 8. Создать массив, состоящий из объектов

const carList = [
  {
    brand: "BMW",
    model: "m5 F90",
    year: 2023,
    color: "grey",
    transmission: "automatic",
    made: "Germany",
    circulation: "unlimited",
  },
  {
    brand: "Mercedes-Benz",
    model: "CLS AMG",
    year: 2021,
    color: "black",
    transmission: "automatic",
    made: "Germany",
    circulation: "unlimited",
  },
  {
    brand: "Porsche",
    model: "911 GT3-RS",
    year: 2024,
    color: "silver",
    transmission: "automatic",
    made: "Germany",
    circulation: "unlimited",
  },
]

// добавить еще один список объекта в в конце масива

carList.push({
  brand: "Audi",
  model: "RS-7",
  year: 2022,
  color: "black-grin",
  transmission: "automatic",
  made: "Germany",
  circulation: "unlimited",
})

// 9. Создать еще один массив, ...

const superCarList = [
  {
    brand: "Bugatti",
    model: "Tourbillon",
    year: 2026,
    color: "blue",
    transmission: "DCT",
    made: "France",
    circulation: "limited",
  },
  {
    brand: "Koenigsegg",
    model: "Jesko Absolut",
    year: 2024,
    color: "white",
    transmission: "LST",
    made: "Sweden",
    circulation: "limited",
  },
]

// объединить эти два массива в один

const allCars = [...carList, ...superCarList];

// 10. Почитать про метод массива — map. Написать функцию.

function getRareCars(objCars) {
  return objCars.map((car) => {
  return {
    ...car,
    isRare: car.circulation === 'limited' ? true : false
  };
});
}

// Вызов функции

const updatedAllCar = getRareCars(allCars);