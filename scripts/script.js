"use strict"
// Generation 1 (Kanto)
const gen1Pokemon = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
  "Growlithe",
  "Poliwag",
  "Abra"
];

// Generation 2 (Johto)
const gen2Pokemon = [
  "Chikorita",
  "Cyndaquil",
  "Totodile",
  "Togepi",
  "Marill",
  "Wooper",
  "Hoothoot",
  "Phanpy",
  "Larvitar",
  "Sneasel"
];

// Generation 3 (Hoenn)
const gen3Pokemon = [
  "Treecko",
  "Torchic",
  "Mudkip",
  "Ralts",
  "Zigzagoon",
  "Seedot",
  "Wurmple",
  "Shroomish",
  "Tailow",
  "Aron"
];

// Generation 4 (Sinnoh)
const gen4Pokemon = [
  "Turtwig",
  "Chimchar",
  "Piplup",
  "Bidoof",
  "Starly",
  "Shinx",
  "Kricketot",
  "Cranidos",
  "Riolu",
  "Gible"
];

// Generation 5 (Unova)
const gen5Pokemon = [
  "Snivy",
  "Tepig",
  "Oshawott",
  "Patrat",
  "Lillipup",
  "Pidove",
  "Blitzle",
  "Drilbur",
  "Tympole",
  "Deino"
];

// Generation 6 (Kalos)
const gen6Pokemon = [
  "Chespin",
  "Fennekin",
  "Froakie",
  "Bunnelby",
  "Fletchling",
  "Inkay",
  "Spritzee",
  "Swirlix",
  "Clauncher",
  "Tyrunt"
];

// Generation 7 (Alola)
const gen7Pokemon = [
  "Rowlet",
  "Litten",
  "Popplio",
  "Pikipek",
  "Yungoos",
  "Grubbin",
  "Rockruff",
  "Stufful",
  "Bounsweet",
  "Decidueye"
];
// Generation 8 (Galar)
const gen8Pokemon = [
  "Grookey",
  "Scorbunny",
  "Sobble",
  "Rookidee",
  "Blipbug",
  "Nickit",
  "Gossifleur",
  "Wooloo",
  "Chewtle",
  "Yamper"
];
//gen 9
const gen9Pokemon = [
  "Sprigatito",
  "Fuecoco",
  "Quaxly",
  "Lechonk",
  "Flamigo",
  "Clodsire",
  "Farigiraf",
  "Tinkaton",
  "Wiglett",
  "Tatsugiri"
];



const game = {
  word: '',
  wordbank: [],
  guess: [],
  guessTextArea: $('.guesses-textarea'),
  dropdownMenu: $(".dropdown-menu"),
  difficultyButtons: $('.difficulty-buttons'),
  currentDifficulty: "easy",
  generation: 1,
  isRunning: false,
  playerNameDisplay: $('.player-name-display'),
  joinGameButton: $('.join-game-button'),
  exitButton: $('.exit-button'),
  playerForm: $('.player-form'),
  startGameButton: $('.start-game-button'),
  lives: 5,
  livesLeftText: $('#lives-text'),
  alphabetButtons: $('.alphabet-wrap'),



  //sets player name in display
  updatePlayerName: function (playerName) {
    this.playerNameDisplay.text("Hello, Trainer " + playerName + "!");

  },
  //sets difficulty
  setDifficulty: function (difficulty) {
    this.currentDifficulty = difficulty;

  },
//stores the selected generation into generationNumber, which then that array of words gets stored in wordBank with function storeWords
  handleDropdownChange: function (event) {
    const selectedOption = $(event.target).text();
    const generationNumber = parseInt(selectedOption.split(" ")[1]);
    game.generation = generationNumber;
    console.log("Selected Generation: " + game.generation);
   
    

  },
//switches to the current screen
  switchScreen(currentScreen) {
    $('.screen').hide();
    // and show current
    $(currentScreen).show();

  },


//sets the amount of lives based on choice, default is 5
  setLives() {
    if (this.currentDifficulty === 'medium') {
      this.lives = 6;
    }
    else if (this.currentDifficulty === 'hard') {
      this.lives = 7;
    }
    this.livesLeftText.append(this.lives);



  },
 

  handleLetterClick(event) {
    const clickedLetter = $(event.target).text();
    game.guess.push(clickedLetter);
    $(event.target).prop("disabled", true);

for( let i=0; i< this.word.length; i++){
  if (clickedLetter.toLowerCase() === game.word[i].toLowerCase()) {
    const guessTextArray = game.guessTextArea.text().split('');
    guessTextArray[i] = game.word[i];
    game.guessTextArea.text(guessTextArray.join(''));
  }
else if(clickedLetter.toLowerCase() !== game.word[i].toLowerCase() && i===(this.word.length - 1)){
  this.lives = this.lives-1;
  updateLives();
//change the number in the corner
}

  } 

}


  }








