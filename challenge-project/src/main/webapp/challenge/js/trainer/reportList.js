// 운동일지 보기
if (location.href.split("?").length > 1) {
	var pno = location.href.split("?")[1].split("=")[1];
		
	$.ajax(serverRoot + "/json/plan/list/" + pno, {
		dataType: "json",	
	    success(data) {
			$("#programName").append(data[0].program.name);
	        $("#sdt").append("기간: " + data[0].program.startDate + " ~ ");
	        $("#edt").append(data[0].program.endDate);
	        for (var item of data) {
	        	var li = document.createElement("li");
	        	li.innerHTML = "<div class='dayContent'>" + 
	        		"<h4 class='time'>" + "Day"+ item.planTurn + "</h4>" +
	        		"<pre>" + item.planContent + "</pre>" + "</div>" +
	        		"<div class='editIcon'>" + 
	        		"<a onclick='modalView(" + item.no + ")' class='viewNum'><i class='fas fa-plus-circle'></i></a>" 
	        		+ "</div>";
	        	planList.appendChild(li);
	        }
	    },
	    error() {
	        window.alert("report.js view list 실행 오류!");
	    }	
	});
}

//li-template
var liTemplateSrc = $("#li-template").html();
var templateFn = Handlebars.compile(liTemplateSrc);
$.getJSON(serverRoot + "/json/plan/list/", (data) => {
 $('#programList').html(templateFn({list:data}));
});

/* 탭 메뉴 이벤트  나중에*/
function tabEvent(pno) {
	var programNo = location.href.split("?")[1].split("=")[1];

	if(programNo == pno) {
//			if ($(".tabSelect" + {{program.no}}).find(".active")) {
//				$(".tabSelect" + {{program.no}}).removeClass("active");
//				$(".tabSelect a" + {{program.no}}).css("color", "#777");
//			}
			console.log(pno);
			console.log(programNo);
			console.log($("tabSelect" + pno).selector);
						
			$("tabSelect" + pno).addClass("active");
			//$(".active a").css("color", "#fff");
			//$("tabSelect" + pno).css('background-color', 'red');
	}
}






// 모달 관련 이벤트, 새글 관련 이벤트
var modal = document.getElementById('myModal');
var btn = document.getElementById("addPlan");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    $('.modal').css("display", "block");
    $('#viewForm').css("display", "none");
    $('#addForm').css("display", "block");
    // 프로그램 회차 관련
    var programNo = location.href.split("?")[1].split("=")[1];
    $.getJSON(serverRoot + "/json/plan/list/" + programNo, (data) => {
     for (var count = data.length + 1; count <= data[0].program.proTurn; count++) {
     	var option = $("<option>" + count +"</option>");
     	$('#mTurn').append(option);
     }
    });
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//원하는 운동일지 확대해서 크게 보기 + 수정!
function modalView(plno) {
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
	        window.alert("report.js view 실행 오류!");
	    }	
	});
	
	// 수정 버튼 눌렀을 경우 쿼리
	$("#updatePlanButton").click(() => {
		var programNo = location.href.split("?")[1].split("=")[1];
		$.post(serverRoot + "/json/plan/update", {
			planTitl: $("#modalViewTitle input").val(),
			planContent: $("#modalViewContent textarea").val(),
			"no": plno
		}, () => {
			location.href = "reportList.html?no=" +programNo;
		});
	});
}

// 등록 버튼 눌렀을 시
$("#registerPlan").click(() => {
	var programNo = location.href.split("?")[1].split("=")[1];
	$.post(serverRoot + "/json/plan/add", {
		planTurn: $("#mTurn").val(),
		planDate: $("#mDate").val(),
		planTitl: $("#mTitle").val(),
		planContent: $("#mContent").val(),
		"program.no": programNo
	}, () => {
		location.href = "reportList.html?no=" +programNo;
	});
});

