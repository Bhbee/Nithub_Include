  function myFunction() {
    let myGuess = guess.value
    let text;
    if (myGuess == randomNumber) {
      text = "You got it right!";
    } else if (myGuess > randomNumber) {
      text = "Your guess was " + myGuess + ". That's too high. Try Again!";
    } else if (myGuess < randomNumber) {
      text = "Your guess was " + myGuess + ". That's too low. Try Again!";
    }
    document.getElementById("feedback").innerHTML = text;
  }
  