//player
const playerOne = {
  name: "",
  score: 0,
  updateName: function (playerName) {
    this.name = playerName;
    game.updatePlayerName(playerName);
  }
}







// Event listener for dropdown items



//stores random word from the wordbank
function chooseWord() {
  let num = Math.floor(Math.random() * game.wordbank.length);
  game.word = game.wordbank[num];
}

//sets the word and lives 
function start(){
  if (game.isRunning === true){
    storeWords();
    chooseWord();
    game.setLives();
    setupWord();
  }
}




//stores the array in wordBank nased on which generation was chosen
function storeWords(){
  switch (game.generation) {
    case 1:
      game.wordbank = gen1Pokemon;
      break;
    case 2:
      game.wordbank = gen2Pokemon;
      break;
    case 3:
      game.wordbank = gen3Pokemon;
      break;
    case 4:
      game.wordbank = gen4Pokemon;
      break;
    case 5:
      game.wordbank = gen5Pokemon;
      break;
    case 6:
      game.wordbank = gen6Pokemon;
      break;
    case 7:
      game.wordbank = gen7Pokemon;
      break;
    case 8:
      game.wordbank = gen8Pokemon;
      break;
    case 9:
      game.wordbank = gen9Pokemon;
      break;
  }
};
//sets the textarea to underscores for how long the picked word is
function setupWord(pokemonName){
for (let i=0; i<game.word.length; i++){
game.guessTextArea.append("_");
}
}


function search(){
  
}

function updateLives(){
  if (game.lives <1){
    game.switchScreen('#game-over-screen');
    game.isRunning = false;
  }

}



/* 
play again on click:
storeWords()
chooseword()
setupWord()
game.setLives
switchscreen(main)




*/ 















/*-----------------------------------------event listeners---------------------------------------------------------------------------- */
game.dropdownMenu.on("click", ".dropdown-item", function (event) {
  game.handleDropdownChange(event);
});


//updates player name, is disabled if there is no text. the form is hidden once name is added
game.joinGameButton.on('click', function () {
  if (!(playerOne.name)) {
    const playerName = game.playerForm.val();
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);

    game.joinGameButton.addClass('disabled');
    game.startGameButton.removeClass('disabled');
    game.playerForm.addClass('hidden');

  }
})



//switches to main, and starts the game
game.startGameButton.on('click', function () {
  game.switchScreen('#main-screen');
  game.isRunning = true;
  start();

})
game.exitButton.on('click', function (){
game.switchScreen('#splash-screen');
game.isRunning = false;
})


//enables the join game button once name is added
game.playerForm.on('keyup', function (event) {

  if (game.playerForm.val() !== 'null') {
    game.joinGameButton.removeClass('disabled');
  }
});



//ask abt this, make it into one function

$('#btn-radio-easy').on('click', function () {
  game.setDifficulty('easy');

});


$('#btn-radio-medium').on('click', function () {
  game.setDifficulty('medium');

})


$('#btn-radio-hard').on('click', function () {
  game.setDifficulty('hard');

})


game.alphabetButtons.on("click", ".letter-button", function (event) {
  game.handleLetterClick(event);
});



