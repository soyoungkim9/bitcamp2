//div#header 태그에 /html/header.html 내용을 삽입한다.
$.get("/challenge-project/html7/header/header_white_top0.html", (data) => {
	$("#header").html(data);
});


function expand() {
  $('.sh-input').attr("placeholder","");
  $(".sh-searchBtn").toggleClass("sh-close");
  $(".sh-input").toggleClass("sh-square");
  if ($('.sh-searchBtn').hasClass('sh-close')) {
    $('sh-input').focus();
    $('.sh-input').attr("placeholder","지역,프로그램명");
  } else {
    $('sh-input').blur();
  }
}
$('.sh-searchBtn').on('click', expand);
