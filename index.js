// Покраска первой карточки

const productCard = document.querySelector('.card');
const buttonChangeColorCard = document.querySelector('.buttons__change_color_first_card');
const eloColor = '#e5e3b5';

buttonChangeColorCard.addEventListener('click', () => {
  productCard.style.backgroundColor = eloColor;
})

// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const buttonChangeColorCards = document.querySelector('.buttons__change_color_all_cards');
const grColor = '#bce0b0';

buttonChangeColorCards.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = grColor)
})

// Открыть Google

const buttonOpenGoogle = document.querySelector('.buttons__open_google');
const googleURL = 'https://google.com';

buttonOpenGoogle.addEventListener('click', openGoogle)

function openGoogle() {

  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open(googleURL)
  }
  else {
    return;
  }
}

// Вывод консоль лог

const outPutLogButton = document.querySelector('.buttons__output_console_log');

outPutLogButton.addEventListener('click', () => outputConsoleLog('я сообщение и меня вывели в лог'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Кнопка меняет цвет, а при повторном нажатие возвращает обратно

const buttonChangeAndBackColor = document.querySelector('.buttons__change_and_back_color');

buttonChangeAndBackColor.addEventListener('click', () => {
buttonChangeAndBackColor.classList.toggle('redColor')
})