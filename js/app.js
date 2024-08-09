"use strict";
console.log("App connected");
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { validateSignInForm } from "./signInValidation";
import { validateSignUpForm } from "./signUpValidation";

//WEATHER WIDGET IMPORT
import { renderWeather } from "./weatherWidget";
renderWeather();

/* weatherWidget.currentHour = weatherWidget.getCurrentHour();
console.log("Current hour:", weatherWidget.currentHour);
weatherWidget.renderWeather(); */


// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const authService = getAuth(); // authService holds the authentication service (backend)

// Selecting sign-in form elements
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const signInForm = document.querySelector(".sign-in-form");
const submissionError = document.querySelector(".submittion-error");

/* signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateSignInForm(
    emailInput.value,
    passwordInput.value,
    emailError,
    passwordError
  );
}); */

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

//SIGN UP USER
function signUpUser() {
  //first we need to check validation, if we have errors we will not sign up the user
  const { signUpErrorStatus } = validateSignUpForm(
    signUpFirstName.value.trim(), //either true or false
    signUpLastName.value.trim(),
    signUpEmail.value.trim(),
    signUpPassword.value.trim(),
    signUpError
  );
  if (signUpErrorStatus()) {
    return; //if true (there is an error) we do not continue the function
  } else {
    const newUser = {
      firstname: signUpFirstName.value.trim(), //trim() removes white spaces from the beginning and the end of the string
      lastname: signUpLastName.value.trim(), //can be used later to greet the user
      signUpEmail: signUpEmail.value.trim(),
      signUpPassword: signUpPassword.value.trim(),
    };
    createUserWithEmailAndPassword(
      //is asynchronous, returns a promise
      authService,
      newUser.signUpEmail,
      newUser.signUpPassword
    )
      .then(() => {
        signUpForm.reset();
        signUpFormContainer.style.display = "none";
      })
      .catch((err) => console.log(err.message));
  }
}

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUpUser();
});

//HANDLE SIGN OUT

const signOutButton = document.querySelector(".sign-out-button");

function signOutUser() {
  signOut(authService) //signOut from where? from authService that is imported from firebase
    .then(() => {
      console.log("Sign out successful!");
      signOutButton.style.visibility = "hidden";
      signInForm.style.display = "flex";
    })
    .catch((err) => console.log(err.message));
}

signOutButton.addEventListener("click", (e) => {
  e.preventDefault();
  signOutUser();
});

//SIGN IN USER

function signInUser() {
  const { signInFormStatus } = validateSignInForm(
    emailInput.value,
    passwordInput.value,
    emailError,
    passwordError
  );
  if (signInFormStatus()) {
    return;
  } else {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        signInForm.reset();
        signOutButton.style.visibility = "visible";
        console.log("Sign in successful!");
      })
      .catch((err) => {
        submissionError.textContent = err.message;
      });
  }
}

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInUser();
});

