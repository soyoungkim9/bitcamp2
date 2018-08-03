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



function showCmtMenu(e) {
  var userNoOfComment = $(e).attr("data-userNo");
  if (userNoOfComment == userInfo.userNo) {
    $(e).children('.cmt-edit').css("display", "block");
    $(e).children('.cmt-delete').css("display", "block");
  }
}

function hideCmtMenu(e) {
  var userNoOfComment = $(e).attr("data-userNo");

  if (userNoOfComment == userInfo.userNo) {
    $(e).children('.cmt-edit').css("display", "none");
    $(e).children('.cmt-delete').css("display", "none");
  }
}








