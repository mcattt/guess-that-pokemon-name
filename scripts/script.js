/*inspiration from
 https://codepen.io/Elel/pen/EWqqjZ 
 https://codepen.io/cathydutton/pen/JjpxMm?editors=0010
 as well as chatGPT
 */

"use strict"


// Generation 1 (Kanto)
const gen1Pokemon = [
  "Abra",            // 4 letters
  "Onix",            // 4 letters
  "Seel",            // 4 letters
  "Ekans",           // 5 letters
  "Jynx",            // 4 letters
  "Haunter",         // 7 letters
  "Ditto",           // 5 letters
  "Zapdos",          // 6 letters
  "Grimer",          // 6 letters
  "Arbok",           // 5 letters
  "Vulpix",          // 6 letters
  "Weedle",          // 6 letters
  "Rattata",         // 7 letters
  "Pidgey",          // 6 letters
  "Snorlax",         // 7 letters
  "Nidoran",        // 8 letters
  "Nidorina",        // 8 letters
  "Dragonair",       // 9 letters
  "Arcanine",        // 8 letters
  "Spearow",         // 7 letters
  "Rhydon",          // 6 letters
  "Lickitung",       // 9 letters
  "Alakazam",        // 8 letters
  "Butterfree",      // 10 letters
  "Kabuto",          // 6 letters
  "Machop",          // 6 letters
  "Drowzee",         // 7 letters
  "Gengar"           // 6 letters
];

// Generation 2 (Johto)
const gen2Pokemon = [
  "Xatu",            // 4 letters
  "Bayleef",         // 7 letters
  "Pichu",           // 5 letters
  "Ledyba",          // 6 letters
  "Hoothoot",        // 8 letters
  "Quilava",         // 7 letters
  "Espeon",          // 6 letters
  "Umbreon",         // 7 letters
  "Aipom",           // 5 letters
  "Noctowl",         // 7 letters
  "Sneasel",         // 7 letters
  "Phanpy",          // 6 letters
  "Murkrow",         // 7 letters
  "Marill",          // 6 letters
  "Wooper",          // 6 letters
  "Gligar",          // 6 letters
  "Quagsire",        // 8 letters
  "Steelix",         // 7 letters
  "Girafarig",       // 9 letters
  "Donphan",         // 7 letters
  "Forretress",      // 10 letters
  "Octillery",       // 9 letters
  "Magcargo",        // 8 letters
  "Misdreavous",     // 11 letters
  "Heracross",       // 9 letters
  "Smeargle",        // 8 letters
  "Sudowoodo",       // 9 letters
  "Lanturn",         // 7 letters
  "Dunsparce",       // 9 letters
  "Ampharos"         // 8 letters
];

// Generation 3 (Hoenn)
const gen3Pokemon = [
  "Lotad",           // 5 letters
  "Seedot",          // 6 letters
  "Mudkip",          // 6 letters
  "Wingull",         // 7 letters
  "Nuzleaf",         // 7 letters
  "Wurmple",         // 7 letters
  "Shiftry",         // 7 letters
  "Lombre",          // 6 letters
  "Masquerain",      // 10 letters
  "Swellow",         // 7 letters
  "Beautifly",       // 9 letters
  "Dustox",          // 6 letters
  "Pelipper",        // 8 letters
  "Makuhita",        // 8 letters
  "Azurill",         // 7 letters
  "Numel",           // 5 letters
  "Snorunt",         // 7 letters
  "Swablu",          // 6 letters
  "Chimecho",        // 8 letters
  "Altaria",         // 8 letters
  "Whiscash",        // 8 letters
  "Tropius",         // 7 letters
  "Ludicolo",        // 8 letters
  "Sceptile",        // 8 letters
  "Cacturne",        // 8 letters
  "Crawdaunt",       // 9 letters
  "Hariyama",        // 8 letters
  "Sharpedo",        // 8 letters
  "Exploud",         // 7 letters
  "Metagross"        // 8 letters
];



