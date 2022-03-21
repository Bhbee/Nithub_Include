const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));




function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/**function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("Name").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if(x=Number){
  //if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
*/
function myFunction(){
    let x  = document.getElementById("fname").value;
    let text;
    var letters = /^[A-Za-z]+$/;
    if(x.match(letters)){
       text="";
    }else{
        text = "Invalid input!";
    }
    document.getElementById("demo").innerHTML = text;


    let z  = document.getElementById("lname").value;
    let txt;
    var letters = /^[A-Za-z]+$/;
    if(z.match(letters)){
        txt = "";
    }else{
        txt = "Invalid input!";
    }
    document.getElementById("dem").innerHTML = txt;


    let e  = document.getElementById("emailAdr").value;
    let texts;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.match(mailformat)){
        texts="";
    }else{
        texts = "Invalid input!";
    }
    document.getElementById("demo3").innerHTML = texts;


    let y  = document.getElementById("tele").value;
    let textdisplay;
    var numbers = /^\d{10}$/;;
    if(y.match(numbers)){
        textdisplay = "";
    }else{
        textdisplay = "Invalid input!";
    }
    document.getElementById("demo2").innerHTML = textdisplay;
}
