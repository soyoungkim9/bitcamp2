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
  
  $.getJSON(serverRoot + "/json/programMember/trainerReviewCount/" + no, function(data) {
  })
  
}





var cardBody1 = $("#cardBody2").html();

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
}