// Generation 4 (Sinnoh)
const gen4Pokemon = [
  "Bidoof",          // 6 letters
  "Gligar",          // 6 letters
  "Shinx",           // 5 letters
  "Budew",           // 5 letters
  "Riolu",           // 5 letters
  "Chatot",          // 6 letters
  "Starly",          // 6 letters
  "Piplup",          // 6 letters
  "Burmy",           // 5 letters
  "Snover",          // 6 letters
  "Yanmega",         // 7 letters
  "Buneary",         // 7 letters
  "Mime Jr.",        // 7 letters
  "Happiny",         // 7 letters
  "Munchlax",        // 8 letters
  "Mantyke",         // 7 letters
  "Riolu",           // 5 letters
  "Lickilicky",      // 10 letters
  "Tangrowth",       // 10 letters
  "Electivire",      // 9 letters
  "Magmortar",       // 9 letters
  "Togekiss",        // 8 letters
  "Gallade",         // 7 letters
  "Dusknoir",        // 8 letters
  "Froslass",        // 8 letters
  "Probopass",       // 9 letters
  "Dusknoir"         // 8 letters
];

// Generation 5 (Unova)
const gen5Pokemon = [
  "Deino",           // 5 letters
  "Bouffalant",      // 10 letters
  "Ferrothorn",      // 10 letters
  "Eelektrik",       // 9 letters
  "Stunfisk",        // 8 letters
  "Litwick",         // 7 letters
  "Axew",            // 3 letters
  "Emolga",          // 6 letters
  "Cubchoo",         // 7 letters
  "Cryogonal",       // 9 letters
  "Golett",          // 6 letters
  "Pawniard",        // 8 letters
  "Rufflet",         // 7 letters
  "Vullaby",         // 7 letters
  "Heatmor",         // 7 letters
  "Durant",          // 6 letters
  "Deino",           // 5 letters
  "Cobalion",        // 8 letters
  "Terrakion",       // 9 letters
  "Virizion",        // 8 letters
  "Tornadus",        // 8 letters
  "Thundurus",       // 9 letters
  "Reshiram",        // 8 letters
  "Zekrom",          // 6 letters
  "Landorus",        // 8 letters
  "Kyurem",          // 6 letters
  "Keldeo",          // 6 letters
  "Meloetta"         // 8 letters
];

// Generation 6 (Kalos)
const gen6Pokemon = [
  "Xerneas",         // 7 letters
  "Yveltal",         // 7 letters
  "Zygarde",         // 7 letters
  "Diancie",         // 7 letters
  "Hoopa",           // 5 letters
  "Volcanion",       // 9 letters
  "Rowlet",          // 6 letters
  "Dartrix",         // 7 letters
  "Decidueye",       // 9 letters
  "Litten",          // 6 letters
  "Torracat",        // 8 letters
  "Incineroar",      // 10 letters
  "Popplio",         // 7 letters
  "Brionne",         // 7 letters
  "Primarina",       // 9 letters
  "Pikipek",         // 7 letters
  "Trumbeak",        // 8 letters
  "Toucannon",       // 9 letters
  "Yungoos",         // 7 letters
  "Gumshoos",        // 8 letters
  "Grubbin",         // 7 letters
  "Charjabug",       // 9 letters
  "Vikavolt",        // 8 letters
  "Crabrawler",      // 10 letters
  "Crabominable",    // 12 letters
  "Oricorio",        // 8 letters
  "Cutiefly",        // 8 letters
  "Ribombee",        // 8 letters
  "Rockruff",        // 8 letters
  "Lycanroc"         // 8 letters
];


