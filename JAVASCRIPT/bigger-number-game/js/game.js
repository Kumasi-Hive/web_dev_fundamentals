
const game = {
    first: 0,
    second: 0,
    points: 0
};

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const pContainer = document.querySelector("#points");

// Generate new
generateNew(game);

num1.addEventListener("click", checkResultForNum1);
num2.addEventListener("click", checkResultForNum2);


function checkResultForNum1(event) {

    if (game.first > game.second) {
        game.points = game.points + 1;
    } else {
        game.points = game.points - 1;
    }

    generateNew(game);
}

function checkResultForNum2(event) {

    if (game.second > game.first) {
        game.points = game.points + 1;
    } else {
        game.points = game.points - 1;
    }

    generateNew(game);
}



function generateNew(new_game) {
    pContainer.textContent = "Points :" + new_game.points;

    new_game.first = generateRandom();
    new_game.second = generateRandom();

    num1.textContent = new_game.first;
    num2.textContent = new_game.second;
}


function generateRandom() {
    return Math.floor(Math.random() * 100);
}
