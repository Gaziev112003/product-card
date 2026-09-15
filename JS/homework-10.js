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

  const compoundItemsHtml = product.compound
    .map(item => `<li>${item}</li>`)
    .join('');

  return `
    <div class="products__item card">
      <img src="${product.imgUrl}" alt="Товар ${product.name}" class="card__image" width="290" height="245">
      <h3 class="card__category">${product.category}</h3>
      <h2 class="card__name">${product.name}</h2>
      <div class="card__description">
        <p>${product.description}</p>
      </div>
      <div class="card__compound compound">
        <span class="compound__name">Состав:</span>
        <ul class="compound__list clear-list">
          ${compoundItemsHtml}
        </ul>
      </div>
      <div class="card__price">
        <b>Цена</b>
        <span>${product.price.toLocaleString('ru-RU')} &#8381;</span>
      </div>
    </div>
  `;
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
  const finalHtml = itemsToRender.map(product => getCardTemplate(product)).join('');
  productsContainer.innerHTML = finalHtml;
}

renderProducts(productsList);