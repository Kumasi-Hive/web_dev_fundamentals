
const button = document.querySelector("#click-button");
const showButton = document.querySelector(".show-me");



showButton.addEventListener("mouseenter", showMe);
button.addEventListener("click", onClick);



function onClick(event) {
    console.log("Clicked");
}

function showMe(event) {
    console.log(event);
    console.log("Show Me Clicked");
}

