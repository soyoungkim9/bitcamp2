var dno;
var pno;
var defaultPage;
var startDate;
var endDate;
var plno;

// li-template 트레이너가 관리하는 프로그램 이름 목록
var liTemplateSrc = $("#li-template").html();
var templateFn = Handlebars.compile(liTemplateSrc);
$(document).ready(function() {
   $.ajax(serverRoot + "/json/programMember/lList/" + userInfo.userNo, {
      dataType: "json",
       success(data) {
         $('#programList').html(templateFn({list:data}));
         defaultPage = $('.active').find('a').attr('data-no');
         startDate = $('.active').find('a').attr('data-sdt');
         endDate = $('.active').find('a').attr('data-edt');
         // 운동계획서 default page 설정
         $.ajax(serverRoot + "/json/diary/list/" + defaultPage + "/" + userInfo.userNo, {
            dataType: "json",   
             success(data) {
            	console.log(data);
            	if(data.length == 0) {
                   $('#programBox').append('<h4>기간: <span id="sdt">' +
                         startDate + '</span> ~ <span id="edt">' +
                         endDate + '</span></h4>');
                   $('#programBox').append('<div id="noPlan">작성된 운동일지가 없습니다.</div>');
                } else {
                   $('#programBox').html(programTemplateFn({
                      name: data[0].program.name,
                      startDate: data[0].program.startDate,
                      endDate: data[0].program.endDate,
                      list:data}));
                }
             },
             error() {
                 window.alert("프로그램 등록 후 이용해 주세요!");
             }   
         });
      },
       error() {
           window.alert("report.js li-template list 실행 오류!");
       }
   });
});


// 운동계획서 리스트 보기
var programTemplateSrc = $("#program-template").html();
var programTemplateFn = Handlebars.compile(programTemplateSrc);

$(document.body).on('click', '.programTab', function(event) {
   event.preventDefault();
   pno = $(this).find('a').attr('data-no');
   
   // 탭 메뉴 활성화 이벤트
   if ($('.programTab').find(".active")) {
      $('.programTab').removeClass("active");
      $('.programTab').css("color", "#777");
   } 
    $(this).addClass("active");
    
   startDate = $('.active').find('a').attr('data-sdt');
   endDate = $('.active').find('a').attr('data-edt');
    // 운동계획서 리스트 보기
   $.ajax(serverRoot + "/json/diary/list/" + pno + "/" + userInfo.userNo, {
      dataType: "json",   
       success(data) {
         if(data.length == 0) {
             // 클릭할 때마다 생기는 문제를 제거 하기 위해 만든 코드
             $('#programBox h4').remove();
             $('#programBox div').remove();
             $('#planList').remove();
         
             $('#programBox').append('<h4>기간: <span id="sdt">' +
                   startDate + '</span> ~ <span id="edt">' +
                   endDate + '</span></h4>');
             $('#programBox').append('<div id="noPlan">작성된 운동일지가 없습니다.</div>');
          } else {
             $('#programBox').html(programTemplateFn({
                name: data[0].program.name,
                startDate: data[0].program.startDate,
                endDate: data[0].program.endDate,
                list:data}));
          }
       },
       error() {
           window.alert("report.js programTab list 실행 오류!");
       }   
   });
});


// 모달 관련 이벤트
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//원하는 회차의 운동계획서 확대 해서 보기! ********** 수정봐야됨 출석체크 여부
$(document.body).on('click', '.editIcon', function(event) {
   event.preventDefault();
   dno = $(this).find('a').attr('data-dno');
   pno = $(this).find('a').attr('data-pno');
   
   $('.modal').css("display", "block");
   $('#addForm').css("display", "none");
   $('#viewForm').css("display", "block");
   $('#modalViewTitle input').attr("readonly", true);

   $.ajax(serverRoot + "/json/diary/" + dno, {
      dataType: "json",
       success(data) {
         $("#dayFont").html("Day" + data[0].planTurn);
           $("#dateFont").html("(" + data[0].planDate + ")");
           $("#modalViewTitle input").val(data[0].planTitl);
           $("#modalViewContent textarea").val(data[0].content);
       },
       error() {
           window.alert("report.js editIcon 실행 오류!");
       }   
   });
});

