"use strict";
console.log("App connected");
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { validateSignInForm } from "./signInValidation";
import { validateSignUpForm } from "./signUpValidation";

//WEATHER WIDGET IMPORT
import { renderWeather } from "./weatherWidget";
renderWeather();

/* weatherWidget.currentHour = weatherWidget.getCurrentHour();
console.log("Current hour:", weatherWidget.currentHour);
weatherWidget.renderWeather();  */

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const authService = getAuth(); // authService holds the authentication service (backend)

// Check authentication state on page load
onAuthStateChanged(authService, (user) => {
  if (user) {
    // User is signed in
    console.log(`User is logged in as: ${user.email}`);

    signInFormContainer.style.display = "none";
    signOutButton.style.visibility = "visible";
    userName.textContent = user.email;
  } else {
    // No user is signed in
    console.log("No user is currently logged in.");
    signInFormContainer.style.display = "block";
    signOutButton.style.visibility = "hidden";
    userName.textContent = "";
  }
});
// Selecting sign-in form elements
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const signInForm = document.querySelector(".sign-in-form");
const signInError = document.querySelector(".sign-in-error");
const signInFormContainer = document.querySelector(".sign-in-form-container");
const userName = document.querySelector(".user-name");

// Add event listener to sign-in button
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
const closeSignUpFormButton = document.querySelector(".form-close");
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
        signInFormContainer.style.display = "none";
        signOutButton.style.visibility = "visible";
        console.log("Sign in successful!");

        const user = authService.currentUser;
        if (user) {
          console.log(`Logged in as: ${user.email}`);
        } else {
          console.log("No user is currently logged in.");
        }
      })

      .catch((err) => {
        signInError.style.visibility = "visible";
        console.log("Sign in failed:", err.message);
      });
  }
}

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInUser();
});

document.addEventListener("DOMContentLoaded", () => {
  //ADD NEW POST
  const addPostButton = document.querySelector(".new-post-button");
  const newPostContainer = document.querySelector(".new-post-container");
  const newPostForm = document.querySelector(".new-post-form");
  const newPostTitle = document.querySelector("input.post-title");
  const newPostCategory = document.querySelector("select.new-post-category");
  const newPostContent = document.querySelector("textarea.new-post-content");
  const newPostFormClose = document.querySelector(".new-post-button-close");


  const newPostSubmitError = document.querySelector(".new-post--submit-error");

  addPostButton.addEventListener("click", (e) => {
    e.preventDefault();
    newPostContainer.style.visibility = "visible";
    newPostFormClose.style.visibility = "visible";
  });

  newPostFormClose.addEventListener("click", (e) => {
    e.preventDefault();
    newPostContainer.style.visibility = "hidden";
    newPostFormClose.style.visibility = "hidden";
  });

  //select elements where posts from local storage  will be rendered
  const postsContainer = document.querySelector(".post-container");

  // Load stored posts from localStorage
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  console.log("Posts array outside the function:", posts);

  //convert the data from local storage to a string
  localStorage.setItem("posts", JSON.stringify(posts));

  // render stored posts
  posts.forEach((post) => {
    // Create a new post body element for each post
    const postBody = document.createElement("div");
    postBody.classList.add("post");
    postBody.dataset.category = post.category;

    const postTitle = document.createElement("h2");
    postTitle.classList.add("post-title");
    postTitle.textContent = post.title;

    const postCategory = document.createElement("p");
    postCategory.classList.add("post-category");
    postCategory.textContent = post.category;

    const postContent = document.createElement("p");
    postContent.classList.add("new-post-content");
    postContent.textContent = post.content;

    postBody.appendChild(postTitle);
    postBody.appendChild(postCategory);
    postBody.appendChild(postContent);

    postsContainer.appendChild(postBody);
  });

  // Filter functionality 
  const filterButtons = document.querySelectorAll(".tag-button"); // Select all filter buttons

  const filterPosts = (event) => {
    const currentButton = event.currentTarget; // Select button that was clicked
    const currentButtonFilterBy = currentButton.dataset.filterBy; // Get filter criteria
    const filteredPosts = [...document.querySelectorAll(".post")].filter(
      (post) => {
        if (currentButtonFilterBy === "all") {
          // If criteria matches "All" parameter, show everything
          return true;
        } else {
          return post.dataset.category === currentButtonFilterBy; // Check if post category matches filter criteria
        }
      }
    );
    postsContainer.innerHTML = ""; // Empty the container that holds the posts

    filteredPosts.forEach((post) => {
      // Fill empty container with posts which match chosen filter criteria
      postsContainer.appendChild(post);
    });
  };

  filterButtons.forEach((filterButton) => {
    // Add event listener to every filter-button, and execute the function when button is clicked
    filterButton.addEventListener("click", filterPosts);
  });











  newPostForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Access the values of the input elements
    const addedPostTitle = newPostTitle.value;
    const addedPostCategory = newPostCategory.value;
    const addedPostContent = newPostContent.value;

    //Log the values to the console

    // store the values in an array
    posts.push({
      title: addedPostTitle,
      category: addedPostCategory,
      content: addedPostContent,
    });

    console.log("Posts array inside function:", posts);

    //store the posts in local storage
    localStorage.setItem("posts", JSON.stringify(posts));

    //check if the posts are stored in local storage
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    console.log("Stored posts:", storedPosts);

    newPostForm.reset();
    newPostContainer.style.visibility = "hidden";

    return posts;
  });
});