// Generation 7 (Alola)
const gen7Pokemon = [
  "Wishiwashi",      // 10 letters
  "Mareanie",        // 8 letters
  "Toxapex",         // 7 letters
  "Mudbray",         // 7 letters
  "Mudsdale",        // 8 letters
  "Dewpider",        // 8 letters
  "Araquanid",       // 9 letters
  "Fomantis",        // 8 letters
  "Lurantis",        // 8 letters
  "Morelull",        // 8 letters
  "Shiinotic",       // 9 letters
  "Salandit",        // 8 letters
  "Salazzle",        // 8 letters
  "Stufful",         // 7 letters
  "Bewear",          // 6 letters
  "Bounsweet",       // 9 letters
  "Steenee",         // 7 letters
  "Tsareena",        // 8 letters
  "Comfey",          // 6 letters
  "Oranguru",        // 8 letters
  "Passimian",       // 9 letters
  "Wimpod",          // 6 letters
  "Golisopod",       // 9 letters
  "Sandygast",       // 9 letters
  "Palossand",       // 9 letters
  "Pyukumuku",       // 9 letters
  "Type: Null",      // 10 letters
  "Silvally",        // 8 letters
  "Minior",          // 6 letters
  "Komala"           // 6 letters
];

// Generation 8 (Galar)
const gen8Pokemon = [
  "Rookidee",        // 8 letters
  "Blipbug",         // 7 letters
  "Nickit",          // 6 letters
  "Gossifleur",      // 10 letters
  "Wooloo",          // 6 letters
  "Chewtle",         // 7 letters
  "Yamper",          // 6 letters
  "Rolycoly",        // 8 letters
  "Duraludon",       // 9 letters
  "Eternatus",       // 9 letters
  "Sobble",          // 6 letters
  "Drizzile",        // 8 letters
  "Inteleon",        // 8 letters
  "Grookey",         // 7 letters
  "Thwackey",        // 8 letters
  "Rillaboom",       // 9 letters
  "Scorbunny",       // 9 letters
  "Raboot",          // 6 letters
  "Cinderace",       // 9 letters
  "Sizzlipede",      // 10 letters
  "Centiskorch",     // 11 letters
  "Clobbopus",       // 9 letters
  "Grapploct",       // 9 letters
  "Sinistea",        // 8 letters
  "Polteageist",     // 11 letters
  "Hatenna",         // 7 letters
  "Hattrem",         // 7 letters
  "Hatterene",       // 9 letters
  "Impidimp"         // 8 letters
];

const gen9Pokemon = [
  "Klawf",        // 5 letters
  "Dolliv",       // 6 letters
  "Pawmi",        // 5 letters
  "Pawmo",        // 5 letters
  "Quaxly",       // 6 letters
  "Nacli",        // 5 letters
  "Shroodle",     // 8 letters
  "Glimmora",     // 8 letters
  "Wiglett",      // 7 letters
  "Bombirdier",   // 10 letters
  "Veluza",       // 6 letters
  "Sprigatito",   // 11 letters
  "Meowscarada",  // 12 letters
  "Annihilape",   // 10 letters
  "Mabosstiff",   // 10 letters
  "Lechonk",      // 7 letters
  "Armarouge",    // 9 letters
  "Brambleghast", // 12 letters
  "Scovillain",   // 10 letters
  "Quaquaval"     // 9 letters
];
const POINTS_EARNED = 3;

//player
const playerOne = {
  name: "",
  score: 0,
  updateName: function (playerName) {
    this.name = playerName;
    game.updatePlayerName(playerName);
  }
}

