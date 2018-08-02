/* 본문 따라다니는 navbar 이벤트*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.navLink').click(function() {
  openNav(event)
})

function openNav(evt) {
  var navLinks;
  navLinks = document.getElementsByClassName("navLink");
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].className = navLinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}












