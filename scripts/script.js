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
  "Klawf",
  "Dolliv",
  "Pawmi",
  "Pawmo",
  "Quaxly",
  "Nacli",
  "Shroodle",
  "Glimmora",
  "Wiglett",
  "Bombirdier",
  "Veluza",
  "Sprigatito",
  "Meowscarada",
  "Annihilape",
  "Mabosstiff",
  "Lechonk",
  "Armarouge",
  "Brambleghast",
  "Scovillain",
  "Quaquaval"

  //comments for length


]
const POINTS_EARNED = 3;

const game = {
  word: '',
  wordbank: [],
  guess: [],
  pickedWords: [],
  guessTextArea: $('.guesses-textarea'),
  dropdownMenu: $(".dropdown-menu"),
  difficultyButtons: $('.difficulty-buttons'),
  currentDifficulty: "easy",
  generation: 1,
  isRunning: false,
  isWon: false,
  finalScore: 0,
  playerNameDisplay: $('.player-name-display'),
  joinGameButton: $('.join-game-button'),
  playAgainButton: $('.play-again-button'),
  exitButton: $('.exit-button'),
  playerForm: $('.player-form'),
  startGameButton: $('.start-game-button'),
  lives: 5,
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
  //stores the selected generation into generationNumber, which then that array of words gets stored in wordBank with function storeWords
  handleDropdownChange: function (event) {
    const selectedOption = $(event.target).text();
    $('.dropdown-toggle').text(selectedOption);
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



  handleLetterClick(event) {
    const clickedLetter = $(event.target).text();
    game.guess.push(clickedLetter);
    $(event.target).prop("disabled", true);
    let found = false;
    for (let i = 0; i < this.word.length; i++) {
      if (clickedLetter.toLowerCase() === game.word[i].toLowerCase()) {
        found = true;
        const guessTextArray = game.guessTextArea.text().split('');
        guessTextArray[i] = game.word[i];
        game.guessTextArea.text(guessTextArray.join(''));
        playerOne.score += POINTS_EARNED;
        animateScore(POINTS_EARNED);
        currentScore();
        checkWin();

      }
      //checks each place in the array if the letter exists, if it gets to the end of the array and it hasnt been found then decrement lives by one
      else if (clickedLetter.toLowerCase() !== game.word[i].toLowerCase() && (i === (this.word.length - 1) && found === false)) {
        playerOne.score -= 2;
        animateScore(-2);
        currentScore();
        this.lives = this.lives - 1;
        this.updateLives();

      }



    }

  },
  reset: function () {

    this.word = '';
    this.guess = [];
    this.pickedWords = [],
      this.guessTextArea.empty();
    this.lives = 5;
    this.setLives();
    this.alphabetButtons.find('.letter-button').prop('disabled', false);
    this.updateLives();
    this.isWon = false;
    playerOne.score = 0;
    $('.score-text').text('Score: ' + playerOne.score);
    this.finalScore = 0;
    playerOne.name = "";
    game.playerForm.removeClass('hidden');
    game.playerForm.val('');
    let playerName = '';
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);
    this.playerNameDisplay.text('');
    game.startGameButton.addClass('disabled');
    $('.score-animation').addClass('hidden');


  },

  setLives: function () {
    if (this.currentDifficulty === 'medium') {
      this.lives = 6;
    }
    else if (this.currentDifficulty === 'hard') {
      this.lives = 7;
    }
    this.livesLeftText.text(this.lives);

  },

  updateLives: function () {
    this.livesLeftText.text(this.lives);
    if (this.lives < 1) {
      this.switchScreen('#game-over-screen');
      setText(game.isWon);
      displayScore();
      revealWord();
      this.isRunning = false;
    }

  },

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




function checkWin() {
  let won = true;
  for (let i = 0; i < game.word.length; i++) {
    if (game.guessTextArea.text()[i].toLowerCase() !== game.word[i].toLowerCase()) {
      won = false;
      break;
    }
  }

  if (won) {
    console.log('You win');
    game.isWon = true;
    game.switchScreen('#game-over-screen');
    setText(game.isWon);
    displayScore();
    revealWord();
  }

}


function setText(winCondition) {
  let text = $('.win-lose-text');
  if (winCondition === true) {
    text.text('You Win!');
  } else {
    text.text('You Lose :(!');
  }
}



function revealWord() {
  $('.word-reveal').text('The word was ' + game.word);
}


function displayScore() {
  calculateScore(playerOne.score);
  if (game.finalScore < 0) {
    game.finalScore = 0;
  }
  $('.final-score-text').text('Your Score: ' + game.finalScore);

  if (game.finalScore > $('.high-score-text').text()) {
    $('.high-score-text').text(game.finalScore);
  }

}

const transition = document.querySelector(".score-animation-wrap");
transition.addEventListener("animationend", () => {
  $('.score-animation').removeClass('elementToFadeInAndOut');
  $('.score-animation').addClass('hidden');
});



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

function currentScore() {
  $('.score-text').text('Score: ' + playerOne.score);
  if (playerOne.score < 0) {
    $('.score-text').text('Score: ' + 0);
  }

}

function calculateScore(playerScore) {
  if (game.currentDifficulty === 'easy') {
    game.finalScore = playerScore * 1;
  } else if (game.currentDifficulty === 'medium') {
    game.finalScore = playerScore * 1.5;
  } else if (game.currentDifficulty === 'hard') {
    game.finalScore = playerScore * 2;
  }

}






// Event listener for dropdown items



//stores random word from the wordbank
function chooseWord() {
  let num = Math.floor(Math.random() * game.pickedWords.length);
  game.word = game.pickedWords[num];
}

//sets the word and lives 
function start() {
  if (game.isRunning === true) {
    storeWords();
    sortedWords(game.pickedWords);
    chooseWord();
    game.setLives();
    setupWord();
  }
}



function giveHint() {
  const guessTextArray = game.guessTextArea.text().split('');
  let i = Math.floor(Math.random() * game.word.length);

  const letterButtons = $('.letter-button');
  const letter = game.word[i].toLowerCase(); // Convert the letter to uppercase for matching

  if (guessTextArray[i] === '_') {
    guessTextArray[i] = game.word[i];
    game.guessTextArea.text(guessTextArray.join(''));
//checking if the letter appears more than once
    for (let j = 0; j < game.word.length; j++) {
      if (j === i) {
        continue;
      }
      if (game.word[i].toLowerCase() === game.word[j].toLowerCase()) {
        guessTextArray[j] = game.word[j];
        game.guessTextArea.text(guessTextArray.join(''));
      }
    }


    for (let k = 0; k < letterButtons.length; k++) {
      if (letterButtons[k].textContent.toLowerCase() === letter) {
        letterButtons[k].disabled = true;
        console.log('Letter:', letter);
        break; // Exit the loop after disabling the button
      }
    }  
  } else {
    giveHint();
  }
}
















//stores the array in wordBank nased on which generation was chosen
function storeWords() {
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
}


function sortedWords(wordArray) {
  // let wordArray = new Array();
  for (let i = 0; i < game.wordbank.length; i++) {
    if (game.currentDifficulty === 'hard') {
      if (game.wordbank[i].length >= 8) {
        wordArray.push(game.wordbank[i]);

      }
    } if (game.currentDifficulty === 'medium') {
      if (game.wordbank[i].length >= 6 && game.wordbank[i].length <= 7) {
        wordArray.push(game.wordbank[i]);



      }

    } if (game.currentDifficulty === 'easy') {
      if (game.wordbank[i].length < 6) {
        wordArray.push(game.wordbank[i]);



      }

    }




  }
}



//sets the textarea to underscores for how long the picked word is
function setupWord() {
  for (let i = 0; i < game.word.length; i++) {
    game.guessTextArea.append("_");
  }
}



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
  game.isRunning = true;
  game.switchScreen('#main-screen');

  start();

})
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



//ask abt this, make it into one function

$('.btn-radio-easy').on('click', function () {
  game.setDifficulty('easy');

});


$('.btn-radio-medium').on('click', function () {
  game.setDifficulty('medium');

})


$('.btn-radio-hard').on('click', function () {
  game.setDifficulty('hard');

})


game.alphabetButtons.on("click", ".letter-button", function (event) {
  game.handleLetterClick(event);
});

game.playAgainButton.on('click', () => {

  game.isRunning = true;
  game.reset();
  game.switchScreen('#main-screen');
  start();





});

$('.hint-button').on('click', () =>{
giveHint();
checkWin();


})

$(document).ready(function() {
  $('.btn-radio-easy, .btn-radio-medium, .btn-radio-hard').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});