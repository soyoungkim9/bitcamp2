$(document).ready(function() {
  var cardBody1 = $("#cardBody1").html();
  var cardBodyFn = Handlebars.compile(cardBody1);
  $.getJSON(serverRoot + "/json/programMember/lList/" + userInfo.userNo, (data) => {
    $(cardWide).html(cardBodyFn({list:data}));
  }).done(function(data) {
    var i;
    for (i = 0; i < data.length; i++) {
      proImg(data[i].programNo, i);
      trImg(data[i].program.trainerNo, i);
      dday(data[i].program.startDate, i);
    }
  });
});

function proImg(no, i) {
  $.getJSON(serverRoot + "/json/programMedia/list?no=" + no, (data) => {
    $("<img/>").attr('src', '../../../files/'+data[0].path+'_200x200.jpg')
    .appendTo('.ch-'+i+'').addClass('card-img');
  })
}

function trImg(no, i) {
  $.getJSON(serverRoot + "/json/trainer/" + no, (data) => {
    $("<img/>").attr('src', '../../../files/'+data.userPath+'_50x50.jpg')
    .appendTo('.tr-'+i+'').addClass('trainer-img');
  })
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
