const image = document.querySelector('img');

image.addEventListener('click', openPresent);

function openPresent(event) {

    const image = event.target;
    image.removeEventListener('click', openPresent);


    const closed = document.querySelector("#closed");
    const opened = document.querySelector("#opened");

    closed.classList.add("hidden");
    opened.classList.remove("hidden");

}




































// const image = document.querySelector('img');

// image.addEventListener('click', openPresent);

// function openPresent(event) {

//     const image = document.createElement("img");
//     image.src = "https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif";


//     const title = document.createElement("h1");
//     title.textContent = "Hooray!!";

//     const section = document.querySelector("section");
//     section.innerHTML = "";
//     section.appendChild(title);
//     section.appendChild(image);

//     image.removeEventListener('click', openPresent);
// }