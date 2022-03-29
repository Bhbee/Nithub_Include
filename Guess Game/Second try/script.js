const randomNumber = Math.floor(Math.random() * 10) + 1;
let Score = 10;
let HighScore = 0;

function myFunction() {
  const guess =Number(document.querySelector('.guess').value);
  let displayMessage;

  if(!guess)
  {
    displayMessage = "Input a number !!!"
  }
  else if(guess === randomNumber)
  {
    displayMessage = "You got it right"
    document.querySelector(".question-mark").textContent = guess;
    document.querySelector("body").style.backgroundColor = '#18bf18';

    if(Score > HighScore){
      HighScore = Score;
      document.querySelector(".HighScore").textContent = HighScore;
    }
  }
  else if(guess !== randomNumber){
    if(Score > 1){
      Score--;
      document.querySelector('.Score').textContent = Score;
      if (guess > randomNumber) {
        displayMessage = "Your guess was too high. Try Again!";
      } 
      else if (guess < randomNumber) {
        displayMessage = "Your guess was too low. Try Again!";
      }
    }
    else{
      displayMessage = "Game Over!";
      document.querySelector('.Score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  document.getElementById("message").innerHTML = displayMessage;
}
function retryFunction(){
    location.reload();
}