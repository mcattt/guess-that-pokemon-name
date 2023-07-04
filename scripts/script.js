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
  "Jangmo-o"
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




const game = {
   dropdownMenu:$(".dropdown-menu"),
  difficultyButtons: $('.difficulty-buttons'),
  currentDifficulty: "easy",
  generation: 1,
  isRunning: false,
  playerNameDisplay: $('.player-name-display'),
  joinGameButton: $('.join-game-button'),
  playerForm: $('.player-form'),
  startGameButton: $('.start-game-button'),
   

  updatePlayerName: function (playerName) {
    this.playerNameDisplay.text("Hello, Trainer "+ playerName + "!");

  },
  setDifficulty: function(difficulty){
    this.currentDifficulty = difficulty;

},
 handleDropdownChange: function(event) {
  const selectedOption = $(event.target).text();
  const generationNumber = parseInt(selectedOption.split(" ")[1]);
  game.generation = generationNumber;
  console.log("Selected Generation: " + game.generation);
}







}

const playerOne = {
  name: "",
  score: 0,
  updateName: function(playerName) {
    this.name =  playerName;
    game.updatePlayerName(playerName);
  }
}




    // Function to handle dropdown selection

    // Dropdown menu elements
  

    // Event listeners for dropdown items
    game.dropdownMenu.on("click", ".dropdown-item", function(event) {
    
        game.handleDropdownChange(event);
      
    });



game.joinGameButton.on('click', function () {
  if (!(playerOne.name)) {
    const playerName = game.playerForm.val();
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);

    game.joinGameButton.addClass('disabled');
    game.startGameButton.removeClass('disabled');
    game.playerForm.val('null');
  }
})










game.playerForm.on('keyup', function (event) {

  if (game.playerForm.val() !== 'null') {
      game.joinGameButton.removeClass('disabled');
  }
});



//ask abt this, make it into one function

$('#btn-radio-easy').on('click', function() {
game.setDifficulty('easy');

});


$('#btn-radio-medium').on('click', function() {
  game.setDifficulty('medium');
  
  })


  $('#btn-radio-hard').on('click', function() {
    game.setDifficulty('hard');
    
    })






    //changing generation


    
    // Event listener for dropdown change
