// Initialize global variables
var word1 = "javascript";
var word2 = "html";
var lives1 = 3;
var lives2 = 3;
var points1 = 0;
var points2 = 0;
var guessedLetters1 = [];
var guessedLetters2 = [];
var status1 = "";
var status2 = "";

// code for the game to start
function startGame() {
  if(lives1 <= 0 || lives2 <= 0) 
    alert("game over");
    return;

}


// Function to update the word display for player 1
function updateWord1() {
  var wordDisplay1 = "";
  for (var i = 0; i < word1.length; i++) {
    if (guessedLetters1.indexOf(word1[i]) !== -1) {
      wordDisplay1 += word1[i] + " ";
    } else {
      wordDisplay1 += "_ ";
    }
  }
  document.getElementById("word1").innerHTML = wordDisplay1;
}

// Function to update the word display for player 2
function updateWord2() {
  var wordDisplay2 = "";
  for (var i = 0; i < word2.length; i++) {
    if (guessedLetters2.indexOf(word2[i]) !== -1) {
      wordDisplay2 += word2[i] + " ";
    } else {
      wordDisplay2 += "_ ";
    }
  }
  document.getElementById("word2").innerHTML = wordDisplay2;
}

// Function to update the status for player 1
function updateStatus1() {
  if (word1 === guessedLetters1.join("")) {
    status1 = "You won! The word was " + word1;
    points1++;
    document.getElementById("points1").innerHTML = "Points: " + points1;
  } else { (lives1 <= 0) 
    status1 = "You have " + lives1 + " lives left.";
  }
  document.getElementById("status1").innerHTML = status1;
}


// Function to update the status for player 2
function updateStatus2() {
  if (word2 === guessedLetters2.join("")) {
    status2 = "You won! The word was " + word2;
    points2++;
    document.getElementById("points2").innerHTML = "Points: " + points2;
  } else { (lives1 <= 0) 
    status2 = "You have " + lives2 + " lives left.";
  }
  document.getElementById("status2").innerHTML = status2;
}

// Function to handle a letter guess for player 1
function guessLetter1(letter) {
if(lives1 <= 0) {
  alert("You have no lives left, the game is over.");
  return;
}
if (guessedLetters1.indexOf(letter) !== -1) {
  alert("You already guessed that letter.");
} else if (word1.indexOf(letter) === -1) {
  lives1--;
  document.getElementById("lives1").innerHTML = "Lives: " + lives1;
}else {
  guessedLetters1.push(letter);
}
updateWord1();
updateStatus1();
}

// Function to handle a letter guess for player 2
function guessLetter2(letter) {
if(lives2 <= 0) {
  alert("You have no lives left, the game is over.");
  return;
}
if (guessedLetters2.indexOf(letter) !== -1) {
  alert("You already guessed that letter.");
} else if (word2.indexOf(letter) === -1) {
  lives2--;
  document.getElementById("lives2").innerHTML = "Lives: " + lives2;
} else {
  guessedLetters2.push(letter);
}
updateWord2();
updateStatus2();
}


// Initialize the game
updateWord1();
updateWord2();
updateStatus1();
updateStatus2();
document.getElementById("points1").innerHTML = "Points: " + points1;
document.getElementById("points2").innerHTML = "Points: " + points2;
document.getElementById("lives1").innerHTML = "Lives: " + lives1;
document.getElementById("lives2").innerHTML = "Lives: " + lives2;

function restartGame() {
word1 = "javascript";
word2 = "html";
lives1 = 3;
lives2 = 3;
points1 = 0;
points2 = 0;
guessedLetters1 = [];
guessedLetters2 = [];
status1 = "";
status2 = "";

updateWord1();
updateWord2();
updateStatus1();
updateStatus2();
document.getElementById("points1").innerHTML = "Points: " + points1;
document.getElementById("points2").innerHTML = "Points: " + points2;
document.getElementById("lives1").innerHTML = "Lives: " + lives1;
document.getElementById("lives2").innerHTML = "Lives: " + lives2;
}