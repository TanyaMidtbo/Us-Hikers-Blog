"use strict";

var _signInValidation = require("./signInValidation.js");
console.log("test");
//selecting the sign-in form elements

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const signInForm = document.querySelector(".sign-in-form");
const submissionError = document.querySelector(".submittion-error");
signInButton.addEventListener("click", e => {
  e.preventDefault();
  (0, _signInValidation.validateSignInForm)(emailInput.value, passwordInput.value, emailError, passwordError);
});