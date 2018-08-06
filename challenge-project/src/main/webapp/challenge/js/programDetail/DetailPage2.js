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

function cmtEdit(e) {
  $(e).parent().attr("onmouseover", "");
  $(e).parent().attr("onmouseout", "");

  $(e).one().siblings('.cmt-delete').css("display", "none");
  $(e).one().css("display", "none");

  $(e).parent().append('<textarea class="sh-tl-cmt' 
      + $(e).attr("name") 
      + ' sh-tl-review-title  sh_tl_reply_textarea">' 
      + $(e).siblings('.commentContent').last().html() 
      + '</textarea><button onclick=cmtEditClick(' 
      + $(e).attr("name") 
      + ') class="sh-tl-cmt-edit-btn" type="submit">수정</button>');
  $(e).siblings('.commentContent').remove();

}

var cmtEditNo;

function cmtEditClick(no) {
  cmtEditNo = no;
  $.post({
    url: serverRoot + "/json/programMember/updateReview",
    data: {
      no: no,
      content: $('.sh-tl-cmt' + no).val()
    }
  }).done(function() {
    $.getJSON(serverRoot + "/json/comment/" + cmtEditNo).done(function(data) {
      $('.sh-tl-cmt' + cmtEditNo)
      .parent().first()
      .prepend(' <div readonly class="sh-tl-review-content  sh-tl-reply-content"><span class="sh-cmt-name" >' 
          + data.progMemb.user.name 
          + '</span><span>' + data.content + '</span></div>');
      $('.sh-tl-cmt' + cmtEditNo).parent().attr("onmouseover", "showCmtMenu(this)");
      $('.sh-tl-cmt' + cmtEditNo).parent().attr("onmouseout", "hideCmtMenu(this)");


      $('.sh-tl-cmt-edit-btn').remove();
      $('.sh-tl-cmt' + cmtEditNo).remove();
    })
  });
}

var cmtNo;

function cmtDelete(e) {
  console.log("cmtDelete 이벤트 발생! 번호 : " + $(e).attr("name"))
  cmtNo = $(e).attr("name");
  
  $.post(serverRoot + "/json/programMember/deleteReview", {
    programNo: $(e).attr("name"),
    userNo: userInfo.userNo
  }).done(function() {
    $('.sh-tl-cmt-section' + cmtNo).remove();
  })
}



//일정 데이터 가져오기
function plan(proDay, proTime) {
  var inputTimeString='';
  var mo, tu, we, th, fr, sa, su;
  var pDay = proDay.split(" ");
  var dayTime = proTime.split(" ");

  for (var i = 0; i < pDay.length - 1; i++) {
    switch (pDay[i]) {
    case '0': 
      timeCal(dayTime[i])
      mo = inputTimeString
      inputTimeString='';
      break;
    case '1': 
      timeCal(dayTime[i])
      tu = inputTimeString
      inputTimeString='';
      break;
    case '2': 
      timeCal(dayTime[i])
      we = inputTimeString
      inputTimeString='';
      break;
    case '3': 
      timeCal(dayTime[i])
      th = inputTimeString
      inputTimeString='';
      break;
    case '4': 
      timeCal(dayTime[i])
      fr = inputTimeString
      inputTimeString='';
      break;
    case '5': 
      timeCal(dayTime[i])
      sa = inputTimeString
      inputTimeString='';
      break;
    case '6': 
      timeCal(dayTime[i])
      su = inputTimeString
      inputTimeString='';
      break;
    default: 
      console.log('에러')
    }
  }

  function timeCal(dayTime) {
    var dayTime= dayTime.split(",");
    var calculated =  new Array();
    for (var i = 0; i < dayTime.length - 1; i++) {
      calculated[i] = ((parseInt(dayTime[i].split(":")[0]) * 60) + parseInt(dayTime[i].split(":")[1]));
    }
    var count = 0;
    var temp = 0;
    for (var i = 0; i < calculated.length; i++) {
      if ((calculated[i + 1] - calculated[i]) > 30 && count == 0) {
        inputTimeString = dayTime[0] + " ~ " + timePlus(dayTime[i]);
        temp = i;
        count++;
      } else if ((calculated[i + 1] - calculated[i]) > 30 && count > 0 ) {
        inputTimeString += (", " + dayTime[temp + 1] + " ~ " + timePlus(dayTime[i]));
        temp = i;
      } else if (i == calculated.length - 1 && count == 0) {
        inputTimeString += (dayTime[0] + " ~ " + timePlus(dayTime[dayTime.length - 2]))
      } else if (i == calculated.length - 1) {
        inputTimeString += (", " + dayTime[temp + 1] + " ~ " + timePlus(dayTime[dayTime.length - 2]))
      } 
    }

    function timePlus(time) {
      var time1 = time.split(":")
      if (Number(time1[1]) == 30) {
        time1[1] = '00'
          time1[0] = (parseInt(time1[0]) + 1)
          if (time1[0] < 10) {
            time1[0] = '0' + time1[0]
          }
        time = time1[0] + ":" + time1[1]
        return time
      } else {
        time1[1] = '30'
          time = time1[0] + ":" + time1[1]
        return time
      }
    }
    return inputTimeString;
  }

  var trTemplateSrc2 = $('#dayday').html();
  var templateF2 = Handlebars.compile(trTemplateSrc2);
  var data = {
      list: [
        {time: mo},
        {time: tu},
        {time: we},
        {time: th},
        {time: fr},
        {time: sa},
        {time: su}
        ]
  }
  $(day).html(templateF2(data));

  openDay(event, 'day-0')
} 
/* 일정 div 이벤트 */
$('.day0').click(function() {
  openDay(event, 'day-0')
});
$('.day1').click(function() {
  openDay(event, 'day-1')
});
$('.day2').click(function() {
  openDay(event, 'day-2')
});
$('.day3').click(function() {
  openDay(event, 'day-3')
});
$('.day4').click(function() {
  openDay(event, 'day-4')
});
$('.day5').click(function() {
  openDay(event, 'day-5')
});
$('.day6').click(function() {
  openDay(event, 'day-6')
});
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

//금액 콤마
$(".numberic").each(function(){
  $(this).number(true);
});



//날짜 간격 구하기(D-day)
function dayInterval(startDate) {
  var interval = new Date().getTime() - new Date(startDate).getTime();
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
}