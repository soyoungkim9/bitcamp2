var trTemplateSrc = $("#tr-template2").html();

//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비
var templateFn = Handlebars.compile(trTemplateSrc);
/*var data = {
        email : $("#fId").val(),
        password: $("#fPassword").val()
    };
	
	console.log(data);
	
    if ($(document.body).is("#fSaveId:checked")) {
        data.saveId = "true";
    }*/
$.getJSON(serverRoot + "/json/program/list", (data) => {
	//$tableBody.innerHTML = templateFn({list:data});
    $("#listbody2").html(templateFn({list:data}));
});
