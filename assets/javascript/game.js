
var wordList = ["yoda", "skywalker", "vader", "solo", "chewbacca"];//array of words to be chosen from
var counter = 10; //counter for number of guesses left
var randomWord = wordList[Math.floor(Math.random() * wordList.length)]; //variable that selects random word from array
var dashes = [];
var wins = 0; //count for number of wins
// for loop to push dashes into place of random word
for (i = 0; i < randomWord.length; i++) {
    dashes.push("-");
    // randomWordArray.push(randomWord[i]);
}
function myBackgroundDark() {
    document.body.style.background = "url('assets/images/vader.jpg')";
}
function myBackgroundLight() {
    document.body.style.background = "url('assets/images/lightside.jpg')";
}
console.log(randomWord);
console.log(dashes);


//initial load of the dashes onto the screen
window.onload = function () {
    document.getElementById("hiddenWord").innerHTML = dashes;
};
document.onkeyup = function (userguess) {
    //intitialize variable and grab the element for wrong letters guessed
    var lettersGuessed = document.getElementById("wrongGuesses");
    //alphabet array to check keystrokes against 
    var lettercheck = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // if statement to check keystrokes against array then print the guesses to the screen
    var guessesLeft = document.getElementById("numberOfGuesses");

    if (lettercheck.indexOf(userguess.key.toLowerCase()) >= 0) {
        lettersGuessed.textContent += userguess.key + ", ";
        var currentGuess = userguess.key.toLowerCase();
        counter = counter - 1;
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === currentGuess) {
                dashes[i] = currentGuess;
            };
        };
    };

    document.getElementById("winner").innerHTML = wins;
    document.getElementById("numberOfGuesses").innerHTML = counter;
    document.getElementById("hiddenWord").innerHTML = dashes;

    console.log(dashes.join(""));
    if (dashes.join("") === randomWord) {

        alert("Congratulation you won!");
        wins++;
        counter = 10; //counter for number of guesses left
        randomWord = wordList[Math.floor(Math.random() * wordList.length)]; //variable that selects random word from array
        dashes = [];
        document.getElementById("wrongGuesses").innerHTML = "";

    }
    if (counter == 0) {
        alert("You lose!");
        counter = 10; //counter for number of guesses left
        randomWord = wordList[Math.floor(Math.random() * wordList.length)]; //variable that selects random word from array
        dashes = [];
        document.getElementById("wrongGuesses").innerHTML = "";

    }


};
