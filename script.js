// script.js

function changeText() {
    document.getElementById("message").innerHTML =
        "Hello Suhas! JavaScript is working.";
}

document.getElementById("btn").addEventListener("click", changeText);