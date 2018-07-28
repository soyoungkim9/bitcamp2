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
	console.log("Hey")
});


if (location.href.split("?").length > 1) {
	// var msgno = location.href.split("?")[1].split("&")[0].split("=")[1];
	var msgno = location.href.split("?")[1];
	

	$.getJSON(serverRoot + "/json/message/" + msgno, function(data) {
		console.log(data);
		$("#mName").append(obj.name);
        $("#mName-send").append(data.trainer.name);
	});

}
