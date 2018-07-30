$(".close").click(function() {
	location.href= serverRoot + "/challenge/html/member/member-msg.html";
});


$("#addBtn").click(() => {
	$.ajax({
	    type: 'POST',
        url: '../../../json/message/add',
        data:{
            title: $(fTitle).val(),
            content:$(fContent).val()
        }
	}).done(function(){
		location.href="member-msg.html"
	});
});
/*
 $.post({
  url: add
  data : {
   보내는시람 : obj.uno(?),
   메세지방향 : 1 또는 2,
   받는 사람 : 네가 끌어온 정보
   그 외 제목,내용
}
 */

if (location.href.split("?").length > 1) {
	// var msgno = location.href.split("?")[1].split("&")[0].split("=")[1];
	var msgno = location.href.split("?")[1];
	

	$.getJSON(serverRoot + "/json/message/" + msgno, function(data) {
		console.log(data);
		$("#mName").append(obj.name);
        $("#mName-send").append(data.trainer.name);
	});

}
