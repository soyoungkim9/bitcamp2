var trTemplateSrc = $("#tr-template").html();

//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비
var templateFn = Handlebars.compile(trTemplateSrc);

$.getJSON(serverRoot + "/json/user/list", (data) => {
	console.log(data);
	//$tableBody.innerHTML = templateFn({list:data});
  $("#story").html(templateFn({list:data}));
});
