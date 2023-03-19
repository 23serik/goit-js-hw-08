import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEL = form.querySelector('input');
const messageEl = form.querySelector('textarea');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let elements = {};

form.addEventListener(
  'input',
  throttle(event => {
    elements[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(elements));
  }, 500)
);

form.addEventListener('submit', event => {
  if (inputEL.value !== '' && messageEl.value !== '') {
    event.preventDefault();
    console.log('elements', elements);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    event.target.reset();

    return;
  }
  alert('ПОРОЖНЄ ПОЛЕ');
});

console.log('storage', JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

function textForm() {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storage) {
    const { email, message } = JSON.parse(storage);
    inputEL.value = email || '';
    messageEl.value = message || '';
  }
}

textForm();
