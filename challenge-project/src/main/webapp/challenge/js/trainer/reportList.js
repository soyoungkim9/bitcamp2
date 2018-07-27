var plano;
var pno;
var defaultPage;

// li-template 트레이너가 관리하는 프로그램 이름 목록
var liTemplateSrc = $("#li-template").html();
var templateFn = Handlebars.compile(liTemplateSrc);
$.ajax(serverRoot + "/json/plan/list/", {
	dataType: "json",
    success(data) {
		$('#programList').html(templateFn({list:data}));
		defaultPage = $('.active').find('a').attr('data-last');
		
		// 운동일지 default page 설정
		$.ajax(serverRoot + "/json/plan/list/" + defaultPage, {
			dataType: "json",	
		    success(data) {
				 $('#programBox').html(programTemplateFn({
					 name: data[0].program.name,
					 startDate: data[0].program.startDate,
					 endDate: data[0].program.endDate,
					 list:data}));
		    },
		    error() {
		        window.alert("report.js default page 실행 오류!");
		    }	
		});
	},
    error() {
        window.alert("report.js li-template list 실행 오류!");
    }
});

// 운동일지 리스트 보기
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
	
    // 운동일지 리스트 보기
	$.ajax(serverRoot + "/json/plan/list/" + pno, {
		dataType: "json",	
	    success(data) {
			 $('#programBox').html(programTemplateFn({
				 name: data[0].program.name,
				 startDate: data[0].program.startDate,
				 endDate: data[0].program.endDate,
				 list:data}));
	    },
	    error() {
	        window.alert("report.js programTab list 실행 오류!");
	    }	
	});
	
	$('#addPlan').css('display','block');	
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

// 새글 관련 이벤트
$("#addPlan").click(() => {
    $('.modal').css("display", "block");
    $('#viewForm').css("display", "none");
    $('#addForm').css("display", "block");

    // 프로그램 회차 관련
    $.ajax(serverRoot + "/json/plan/list/" + pno, {
    	dataType: "json",
	    success(data) {
    	   $("option").remove();
    	   var count = data.length + 1;
	       for (count; count <= data[0].program.proTurn; count++) {
	     	  $('#mTurn').append("<option>" + count +"</option>");
	       }
	    },
	    error() {
	        window.alert("report.js addPlan 실행 오류!");
	    }
    });
});

//원하는 회차의 운동일지 확대 해서 보기!
$(document.body).on('click', '.editIcon', function(event) {
	event.preventDefault();
	plno = $(this).find('a').attr('data-no');
	pno = $(this).find('a').attr('data-pno');
	
	$('.modal').css("display", "block");
	$('#addForm').css("display", "none");
	$('#viewForm').css("display", "block");
	$('#updatePlan button').css("display", "block");
    
	$.ajax(serverRoot + "/json/plan/" + plno, {
		dataType: "json",
	    success(data) {
			$("#dayFont").html("Day" + data[0].planTurn);
	        $("#dateFont").html("(" + data[0].planDate + ")");
	        $("#modalViewTitle input").val(data[0].planTitl);
	        $("#modalViewContent textarea").val(data[0].planContent);
	    },
	    error() {
	        window.alert("report.js editIcon 실행 오류!");
	    }	
	});
});

// 수정 버튼 눌렀을 경우 쿼리
$("#updatePlanButton").click(() => {
	$.post(serverRoot + "/json/plan/update/", {
		planTitl: $("#modalViewTitle input").val(),
		planContent: $("#modalViewContent textarea").val(),
		"no": plno
	}, () => {
		modal.style.display = "none";
		
		/* 업데이트한 상태에서 이전 화면으로 돌아가기 위한 코드임... 뭔가 이상 */
		$.ajax(serverRoot + "/json/plan/list/" + pno, {
			dataType: "json",	
		    success(data) {
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

// 등록 버튼 눌렀을 시
$("#registerPlan").click(() => {
	$.post(serverRoot + "/json/plan/add", {
		planTurn: $("#mTurn").val(),
		planDate: $("#mDate").val(),
		planTitl: $("#mTitle").val(),
		planContent: $("#mContent").val(),
		"program.no": pno
	}, () => {
		modal.style.display = "none";
		
		/* 업데이트한 상태에서 이전 화면으로 돌아가기 위한 코드임... 뭔가 이상 */
		$.ajax(serverRoot + "/json/plan/list/" + pno, {
			dataType: "json",	
		    success(data) {
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

