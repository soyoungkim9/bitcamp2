//li-template
var liTemplateSrc = $("#li-template").html();
var templateFn2 = Handlebars.compile(liTemplateSrc);
console.log();
$.getJSON(serverRoot + "/json/programMember/list", (data) => {
 $('#programList').html(templateFn2({list:data}));
});

/* 탭 메뉴 이벤트 */
$(document).on('click','.tabSelect', function(){
	if ($(".tabSelect").find(".active")) {
		$(".tabSelect").removeClass("active");
	}
	$(this).addClass("active");
});

// 회원정보 보기
if (location.href.split("?").length > 1 && location.href.split("&").length > 1) {
	var pno = location.href.split("?")[1].split("&")[0].split("=")[1];
	var uno = location.href.split("&")[1].split("=")[1];

	$.getJSON(serverRoot + "/json/programMember/" + pno + "/" + uno, function(data) {
		$("#mName").append(data[0].users.name);
        $("#mSex").append(data[0].users.sex);
        $("#mTel").append(data[0].users.userPhone);
        $("#mProgram").append(data[0].name);
				$("#mDate1").append(data[0].startDate);
				$("#mDate2").append(data[0].endDate);
        $("#mTarget").append(data[0].proGoal);
        $("#mAttend").append(data[0].diarys.dcheck);
        $("#mTargetPer").append(data[0].proGoalNum);
	});
	
	$('.modal').css("display", "block");

	$(".close").click(function() {
		location.href=  "memberList.html";
		});

} else if (location.href.split("?").length > 1) { // 프로그램별로 회원 리스트 보기
	var pno = location.href.split("?")[1].split("=")[1];
	$('#memberList tr').css('display','none');
	$.ajax(serverRoot + "/json/programMember/list/" + pno, {
		dataType: "json",	
	    success(data) {
	        for (var item of data) {
	        	var tr = document.createElement("tr");
	        	tr.innerHTML = "<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.email + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.name + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.sex + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.name +"</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.diarys.dcheck +"</a></td>";  
	        	memberList.appendChild(tr);
	        }
	    },
	    error() {
	        window.alert("member.js view list 실행 오류!");
	    }	
	});
} else if (serverRoot + "/challenge/html/trainer/memberList.html") { // 프로그램별로 회원 리스트 보기
	$.ajax(serverRoot + "/json/programMember/list", {
		dataType: "json",	
	    success(data) {
	        for (var item of data) {
	        	var tr = document.createElement("tr");
	        	tr.innerHTML = "<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.email + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.name + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.users.sex + "</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.name +"</a></td>" +
	        	"<td><a href='memberList.html?pno=" + item.no + 
	        	"&uno=" + item.users.userNo +"'>"
	        	+ item.diarys.dcheck +"</a></td>";  
	        	memberList.appendChild(tr);
	        }
	    },
	    error() {
	        window.alert("member.js view list 실행 오류!");
	    }	
	});
}
