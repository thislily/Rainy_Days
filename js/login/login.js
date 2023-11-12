import { retypeInput, loginPageTitle, makeAccountButton } from "./choose-option.js";

export const userNameInput = document.getElementById("username");
export const emailInput = document.getElementById("email");
export const passwordInput = document.getElementById("password");
export const userNameDisplay = document.getElementById("user-name-display");
export const enterButton = document.querySelector(".log-in-now");
export let title = "Log in here";


//checkout login inputs for validity and display username in nav
export function handleLogin() {
  const newUsername = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const retypePassword = retypeInput.value.trim();

  let validUsername = false;
  if (newUsername !== "" && newUsername.length <= 12) {
    localStorage.setItem("username", newUsername);

    userNameDisplay.innerHTML = `Hello, ${newUsername}!`;
    validUsername = true;
  } else {
    alert("Oops! Your username cannot exceed 12 characters!");
  }


  // at some point, does Regex stop looking like nonsense? please say yes.
  let validEmail = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Oops! That's not a valid email format!");
    return;
  } else {
    validEmail = true;
  }

  //really, it looks like nothing to me, but it does work so..
  let validPassword = false;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Oops! Your password must be at least 8 characters and contain at least 1 number!"
    );
    return;
  } else {
    validPassword = true;
  }

  let validRetype = false;
  if (retypeInput.style.display === "block") {
    if (password !== retypePassword) {
      alert("Oops! Your retyped password doesn't match!");
      return;
    } else {
      validRetype = true;
    }
  } else {
    validRetype = true;
  }

  enterButton.disabled = !(
    validEmail &&
    validUsername &&
    validPassword &&
    validRetype
  );

  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  retypeInput.value = "";

  
  loginPageTitle.innerHTML = "Welcome!"
  setTimeout(changeLoginTitle, 5000);
  
}

//just changes the title
export function changeLoginTitle(){
    if (makeAccountButton.classList.contains("option-clicked")){
        title = "Make account"
    }; 
    loginPageTitle.innerHTML = title;
}


//check if there is a username in local storage
export function checkForUsername() {
  const storedUsername = localStorage.getItem("username");

  if (storedUsername) {
    userNameDisplay.innerHTML = `Hello, ${storedUsername}!`;
  }
}
