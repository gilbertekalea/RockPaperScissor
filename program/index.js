//Global Variables
let user_name = prompt("Enter your character name?");
let user_assigned_num;
let user_input;
let computer_num;
let choice;
let comp_choice;

//Keep tracks of moves
let track_comp_moves = [];
let track_user_moves = [];
//Counters
let player_Score = 0;
let comp_score = 0;

//Assigning players selection with a number;
function player_selection(user_input) {
  if (user_input === "Rock" || user_input === "rock") {
    user_assigned_num = 1;
  } else if (user_input === "Paper" || user_input === "paper") {
    user_assigned_num = 2;
    user_moves = "P";
  } else if (user_input === "Scissor" || user_input === "scissor") {
    user_assigned_num = 3;
    user_moves = "S";
  } else alert("Please use rock, paper or scissor");
  return user_assigned_num;
}

//randomly generate a number 
function computer_selection() {
  computer_num = Math.floor(Math.random() * 3) + 1;
  return computer_num;
}

function compare() {
  if (user_assigned_num === 1 && computer_num === 1) {
    choice = "ROCK";
  }
  else if (user_assigned_num === 2 && computer_num === 2) {
    choice = "PAPER";
  } else if (user_assigned_num == 3 && computer_num === 3) {
    choice = "SCISSOR"
  }
}
function comp_compare() {
  if (computer_num === 1) {
    comp_choice = "ROCK";
  }
  else if (computer_num === 2) {
    comp_choice = "PAPER";
  } else if (computer_num === 3) {
    comp_choice = "SCISSOR"
  }
  return comp_choice
}
//game winning logic
function Rps_Condition() {
  computer_selection();
  tracking_user_moves();
  array_toString();
  compare();
  comp_compare();
  let winner;
  if (user_assigned_num === computer_num) {
    winner = "it's a Tie";
    document.getElementById("comp-choice").textContent = `Computer : ${choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : ${choice}`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`; 
  }
  else if (user_assigned_num === 1 && computer_num === 2) {
    winner = "Computer Wins";
    document.getElementById("comp-choice").textContent = `Computer : ${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : ROCK`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`;
    comp_score += 1;
    document.getElementById("comp").textContent = `Computer : ${comp_score}`;
  }
    
  else if (user_assigned_num === 1 && computer_num === 3) {
    winner = `${user_name} Wins`;
    document.getElementById("comp-choice").textContent = `Computer : ${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : ROCK`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`;
    player_Score+=1;
    document.getElementById("user").textContent = `${user_name} : ${player_Score}`;
  }
  else if (user_assigned_num === 2 && computer_num === 1) {
    winner = `${user_name} Wins`;;
    document.getElementById("comp-choice").textContent = `Computer : ${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : PAPER`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`;
    player_Score+=1;
    document.getElementById("user").textContent = `${user_name} : ${player_Score}`;
  }
  else if (user_assigned_num === 2 && computer_num === 3) {
    winner = "Computer Wins"; 
    document.getElementById("comp-choice").textContent = `Computer : ${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : PAPER`;
    document.getElementById("final_result").textContent = `Winner: ${winner}`;
    comp_score += 1;
    document.getElementById("comp").textContent = `Computer : ${comp_score}`
  }
  else if (user_assigned_num === 3 && computer_num === 1) {
    winner = "Computer Wins";
    document.getElementById("comp-choice").textContent = `Computer :${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : SCISSOR`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`;
    comp_score += 1;
    document.getElementById("comp").textContent = `Computer : ${comp_score}`;
  }
  else if (user_assigned_num === 3 && computer_num === 2) {
    winner = `${user_name} Wins`;
    document.getElementById("comp-choice").textContent = `Computer : ${comp_choice}`;
    document.getElementById("user-choice").textContent = `${user_name} : SCISSOR`;
    document.getElementById("final_result").textContent = `Winner : ${winner}`;
    player_Score += 1;
    document.getElementById("user").textContent = `${user_name} : ${player_Score}`;
  }
  else alert("Invalid input");
  console.log("user", user_assigned_num);
  console.log("comp", computer_num);
  return winner;
}

//tracking user moves and storing it in array
function tracking_user_moves() {
  let user_moves;
  if (user_assigned_num === 1) {
    user_moves = "R";
  }
  else if (user_assigned_num === 2) {
    user_moves = "P";
  } else if (user_assigned_num === 3) {
    user_moves = "S";
  }
  console.log("moves", user_moves);
  track_user_moves.push(user_moves);
  console.log("Track", track_user_moves);
  return track_user_moves;
}
//convert user moves into string then display it.
function array_toString() {
  let array = track_user_moves;
  let finalString = array.toString();
  console.log("string", finalString);
  document.getElementById("move").textContent = `[ ${finalString} ]`;
  return finalString;
}
function gameover() {
  let message;
  if (comp_score === 3) {
    message = "GAME OVER, COMPUTER WINS"
    document.getElementById("player_win").textContent = message;
  } else if (player_Score === 3) {
    message =`GAME OVER, ${user_name} WINS`
    document.getElementById("player_win").textContent = message;
  }
  return message;
}

//Initializing score sheet 
document.getElementById("user").textContent = `${user_name} : ${player_Score}`;
document.getElementById("comp").textContent = `Computer : ${comp_score}`;
document.getElementById("player").textContent = `${user_name}`;
document.getElementById("player").style.color = "orangered";
document.getElementById("user-choice").style.color = "red";
document.getElementById("comp-choice").style.color = "greenyellow";


