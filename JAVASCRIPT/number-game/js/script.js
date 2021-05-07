var original_number = generateRandom();
var guessed = generateRandom();

const smallest = 1;
const biggest = 100;

while (true) {

    if (guessed < original_number) {
        console.log("You guessed lower !! " + guessed);
        guessed = Math.floor((guessed + biggest) / 2);
    }
    else if (guessed > original_number) {
        console.log("You guessed Higher !! " + guessed);
        guessed = Math.floor((guessed + original_number) / 2);
    } else {
        console.log("You guessed right !! " + guessed);
        break;
    }
}

function generateRandom() {
    return Math.floor(Math.random() * 100);
}