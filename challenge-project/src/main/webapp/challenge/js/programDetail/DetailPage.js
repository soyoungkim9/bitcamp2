// 프로그램 데이터 불러오기
if (location.href.split("?").length > 1) {
    var no = location.href.split("?")[1].split("=")[1];
    
    $.getJSON(serverRoot + "/json/program/" + no, function(data) {
        /*$(fNo).val(data.no);
        $(fpostNo).val(data.postNo);
        $(faddDetail).val(data.addDetail);*/
        $(faddress).append(data.address);
        $(fName).append(data.name);
        $(fStartDate).append(data.startDate);
        //$(fendDate).append(data.endDate);
        $(fminQty).append(data.minQty);
        $(fmaxQty).append(data.maxQty);
        $(fprice).append(data.price);
        $(fdescription).append(data.description);
        $(fproType).append(data.proType);
        /*$(fproGoal).val(data.proGoal);
        $(fproGoalNum).val(data.proGoalNum);*/
        $(fproTh).append(data.proTh);
        /*$(fproTurn).val(data.proTurn);
        $(fproDay).val(data.proDay);
        $(fproTime).val(data.proTime);
        $(fchallengeNo).val(data.challengeNo);
        $(fmainImg).val(data.mainImg);*/
        //$(ftrainerNo).val(data.trainerNo.userNo);
        $(ftrainerName).append(data.trainerNo.name);
        $(ftrainerTime).append(data.trainerNo.time);
    }).done(function(data) {
      
      // 날짜 간격 구하기(D-day)
      var now = new Date();
      var start = new Date(data.startDate)
      var interval = now.getTime() - start.getTime();
      interval = Math.floor(interval / (1000 * 60 * 60 * 24));
      if (interval == 0) {
        interval = "-day"
      } else {
        var str = Number(interval)
        if (str) {
          if (0 < str) {
            interval = "+" + interval;
          } 
        }
      }
      $(Dday).append(interval);
    })
}


// 상세 이미지 가져오기
var trTemplateSrc = $("#detail-image").html();
var templateFn = Handlebars.compile(trTemplateSrc);

$.getJSON(serverRoot + "/json/programMedia/list/" + no, (data) => {
  $(detailImg).html(templateFn({list:data}));
});


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


/* 이미지 슬라이드 이벤트 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
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