const game = {
  word: '',
  currentDifficulty: "easy",
  finalScore: 0,
  generation: 1,
  lives: 5,
  isRunning: false,
  isWon: false,
  wordbank: [],
  guess: [],
  pickedWords: [],
  hintButton: $('.hint-button'),
  scoreAnimation: $('.score-animation'),
  guessTextArea: $('.guesses-textarea'),
  dropdownMenu: $(".dropdown-menu"),
  difficultyButtons: $('.difficulty-buttons'),
  playerNameDisplay: $('.player-name-display'),
  joinGameButton: $('.join-game-button'),
  playAgainButton: $('.play-again-button'),
  exitButton: $('.exit-button'),
  playerForm: $('.player-form'),
  startGameButton: $('.start-game-button'),
  livesLeftText: $('#lives-left'),
  alphabetButtons: $('.alphabet-wrap'),
  //sets player name in display
  updatePlayerName: function (playerName) {
    this.playerNameDisplay.text("Hello, Trainer " + playerName + "!");
  },
  //sets difficulty
  setDifficulty: function (difficulty) {
    this.currentDifficulty = difficulty;

  },
  //switches to the current screen
  switchScreen(currentScreen) {
    $('.screen').hide();
    // and show current
    $(currentScreen).show();
  },

  //stores the selected generation into generationNumber, which then that array of words gets stored in wordBank with function storeWords
  handleDropdownChange: function (event) {
    const selectedOption = $(event.target).text();
    $('.dropdown-toggle').text(selectedOption);
    const generationNumber = parseInt(selectedOption.split(" ")[1]);
    game.generation = generationNumber;
    console.log("Selected Generation: " + game.generation);
  },

  //disables letters once they are guessed, changes the underscores to the guessed letter if it is in the word.
  //it also checks to see if the letters appears more than once to display it multiple times if needed
  handleLetterClick(event) {
    const clickedLetter = $(event.target).text();
    //pushes into guess variable
    game.guess.push(clickedLetter);
    //disables the letter
    $(event.target).prop("disabled", true);
    let found = false;
    for (let i = 0; i < this.word.length; i++) {
      if (clickedLetter.toLowerCase() === game.word[i].toLowerCase()) {
        //set to true if found
        found = true;
        const guessTextArray = game.guessTextArea.text().split('');
        guessTextArray[i] = game.word[i];
        game.guessTextArea.text(guessTextArray.join(''));
        playerOne.score += POINTS_EARNED;
        //animates the score
        animateScore(POINTS_EARNED);
        //updates the score display text
        currentScore();
        //checks if all the letters are guessed
        checkWin();

      }
      //checks each place in the array if the letter exists, if it gets to the end of the array and it hasnt been found then decrement lives by one
      else if (clickedLetter.toLowerCase() !== game.word[i].toLowerCase() && (i === (this.word.length - 1) && found === false)) {
        playerOne.score -= 2;
        animateScore(-2);
        currentScore();
        this.lives = this.lives - 1;
        //updates lives display text
        this.updateLives();

      }
    }

  },
  //resets everything back to default settings
  reset: function () {
    this.isWon = false;
    let playerName = '';
    this.word = '';
    this.guess = [];
    this.pickedWords = [],
      this.guessTextArea.empty();
    this.finalScore = 0;
    this.lives = 5;
    this.setLives();
    this.playerForm.val('');
    this.playerNameDisplay.text('');
    this.alphabetButtons.find('.letter-button').prop('disabled', false);
    $('.score-text').text('Score: ' + playerOne.score);
    this.playerForm.removeClass('hidden');
    this.startGameButton.addClass('disabled');
    this.scoreAnimation.addClass('hidden');
    playerOne.score = 0;
    playerOne.name = '';
    currentScore();
  },
  //sets the lives at initialization of the game
  setLives: function () {
    if (this.currentDifficulty === 'medium') {
      this.lives = 6;
    }
    else if (this.currentDifficulty === 'hard') {
      this.lives = 7;
    }
    //sets lives left display
    this.updateLives();
  },
  //updates lives display as they are lost, and checks if lives are at zero where it ends the game
  updateLives: function () {
    this.livesLeftText.text(this.lives);
    if (this.lives < 1) {
      this.switchScreen('#game-over-screen');
      setText();
      this.isRunning = false;
    }

  },

  setupWord: function () {

    //sets the wordbank of possible options to the selection generation
    switch (this.generation) {
      case 1:
        this.wordbank = gen1Pokemon;
        break;
      case 2:
        this.wordbank = gen2Pokemon;
        break;
      case 3:
        this.wordbank = gen3Pokemon;
        break;
      case 4:
        this.wordbank = gen4Pokemon;
        break;
      case 5:
        this.wordbank = gen5Pokemon;
        break;
      case 6:
        this.wordbank = gen6Pokemon;
        break;
      case 7:
        this.wordbank = gen7Pokemon;
        break;
      case 8:
        this.wordbank = gen8Pokemon;
        break;
      case 9:
        this.wordbank = gen9Pokemon;
        break;
    }

    //sets the words with a specific length into another array
    for (let i = 0; i < this.wordbank.length; i++) {
      if (this.currentDifficulty === 'hard') {
        if (this.wordbank[i].length >= 8) {
          this.pickedWords.push(this.wordbank[i]);
        }
      } if (this.currentDifficulty === 'medium') {
        if (this.wordbank[i].length >= 6 && this.wordbank[i].length <= 7) {
          this.pickedWords.push(this.wordbank[i]);
        }
      } if (this.currentDifficulty === 'easy') {
        if (this.wordbank[i].length < 6) {
          this.pickedWords.push(this.wordbank[i]);
        }

      }

    }

    //randomly picks the word from the pickedWords array and sets it as this.word
    let num = Math.floor(Math.random() * this.pickedWords.length);
    this.word = this.pickedWords[num];


    //appends underscores to the text area with the same amount of letters as the word
    for (let i = 0; i < this.word.length; i++) {
      this.guessTextArea.append("_");
    }

  }

}

