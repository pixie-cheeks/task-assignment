const dialog = document.querySelector('.js-dialog');
const messageField = document.querySelector('.js-dialog-text');
const okButton = document.querySelector('.js-dialog-button');
let callbacksOnClose = [];

const showMessage = (message) => {
  messageField.textContent = message;
  dialog.showModal();
};

const attachOnCloseEvent = (callback) => {
  callbacksOnClose.push(callback);
};

okButton.addEventListener('click', () => {
  dialog.close();
  messageField.textContent = '';
});

dialog.addEventListener('close', (event) => {
  callbacksOnClose.forEach((calback) => calback(event));
  callbacksOnClose = [];
});

export { showMessage, attachOnCloseEvent };
