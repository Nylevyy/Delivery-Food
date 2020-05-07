const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


//day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonout = document.querySelector('.button-out');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open')
}

let login = localStorage.getItem('gloDelivery');

function authorized() {
  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonout.style.display = '';
    buttonout.removeEventListener('click', logOut);
    checkAuth();
  }

  console.log('Авторизован');
  userName.textContent = login;
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonout.style.display = 'block';

  buttonout.addEventListener('click', logOut)
}

function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event) {

    function emptyLoginAlert(event) {
      alert('Введите логин и пароль')
    }

    event.preventDefault();

    if (loginInput.value !== '') {
      login = loginInput.value;
      localStorage.setItem('gloDelivery', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else emptyLoginAlert();


  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn)
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();
