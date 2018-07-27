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

var jqxhr = $.getJSON(serverRoot + "/json/programMedia/list?no=" + no, (data) => {
  $(detailImg).html(templateFn({list:data}));
  console.log('이미지가져오기')
}).done(function() {
  
})


// 다른 프로그램 가져오기
var trTemplateSrc1 = $("#lectList").html();
var templateF1 = Handlebars.compile(trTemplateSrc1);

var jqxhr = $.getJSON(serverRoot + "/json/programMedia/list?no=" + no, (data) => {
  $(lectBox).html(templateFn1({list:data}));
  console.log('이미지가져오기')
})


