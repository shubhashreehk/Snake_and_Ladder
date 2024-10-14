var Value_for_dice_diablued = 0;
// Game_sound
var snake_sound = new Audio("sounds/snake_hiss.mp3");
snake_sound.volume = "0.5";
var snake_bitten = new Audio("sounds/snake_bitten.wav");
snake_bitten.volume = "0.5";
var ladder = new Audio("sounds/ladder.wav");
ladder.volume = "0.1";
var coin_sound = new Audio("sounds/coin.mp3");
coin_sound.volume = "0.03";

var a = [null];
let no = 100;

for (let i = 0; i < 10; i++) {
  let value = no;
  if (i % 2 == 0) {
    for (let j = 0; j < 10; j++) {
      a.push("B" + (value - 9 + j));
      no--;
    }
  } else {
    for (let j = 0; j < 10; j++) {
      a.push("B" + (value - j));
      no--;
    }
  }
}

// SetUp User name
let User_name = window.prompt("Please type your fist name").toLowerCase();
let First_name = User_name.split(" ");

let User_name2 =
  First_name[0].slice(0, 1).toUpperCase() +
  First_name[0].slice(1, User_name.length);
// console.log(User_name,User_name2,First_name);

if (User_name == "") {
  document.getElementById("Display_User_name").innerText = "Hello Guest";
  elemText = document.createTextNode("P1");
} else {
  document.getElementById("Display_User_name").innerText =
    "Hello " + User_name2;
  elemText = document.createTextNode(User_name[0]);
}

// setting up msg for frnds
if (User_name == "shubhashree") {
  document.getElementById("Final_msg").innerText =
    "How you mam? it's been a long time to see you playing this game. and also it's been a long time since you updated me. By the way thanx for creating me.";
}

var elem = document.createElement("div");
// var elemText = document.createTextNode('p1');
elem.appendChild(elemText);
elem.classList.add("coin");
document.getElementById(a[1]).appendChild(elem);

// quote Array for display msg

let quote = [
  null,
  "One who doesn't throw the dice can never expect to score a six.",
  "God may not play dice with the universe, but something strange is going on with the prime numbers.",
  "The dice of Zeus always fall luckily.",
  "Not only does God play dice, but... he sometimes throws them where they cannot be seen.",
  "Appeal. In law, to put the dice into the box for another throw",
  "God not only plays dice,He also sometimes throws the dice where they cannot be seen.",
];

// function for displaying msg of snake
function snake_ladder_Msg(intial_stage, final_stage) {
  let Curr_stage = final_stage - intial_stage;
  if (Curr_stage > 0) {
    document.getElementById("Final_msg").innerText =
      "You got a ladder to move ahead by :-" + Curr_stage;
  } else
    document.getElementById("Final_msg").innerText =
      "An snake has Bite (Sorry),so move backward by :-" + Curr_stage;
}

// Wait function

function waitframe(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}

// Dice function working

let = Curr_p = 1;
function Dice_no() {
  let Dice = Math.floor(Math.random() * 6 + 1);
  // quotes for bord
  document.getElementById("Final_msg").innerText = quote[Dice];
  // dice display
  var Dice_face = document.getElementById("dice_display");
  // Display of dice face on roll
  switch (Dice) {
    case 1: {
      Dice_face.style.backgroundImage = "url(img/dice_face/1.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
    case 2: {
      Dice_face.style.backgroundImage = "url(img/dice_face/2.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
    case 3: {
      Dice_face.style.backgroundImage = "url(img/dice_face/3.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
    case 4: {
      Dice_face.style.backgroundImage = "url(img/dice_face/4.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
    case 5: {
      Dice_face.style.backgroundImage = "url(img/dice_face/5.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
    case 6: {
      Dice_face.style.background = "url(img/dice_face/6.png)";
      Dice_face.style.backgroundSize = "cover";
      Dice_face.innerText = "";
      break;
    }
  }
  Dice_face.setAttribute("disabled", "disabled");

  Curr_p = Dice + Curr_p;

  var w = Curr_p - Dice;

  if (Curr_p > 100) {
    Curr_p = Curr_p - Dice;
    Coin_animation(0, 0, 0);
  } else if (Curr_p == 100) {
    Coin_animation(w, Curr_p, 0);

    setTimeout(function () {
      alert("YOU WON THE GAME");
      Curr_p = 1;
      Dice_face.style.backgroundImage = "url(img/dice_face/Dice.png)";
      Dice_face.style.backgroundSize = "cover";
      document.getElementById(a[Curr_p]).appendChild(elem);
    }, Dice * 250);
  } else {
    var x = Curr_p;
    var y = 0;
    switch (Curr_p) {
      case 4: {
        x = 4;
        y = 25;
        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 21: {
        x = 21;
        y = 39;
        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 29: {
        x = 29;
        y = 74;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 30: {
        x = 30;
        y = 7;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 43: {
        x = 43;
        y = 76;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 47: {
        x = 47;
        y = 15;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 56: {
        x = 56;
        y = 19;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 63: {
        x = 63;
        y = 80;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 71: {
        x = 71;
        y = 89;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 73: {
        x = 73;
        y = 51;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 82: {
        x = 82;
        y = 42;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 92: {
        x = 92;
        y = 75;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      case 98: {
        x = 98;
        y = 55;

        snake_ladder_Msg(x, y);
        Coin_animation(w, x, y);

        Curr_p = y;
        break;
      }
      default: {
        Coin_animation(w, Curr_p, 0);
        x = Curr_p;
        y = 0;

        break;
      }
    }
  }

  // setTimeout(() => {
  //     Dice_face.removeAttribute('disabled');
  // }, (Value_for_dice_diablued));
  // console.log(Value_for_dice_diablued);

  return Dice;
}
// Coin Animation function

async function Coin_animation(p, s, e) {
  Value_for_dice_diablued = 0;

  for (let i = p + 1; i <= s; i++) {
    coin_sound.play();
    document.getElementById(a[i]).appendChild(elem);
    await waitframe(250);
  }
  if (e == 0) {
  } else if (e - s > 0) {
    snake_bitten.play();
    for (let i = s + 1; i <= e; i++) {
      document.getElementById(a[i]).appendChild(elem);
      await waitframe(120);
    }
    snake_bitten.pause();
    snake_bitten.currentTime = 0;
  } else {
    snake_sound.play();
    snake_bitten.play();
    for (let i = s - 1; i >= e; i--) {
      document.getElementById(a[i]).appendChild(elem);
      await waitframe(120);
    }
    snake_bitten.pause();
    snake_bitten.currentTime = 0;
  }
  document.getElementById("dice_display").removeAttribute("disabled");
}

// document.getElementById("dice_display").addEventListener("keyup",e=>{
//     if(e.keyCode === 100 || e.keyCode === 68){
//         Dice_no();
//     }
// });

document.addEventListener("keyup", (e) => {
  if (e.keyCode === 100 || e.keyCode === 68) {
    document.getElementById("dice_display").click();
  }
});
