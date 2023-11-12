import { handleLogin, enterButton } from "./login.js";

export const logInButton = document.querySelector(".log-in");
export const makeAccountButton = document.querySelector(".make-account");
export const userIcon = document.getElementById("user-icon");
export const plusIcon = document.getElementById("plus-icon");
export const resetPassword = document.getElementById("reset-password");
export const forgotPassword = document.getElementById("forgot-password");
export const retypeInput = document.getElementById("retype");
export const retypeLabel = document.getElementById("retype-label");
export const loginPageTitle = document.getElementById("login-title");

//flip style/text to highlight the login option
export function chooseLogIn (){
    logInButton.classList.add("option-clicked");
    logInButton.classList.remove("option-unclicked");
    makeAccountButton.classList.remove("option-clicked");
    makeAccountButton.classList.add("option-unclicked");
    userIcon.src = "../../images/icons/user-dark.svg";
    plusIcon.src = "../../images/icons/circle-plus.svg";
    retypeInput.style.display = "none";
    retypeLabel.style.display = "none";
    forgotPassword.style.display = "block";
    loginPageTitle.innerHTML = "Log in here";
}

//flip style/text to highlight the make account option
export function chooseMakeAccount(){
    makeAccountButton.classList.add("option-clicked");
    makeAccountButton.classList.remove("option-unclicked");
    logInButton.classList.add("option-unclicked");
    logInButton.classList.remove("option-clicked");
    plusIcon.src = "../../images/icons/circle-plus-dark.svg";
    userIcon.src = "../../images/icons/user.svg";
    retypeInput.style.display = "block";
    retypeLabel.style.display = "block";
    forgotPassword.style.display = "none";
    resetPassword.style.display = "none";
    loginPageTitle.innerHTML = "New account";
}

//only show reset when make account is selected
export function showResetPassword(){
    resetPassword.style.display = "block";
}

//reset forgot password button
export function sendResetEmail() {
    resetPassword.style.display = "none";
    forgotPassword.innerHTML = "Email has been sent!"
    setTimeout(() => {
        forgotPassword.innerHTML = "Forgot your password?";
      }, "5000");
}

//export the many event listeners to app.js
export function loginWidget(){
    logInButton.addEventListener("click", chooseLogIn);
    makeAccountButton.addEventListener("click", chooseMakeAccount);
    forgotPassword.addEventListener("click", showResetPassword);
    resetPassword.addEventListener("click", sendResetEmail);
    enterButton.addEventListener('click', handleLogin);
}