//수정 버튼 눌렀을 경우 쿼리 ********** 수정봐야됨 출석체크 여부
$("#updatePlanButton").click(() => {
	$.post(serverRoot + "/json/diary/update/", {
		content: $("#modalViewContent textarea").val(),
		"dno": dno
	}, () => {
		modal.style.display = "none";
		
		/* 업데이트한 상태에서 이전 화면으로 돌아가기 위한 코드임... 뭔가 이상 */
		$.ajax(serverRoot + "/json/diary/list/" + pno + "/" + userInfo.userNo, {
			dataType: "json",	
		    success(data) {
				 console.log("반영이 된것인가?" + pno);
				 $('#programBox').html(programTemplateFn({
					 name: data[0].program.name,
					 startDate: data[0].program.startDate,
					 endDate: data[0].program.endDate,
					 list:data}));
		    },
		    error() {
		        window.alert("report.js view list 실행 오류!");
		    }	
		});
		
	});
});

//새글 관련 이벤트
$("#addPlan").click(() => {
	pno = $('.active').find('a').attr('data-no');
    // 프로그램 회차 관련
    $.ajax(serverRoot + "/json/diary/list/" + pno + "/" + userInfo.userNo, {
    	dataType: "json",
	    success(data) {
    		console.log(data);
    	   $("option").remove();
    	   var count = data.length + 1;
    	   var turn;
    	   if(data.length == 0) { // 프로그램에 운동일지 하나도 없을 경우
    		   turn = 1;
    	   } else { // 프로그램에 운동일지 한 개 이상 있을 경우
    		   turn = data[0].program.proTurn;
    	   }
	       for (count; count <= turn; count++) {
	     	  $('#mTurn').append("<option>" + count +"</option>");
	       }
	       
	       var index = data.length;
	       // plan에서 mDate와 mTitle을 불러 오기 위함!
	       $.ajax(serverRoot + "/json/plan/list/" + pno, {
	          dataType: "json",   
	           success(data) {
	   	       	  $("#mDate").val(data[index].planDate);
		          $("#mTitle").val(data[index].planTitl);
		          $("#mDate").attr("readonly", true);
		          $("#mTitle").attr("readonly", true);
	           },
	           error() {
	               window.alert("plan에서 mDate와 mTitle을 불러 오기 실행 오류!");
	           }   
	       });
	       
	       $("#mContent").val('');
	       plno = data[index-1].no;
	    },
	    error() {
	        window.alert("report.js addPlan 실행 오류!");
	    }
    });
    
    $('.modal').css("display", "block");
    $('#viewForm').css("display", "none");
    $('#addForm').css("display", "block");
});

//등록 버튼 눌렀을 시
$("#registerPlan").click(() => {
	var onOff;
	if($("#checkType").val() == 'on') {
		onOff = 1;
	} else {
		onOff = 0;
	}
	$.post(serverRoot + "/json/diary/add", {
		dcheck: onOff,
		content: $("#mContent").val(),
		"no": plno,
		"program.no": pno,
		"uno": userInfo.userNo
	}, () => {
		modal.style.display = "none";
		/* 업데이트한 상태에서 이전 화면으로 돌아가기 위한 코드임... 뭔가 이상 */
		$.ajax(serverRoot + "/json/diary/list/" + pno + "/" + userInfo.userNo, {
			dataType: "json",	
		    success(data) {
				 console.log("반영이 된것인가?" + pno);
				 $('#programBox').html(programTemplateFn({
					 name: data[0].program.name,
					 startDate: data[0].program.startDate,
					 endDate: data[0].program.endDate,
					 list:data}));
		    },
		    error() {
		        window.alert("report.js view list 실행 오류!");
		    }	
		});
	});
});

