console.log("StyleSync is running!");/* =========================================
   LOGIN / SIGN UP SWITCH
========================================= */

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");


if (loginTab && signupTab) {

    loginTab.addEventListener("click", function () {

        loginTab.classList.add("active");

        signupTab.classList.remove("active");

        loginForm.classList.remove("hidden");

        signupForm.classList.add("hidden");

    });


    signupTab.addEventListener("click", function () {

        signupTab.classList.add("active");

        loginTab.classList.remove("active");

        signupForm.classList.remove("hidden");

        loginForm.classList.add("hidden");

    });

}
///////////////////////////////////
//////////////////////////////////
console.log("StyleSync is running!");


// ================================
// HEART BUTTON
// ================================

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        if (button.textContent.trim() === "♡") {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }

    });

});


// ================================
// OCCASION BUTTONS
// ================================

const occasionCards = document.querySelectorAll(".occasion-card");

occasionCards.forEach(function (card) {

    card.addEventListener("click", function () {

        alert("Style category selected!");

    });

});