/*이미지 슬라이드 이벤트*/ 
/*
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
prev.onclick = function() {
  plusSlides(-1);
}
next.onclick = function() {
  plusSlides(1);
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
console.log('이미지가져오기2')
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
console.log(n)
console.log(slides.length)
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  console.log('이미지슬라이드')
}
console.log(slides[slideIndex-1])
  slides[slideIndex-1].style.display = "block";
}*/



/* 장소 div 이벤트 */
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* 클리상태를 유지하는 이벤트 */
document.getElementById("defaultOpen1").click();

/* 일정 div 이벤트 */
function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen2").click();

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





// 평점 점수 올라는 쿼리문
var starRating = function(){
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

starRating();
