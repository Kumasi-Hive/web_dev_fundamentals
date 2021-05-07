
// ----
// MAIN
// ----
const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

const boxes = document.querySelectorAll("#grid div");



for (const box of boxes) {
  box.addEventListener("click", changeToX);
}


function changeToX(event) {

  const div = event.target;
  const image = document.createElement("img");
  image.src = X_IMAGE_URL;

  div.innerHTML = '';

  div.appendChild(image);

  copmuterChoosen();
}


// Get Random number - 0,1 => 9


function copmuterChoosen() {

  const allBoxes = document.querySelectorAll("#grid div");
  const freeBoxes = [];

  // going through all boxes
  for (const box of boxes) {

    // check if it has an image
    let img = box.querySelector('img');

    // add to freeBoxes list
    if (!img) {
      freeBoxes.push(box);
    }
  }

  const boxPosition = Math.floor(Math.random() * freeBoxes.length);
  const freeBox = freeBoxes[boxPosition];

  const image = document.createElement("img");
  image.src = O_IMAGE_URL;

  freeBox.appendChild(image);
}