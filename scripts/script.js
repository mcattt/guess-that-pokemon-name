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
  isRunning: false,
  playerNameDisplay: document.getElementById('player-name-display'),
  joinGameButton: document.getElementById('join-game-button'),
  playerForm: document.getElementById('player-form'),
  startGameButton: document.getElementById('start-game-button'),
   

  updatePlayerName: function (playerName) {
    this.playerNameDisplay.innerText = "Hello, Trainer "+ playerName+ "!";

  }
}

const playerOne = {
  name: "",
  score: 0,
  updateName: function (playerName) {
    this.name =  playerName;
    game.updatePlayerName(playerName);
  }
}










game.joinGameButton.addEventListener('click', function () {
  if (!(playerOne.name)) {
    const playerName = game.playerForm.value;
    playerOne.updateName(playerName);
    game.updatePlayerName(playerName);

    game.joinGameButton.classList.add('disabled');
    game.startGameButton.classList.remove('disabled');
    game.playerForm.value = null;
  }
})






game.playerForm.addEventListener('keyup', function (event) {

  if (game.playerForm.value !== null) {
      game.joinGameButton.classList.remove('disabled');
  }
})




