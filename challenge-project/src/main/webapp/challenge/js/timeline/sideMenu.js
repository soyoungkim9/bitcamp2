$.ajax({
	method: "GET",
	url : serverRoot + "/challenge/html/timeline/sideMenu.html",
	async: false
}).done(function(data) {
	$("#sh-sideMenu-item").html(data);
})