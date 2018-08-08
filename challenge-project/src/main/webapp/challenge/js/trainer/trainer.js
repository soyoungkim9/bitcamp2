if (location.href.split("?").length > 1) {
  var no = location.href.split("?")[1].split("=")[1];
  
  $.getJSON(serverRoot + "/json/trainer/" + no, function(data) {
    $(fname).append(data.name);
    $('<img/>')
    .attr('src', '../../../files/'+data.userPath+'_100x100.jpg')
    .attr('class', 'tr1-img')
    .appendTo($(fuserPath));
    $(fintroduce).append(data.introduce);
    $(fcareer).append(data.career);
    $(ftime).append(data.time);
  })
  
  //숫자를 별로 변환
$.fn.generateStars = function() {
  return this.each(function(i,e){$(e).html($('<span/>').width($(e).text()*16));});
};
  
  $.getJSON(serverRoot + "/json/programMember/trainerReviewCount/" + no, function(data) {
    $(freviewCount).append(data);
    var count = data;
    $.getJSON(serverRoot + "/json/programMember/trainerReviewScore/" + no, function(data) {
      $('.star-prototype').append(data / count);
    }).done(function() {
      $('.star-prototype').generateStars(); 
    })
  })
  
  
  var trTemplateSrc3 = $("#commentList").html();
  var templateFn3 = Handlebars.compile(trTemplateSrc3);
  $.getJSON(serverRoot + "/json/programMember/trainerReviewList/" + no, function(data) {
    $('#comment').append(templateFn3({list: data}));
  })
  
}


//댓글리스트
function loadComment(no) {
  var trTemplateSrc3 = $("#commentList").html();
  var templateFn3 = Handlebars.compile(trTemplateSrc3);
  $.getJSON(serverRoot + "/json/programMember/reviewList/" + no, (data) => {
    $('#comment1').append(templateFn3({list: data}));
  }).done(function(data) {
    // 유저 이미지 널값 보류!
    for (var i = 0; i < data.length; i++) {
      if (data[i].user.userPath == "") {
        $('#cmImg-' + i)
        .attr('src', '../../../files/3a1987ec-885f-4ea3-8508-5872700e953c_50x50.jpg')
      }
    }
    //숫자 평점을 별로 변환하도록 호출하는 함수
    $('.star-prototype2').generateStars();
    load('#cm-load', '3');
  })
}






/*var cardBody1 = $("#cardBody2").html();

var cardBodyFn = Handlebars.compile(cardBody1);

$.getJSON(serverRoot + "/json/program/listCard", (data) => {
	$(aaa).html(cardBodyFn({list:data}));
});

$(document).ready(function() {
	$("#lista1").als({
		visible_items: 2,
		scrolling_items: 1,
		orientation: "horizontal",
		circular: "yes",
		autoscroll: "yes",
		interval: 5000,
		speed: 500,
		easing: "linear",
		direction: "left",
		start_from: 0
	});
});

$(window).on('load', function () {
    load('#tr3-eval', '2');
    $("#tr-plus-btn .button").on("click", function () {
        load('#tr3-eval', '5', '#tr-plus-btn');
    })
});

function load(id, cnt, btn) {
    var eval_list = id + " .tr3-li:not(.active)";
    var eval_length = $(eval_list).length;
    var eval_total_cnt;
    if (cnt < eval_length) {
        eval_total_cnt = cnt;
    } else {
        eval_total_cnt = eval_length;
        $('#tr-plus-btn').hide();
    }
    $(eval_list + ":lt(" + eval_total_cnt + ")").addClass("active");
}*/
