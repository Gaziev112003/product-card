const footerForm = document.getElementById('footer__form');
const footerInput = document.getElementById('footer__input');

footerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const getTextInput = footerInput.value;
  const emailObject = {
    email: getTextInput
  };
  console.log(emailObject);
});

let user;

const registerBtn = document.querySelector('.register-btn');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const formReg = document.querySelector('.modal__form')
const passwordInput = document.querySelector('#regPassword');
const confirmPasswordInput = document.querySelector('#regPasswordConfirm');

// 1. Открытие
registerBtn.addEventListener('click', function() {
  modal.classList.add('modal-showed');
});

// 2. Закрытие
modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-showed');
});

formReg.addEventListener('submit', function(reg) {
  reg.preventDefault();

  if (!formReg.checkValidity()) {
    alert('Регистрация отклонена. Пожалуйста, заполните все поля правильно.');
    return;
  }

  const passwordValue = passwordInput.value;
  const confirmValue = confirmPasswordInput.value;
  
  if (passwordValue !== confirmValue) {
    alert('Регистрация отклонена. Пароли не совпадают!');
    return;
  }

  user = {
    firstName: document.querySelector('#regName').value.trim(),
    lastName: document.querySelector('#regSurname').value.trim(),
    birthDate: document.querySelector('#regDate').value,
    login: document.querySelector('#regLogin').value.trim(),
    createdOn: new Date()
  };

  console.log(user);
  modal.classList.remove('modal-showed');
  formReg.reset();
  
  alert('Регистрация успешно завершена!');
});