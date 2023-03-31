import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEL = form.querySelector('input');
const messageEl = form.querySelector('textarea');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let elements = {};

form.addEventListener(
  'input',
  throttle(event => {
    if (event.target.name === 'message' && event.target.value !== '') {
      elements.message = event.target.value;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...elements }));
    } else if (event.target.name === 'email' && event.target.value !== '') {
      elements.email = event.target.value;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...elements }));
    }
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

function textForm() {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storage) {
    const { email, message } = JSON.parse(storage);
    elements = { email, message };
    inputEL.value = email || '';
    messageEl.value = message || '';
  }
}

textForm();
