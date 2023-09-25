// DOM Manipulation

// Event Listeners

//***************      element.addEventListener("click",function);     *******/

const buttonTwo = document.querySelector("button");

function alertBtn() {
  alert("I also love Javascript");
}
buttonTwo.addEventListener("click", alertBtn);

//*************      Mouseover       ***********/

const newBackgroundColor = document.querySelector(".box-1");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "pink";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
