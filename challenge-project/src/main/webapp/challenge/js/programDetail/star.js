
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




/* 더보기 임시 */
function moreFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "none";
  } else {
    moreText.style.display = "inline";
  }
}





//평점 점수 올라는 쿼리문
/*var starRating = function(){
  var $star = $(".star-input"),
  $result = $star.find("output>b");

  $(document)
  .on("focusin", ".star-input>.input",
      function(){
    $(this).addClass("focus");
  })

  .on("focusout", ".star-input>.input", function(){
    var $this = $(this);
    setTimeout(function(){
      if($this.find(":focus").length === 0){
        $this.removeClass("focus");
      }
    }, 100);
  })

  .on("change", ".star-input :radio", function(){
    $result.text($(this).next().text());
  })
  .on("mouseover", ".star-input label", function(){
    $result.text($(this).text());
    console.log($result.text())
  })
  .on("mouseleave", ".star-input>.input", function(){
    var $checked = $star.find(":checked");
    if($checked.length === 0){
      $result.text("0");
    } else {
      $result.text($checked.next().text());
    }
  });
  
};

starRating();*/
