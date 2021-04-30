var randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

var InputNum = document.getElementById("num-input");
var WinOrLose = document.getElementById("winorlose");
var Check = document.getElementById("check");
var Reload = document.getElementById("reload");
var ChancesRemain = document.getElementById("Chances-remain");

var Chance = 5

function CheckNum() {
  var PlayerNumber = InputNum.value;

  if (PlayerNumber == randomNum) {
    InputNum.style.background = "green";
    WinOrLose.innerText = "You Win";
    WinOrLose.style.color = "green";
    Check.style.display = "none";
    Reload.innerText = "Play Again";
  } else if (PlayerNumber > randomNum) {
    InputNum.style.background = "blue";
    Chance--;
  } else if (PlayerNumber < randomNum) {
    InputNum.style.background = "red";
    Chance--;
  }

  ChancesRemain.innerText = Chance;

  if (Chance === 0) {
    WinOrLose.innerText = "Game Over";
    WinOrLose.style.color = "red";
    InputNum.disabled = true;
    Check.style.display = "none";
    Reload.innerText = "Try Again";

  }
}
