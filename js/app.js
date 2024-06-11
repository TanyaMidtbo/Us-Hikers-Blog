console.log("test");


import { validateSignInForm } from "./signInValidation";
import { validateSignUpForm } from "./signUpValidation";

//selecting sign-in form elements

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const signInForm = document.querySelector(".sign-in-form");
const submissionError = document.querySelector(".submittion-error");

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateSignInForm(
    emailInput.value,
    passwordInput.value,
    emailError,
    passwordError
  );
});

//selecting sign-up form elements

const signUpFirstName = document.querySelector(".firstname");
const signUpLastName = document.querySelector(".lastname");
const signUpEmail = document.querySelector(".sign-up-email");
const signUpPassword = document.querySelector(".sign-up-password");
const signUpError = document.querySelector(".sign-up-error");
const signUpForm = document.querySelector(".sign-up-form");
const closeSignUpFormButton = document.querySelector(".sign-up-form__close");
const openSignUpFormButton = document.querySelector(".sign-up-form__open");
const signUpFormContainer = document.querySelector(".sign-up-form-container");
const signUpButton = document.querySelector(".sign-up-button");

openSignUpFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUpFormContainer.style.display = "block";
});

closeSignUpFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUpFormContainer.style.display = "none";
});

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateSignUpForm(
    signUpFirstName.value,
    signUpLastName.value,
    signUpEmail.value,
    signUpPassword.value,
    signUpError
  );
});