//checks if game is won
function checkWin() {
  //automatically set to true
  let won = true;
  //iterates through word and if any word is still an underscore, won is set to false and it ends the loop
  for (let i = 0; i < game.word.length; i++) {
    if (game.guessTextArea.text()[i].toLowerCase() !== game.word[i].toLowerCase()) {
      won = false;
      break;
    }
  }

  if (won) {
    game.isWon = true;
    game.switchScreen('#game-over-screen');
    setText();
    game.isRunning = false;

  }

}


function setText() {
  //sets win or lose text
  let text = $('.win-lose-text');
  if (game.isWon) {
    text.text('You Win!');
  } else {
    text.text('You Lose :(!');
  }
  //sets score text
  calculateScore(playerOne.score);
  if (game.finalScore < 0) {
    game.finalScore = 0;
  }
  $('.final-score-text').text('Your Score: ' + game.finalScore);

  if (game.finalScore > $('.high-score-text').text()) {
    $('.high-score-text').text(game.finalScore);
  }
  //reveals the word
  $('.word-reveal').text('The word was ' + game.word);

}



//rehides the number once the animation is over
const transition = document.querySelector(".score-animation-wrap");

transition.addEventListener("animationend", () => {
  game.scoreAnimation.removeClass('elementToFadeInAndOut');
  game.scoreAnimation.addClass('hidden');
});


//animates the score based on if the player got a correct or incorrect guess, and updates the score display text
function animateScore(current) {
  if (current === POINTS_EARNED) {
    $('.score-animation').text('+3');
    $('.score-animation').css('color', 'green');
  }
  else if (current === -2 && playerOne.score > 0) {
    $('.score-animation').text('-2');
    $('.score-animation').css('color', 'rgb(139, 0, 0)');
  } else {
    $('.score-animation').text('0');
    $('.score-animation').css('color', 'rgb(139, 0, 0)');
  }
  currentScore();
  $('.score-animation').removeClass('hidden');
  $('.score-animation').addClass('elementToFadeInAndOut');

}
//updates the score display text, but wont show if negative. So if player's points are less than 0 it will just show 0
function currentScore() {
  $('.score-text').text('Score: ' + playerOne.score);
  if (playerOne.score < 0) {
    $('.score-text').text('Score: ' + 0);
  }

}
//calculates the final score , adding multipliers based off what difficulty was chosen
function calculateScore(playerScore) {
  if (game.currentDifficulty === 'easy') {
    game.finalScore = playerScore * 1;
  } else if (game.currentDifficulty === 'medium') {
    game.finalScore = playerScore * 1.5;
  } else if (game.currentDifficulty === 'hard') {
    game.finalScore = playerScore * 2;
  }

}

