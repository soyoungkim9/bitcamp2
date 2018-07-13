$("#loginBtn").click(() => {
	var data = {
		id : $("#mail").val(),
		password: $("#pwd").val()
	};
	if ($(document.body).is("#fSaveId:checked")) {
		data.saveId = "true";
	}
	$.post(serverRoot + "/json/login", data, (result) => {
		if (result.state == "success")
			location.href = "../../community/list.html";
		else 
			window.alert("로그인 실패!");
	}, "json");
});