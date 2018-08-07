var cardBody1 = $("#cardBody1").html();
var cardBodyFn = Handlebars.compile(cardBody1);
$.getJSON(serverRoot + "/json/program/listProgram/" + userInfo.userNo, (data) => {

  $(cardWide).html(cardBodyFn({list:data}));
}).done(function(data) {

  $('.trainer-img').attr('src', '../../../files/'+userInfo.userPath+'_50x50.jpg');
  var i;
  for (i = 0; i < data.length; i++) {
    dday(data[i].startDate, i); //D-day
    reviewScore(data[i].no, i); //별점,리뷰 개수
  }

  $(".card-body").each(function(index){
    var price = addComma($(".numberic-"+index+"").html())
    var place = ($(".card-body-local-"+index+"").html()).substring(3, 6);
    $(".numberic-"+index+"").html(price)
    $(".card-body-local-"+index+"").html(place)
  });

  $('.star-prototype').generateStars();
});

function reviewScore(no, i) {
//리뷰 개수 카운트
  $.get(serverRoot + "/json/programMember/reviewCount/" + no, function(data) {
    $(".review-"+i+"").append(data);
    var count = data;
    // 리뷰  점수
    $.get(serverRoot + "/json/programMember/reviewScore/" + no, function(data) {
      var score = data;
      var cal = (score / count).toFixed(1);
      if(!(isNaN(cal))) {
        $('.score-'+i+'').append(cal)
      }
    }).done(function(data) {

    })
  })
}

$(document).ready(function() {
//숫자를 별로 변환
  $.fn.generateStars = function() {
    return this.each(function(i,e){$(e).html($('<span/>').width($(e).text()*16));});
  };
});

//금액 콤마
function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}



//날짜 간격 구하기(D-day)
function dday(startDate, i) {
  var now = new Date();
  var start = new Date(startDate)
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
  var dd = document.getElementById("dday-"+i);
  dd.append(interval)
}
