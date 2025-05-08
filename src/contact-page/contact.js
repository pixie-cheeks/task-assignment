import { setupHamMenu } from '../ham-menu.js';
import { showMessage, attachOnCloseEvent } from './dialog.js';

setupHamMenu();

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const jobTitle = document.querySelector('#job-title');
const organizationName = document.querySelector('#organization-name');
const inquiryReason = document.querySelector('#inquiry-reason');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('.js-submit-button');
const allInputFields = [
  firstName,
  lastName,
  email,
  number,
  jobTitle,
  organizationName,
  inquiryReason,
  message,
];

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const firstInvalid = allInputFields.find((field) => !field.checkValidity());

  if (firstInvalid) {
    attachOnCloseEvent(() => {
      firstInvalid.reportValidity();
    });
    showMessage('Error. Check input fields before submitting.');
  } else {
    showMessage('Form successfully submitted!');
  }
});
