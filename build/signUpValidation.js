"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignUpForm = void 0;
const validateSignUpForm = (firstname, lastname, email, password, errorMsg) => {
  let errorStatus = false; //this variable is encapsulated.
  if (!firstname || !lastname || !email || !password) {
    errorStatus = true;
    errorMsg.style.visibility = "visible";
    errorMsg.textContent = "Please fill out all fields";
  } else {
    errorStatus = false;
    errorMsg.style.visibility = "hidden";
    errorMsg.textContent = "";
  }
  const signUpErrorStatus = () => {
    return errorStatus;
  };
  return {
    signUpErrorStatus
  };
};
exports.validateSignUpForm = validateSignUpForm;