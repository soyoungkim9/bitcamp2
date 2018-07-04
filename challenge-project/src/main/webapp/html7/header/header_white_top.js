//div#header 태그에 /html/header.html 내용을 삽입한다.
$.get("/challenge-project/html7/header/header_white_top.html", (data) => {
	$("#header").html(data);
});
