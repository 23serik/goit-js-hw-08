import throttle from 'lodash.throttle';

const feedbackFormData = localStorage.getItem('feedback-from-data') || {
  email: '',
  message: '',
};

// Add feedbackFormData to the email and  message inputs

// 2 inputs: email  and message
inputEmailEl.addEventListener(
  'input',
  throttle(event => {
    localStorage.setItem('feedback-from-email', event.email);
  }, 500)
);

inputMessageEl.addEventListener(
  'input',
  throttle(event => {
    localStorage.setItem('feedback-from-email', event.mesage);
  }, 1000)
);
