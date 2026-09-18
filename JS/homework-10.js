//2.
import { productsList } from './products.js';

console.log(productsList);


const productsDescriptions = productsList.reduce((accumulator, product) => {

  const liteObject = {
    [product.name]: product.description
  };
  
  accumulator.push(liteObject);
  
  return accumulator;
}, []);

console.log(productsDescriptions);


function getCardTemplate(product) {
  const template = document.querySelector('#card-template');
  if (!template) return null;

  const cardClone = template.content.cloneNode(true);
  const img = cardClone.querySelector('.card__image');
  img.src = product.imgUrl;
  img.alt = `Товар ${product.name}`;

  cardClone.querySelector('.card__category').textContent = product.category;
  cardClone.querySelector('.card__name').textContent = product.name;
  cardClone.querySelector('.card__description p').textContent = product.description;

  const compoundList = cardClone.querySelector('.compound__list');
  product.compound.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    compoundList.append(li);
  });

 const formattedPrice = `${product.price.toLocaleString('ru-RU')} ₽`;
  cardClone.querySelector('.card__price span').textContent = formattedPrice;

  return cardClone;
}


function getCardsCountFromUser() {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = parseInt(userInput, 10);
  if (isNaN(count) || count > 5 || count < 0) {
    alert("Ошибка! Вы ввели неверное значение. Будут показаны все 5 карточек.");
    return 5;
  }
  return count;
}

function renderProducts(productArray) {
  const productsContainer = document.querySelector('.products');
  if (!productsContainer) return;
  productsContainer.innerHTML = '';
  const countToDisplay = getCardsCountFromUser();
  const itemsToRender = productArray.slice(0, countToDisplay)
  itemsToRender.forEach(product => {
    const cardElement = createCardTemplate(product);
    if (cardElement) {
      productsContainer.append(cardElement);
    }
  });
}