//sets the word and lives and runs the game
function start() {
  if (game.isRunning === true) {
    game.setupWord();
    game.setLives();

  }
}


//gives hint when button is clicked
function giveHint() {
  //breaks the text into an array to iterate through to check if the letter has been revealed or not
  const guessTextArray = game.guessTextArea.text().split('');
  //randomly picks a letter to show
  let i = Math.floor(Math.random() * game.word.length);
  const letterButtons = $('.letter-button');
  const letter = game.word[i].toLowerCase();

  if (guessTextArray[i] === '_') {
    guessTextArray[i] = game.word[i];
    game.guessTextArea.text(guessTextArray.join(''));
    //checking if the letter appears more than once
    for (let j = 0; j < game.word.length; j++) {
      //skips the letter that was just shown
      if (j === i) {
        continue;
      }
      if (game.word[i].toLowerCase() === game.word[j].toLowerCase()) {
        //shows the letter
        guessTextArray[j] = game.word[j];
        //then sets text back with updated letters
        game.guessTextArea.text(guessTextArray.join(''));
      }
    }

//iterates through array of buttons and disables the one that was shown
    for (let k = 0; k < letterButtons.length; k++) {
      if (letterButtons[k].textContent.toLowerCase() === letter) {
        letterButtons[k].disabled = true;
        // Exit the loop after disabling the button
        break; 
      }
    }
  } else {
    //if index of array has already been shown, rerun the function again
    giveHint();
  }
}

/*-----------------------------------------event listeners---------------------------------------------------------------------------- */
//calls the handleDropdownChange method when a generation is chosen
game.dropdownMenu.on("click", ".dropdown-item", function (event) {
  game.handleDropdownChange(event);
});


//updates player name, is disabled if there is no text. the form is hidden once name is added
game.joinGameButton.on('click', function () {
  if (!(playerOne.name)) {
    //updates playerName 
    const playerName = game.playerForm.val();
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);
    //disables the join button and enables the start button, then hides the player form
    game.joinGameButton.addClass('disabled');
    game.startGameButton.removeClass('disabled');
    game.playerForm.addClass('hidden');

  }
})
//same as above but when enter key is pressed
game.playerForm.on('keypress', function (e) {
  if (e.which == 13) {
    const playerName = game.playerForm.val();
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);
    game.joinGameButton.addClass('disabled');
    game.startGameButton.removeClass('disabled');
    game.playerForm.addClass('hidden');
  }
});

//switches to main, and starts the game
game.startGameButton.on('click', function () {
  game.isRunning = true;
  game.switchScreen('#main-screen');
  start();
})
//switches game back to splash screen and resets all to default
game.exitButton.on('click', function () {
  game.switchScreen('#splash-screen');
  game.isRunning = false;
  game.reset();
  game.generation = 1;
  $('.dropdown-toggle').text('Generation 1');
  game.currentDifficulty = "easy"
})


//enables the join game button once name is added
game.playerForm.on('keyup', function (event) {
  if (game.playerForm.val() !== 'null') {
    game.joinGameButton.removeClass('disabled');
  }
});

//sets difficulties
$('.btn-radio-easy').on('click', function () {
  game.setDifficulty('easy');
});

$('.btn-radio-medium').on('click', function () {
  game.setDifficulty('medium');
})

$('.btn-radio-hard').on('click', function () {
  game.setDifficulty('hard');
})

//calls function to handle each letter
game.alphabetButtons.on("click", ".letter-button", function (event) {
  game.handleLetterClick(event);
});


//play again, resets and starts again
game.playAgainButton.on('click', () => {
  game.isRunning = true;
  game.reset();
  game.switchScreen('#main-screen');
  start();
});

//gives hint and then checks if every letter has been guessed
game.hintButton.on('click', () => {
  giveHint();
  animateScore();
  checkWin();
})

//sets whatever difficulty chosen to be active, automatically sets easy on game load
$(document).ready(function () {
  $('.btn-radio-easy, .btn-radio-medium, .btn-radio-hard').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});