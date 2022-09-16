const menuItems = document.getElementsByClassName("navlink");
const navItems = document.getElementsByClassName("navdiv");

for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === location.href) {
    navItems[i].className += " active"
  }
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementsByClassName("openmenu")[0].style.display = "inline-block";
    document.getElementsByClassName("mainnavdiv")[0].style.display = "none";
  } else {
    document.getElementsByClassName("openmenu")[0].style.display = "none";
    document.getElementsByClassName("closemenu")[0].style.display = "none";
    document.getElementsByClassName("mainnavdiv")[0].style.display = "flex";
  }
}
var x = window.matchMedia("(max-width: 900px)")
x.addListener(myFunction)
myFunction(x) // Call listener function at run time

function openmenu() {
  document.getElementsByClassName("mainnavdiv")[0].style.display = "flex";
  document.getElementsByClassName("openmenu")[0].style.display = "none";
  document.getElementsByClassName("closemenu")[0].style.display = "inline-block"

}
function closemenu() {
  document.getElementsByClassName("mainnavdiv")[0].style.display = "none";
  document.getElementsByClassName("closemenu")[0].style.display = "none";
  document.getElementsByClassName("openmenu")[0].style.display = "inline-block"
}


