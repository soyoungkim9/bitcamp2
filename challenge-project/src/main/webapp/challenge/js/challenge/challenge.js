if (location.href.split("?").length > 1) {
  var no = location.href.split("?")[1].split("=")[1];
  $.getJSON(serverRoot + "/json/challenge/" + no, (data) => {
    $(ftitle).append(data.title);
    $(fcontent).append(data.content);
    $(fpath).attr('src', '../../../files/' + data.path);
  });
  
  
  var cardBody1 = $("#cardBody1").html();
  var cardBodyFn = Handlebars.compile(cardBody1);
  $.getJSON(serverRoot + "/json/program/listCard", (data) => {
    $(progaram).html(cardBodyFn({list:data}));
  }).done(function(data) {
    
    var i;
    for (i = 0; i < data.length; i++) {
      dday(data[i].startDate, i); //D-day
      reviewScore(data[i].no, i); //별점,리뷰 개수
      trImg(data[i].trainerNo, i);
      pmemberCount(data[i].no, i);
      var price = addComma($(".numberic-"+i+"").html())
      var place = ($(".card-body-local-"+i+"").html()).substring(3, 6);
      $(".numberic-"+i+"").html(price)
      $(".card-body-local-"+i+"").html(place)
    }

    $.fn.generateStars = function() {
      return this.each(function(i,e){$(e).html($('<span/>').width($(e).text()*16));});
    };

  });
}



