$("#loginBtn").click(() => {
	var data = {
		id : $("#mmail").val(),
		password: $("#mpwd").val()
	};
	/*if ($(document.body).is("#fSaveId:checked")) {
		data.saveId = "true";
	}*/
	$.post(serverRoot + "/json/community/list", data, (result) => {
		if (result.state == "success")
			location.href = "../../community/list.html";
		else 
			window.alert("로그인 실패!");
	}, "json");
});


/*$("#loginBtn").click(() => {
	var data = {
		id : $("#fId").val(),
		password: $("#fPassword").val()
	};
	if ($(document.body).is("#fSaveId:checked")) {
		data.saveId = "true";
	}
	$.post(serverRoot + "/json/auth/login", data, (result) => {
		if (result.state == "success")
			location.href = "../board/list.html";
		else 
			window.alert("로그인 실패!");
	}, "json");
});*/


/*//템플릿 엔진이 사용할 템플릿 데이터 가져오기
var trTemplateSrc = $("#tr-template").html();

//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비
var templateFn = Handlebars.compile(trTemplateSrc);

console.log();
$.getJSON(serverRoot + "/json/community/list", (data) => {
	//$tableBody.innerHTML = templateFn({list:data});
    $(listbody).html(templateFn({list:data}));
});*/