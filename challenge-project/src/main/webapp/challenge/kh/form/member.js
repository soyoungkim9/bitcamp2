$("#addBtn").click(() => {
	$.post(serverRoot + "/json/user/add", {
		name: $("#fName").val(),
		sex: $('#fGen1[value]:checked').val(),
		sex: $('#fGen2[value]:checked').val(),
		email: $("#fEmail1").val() + '@' + $("#fEmail2").val(),
//		email: $(fEmail2).val(),
		password: $("#fPassword1").val(),
//		password: $(fPassword2).val(), 
		userPhone: $("#fPhone1").val() + '-' + $("#fPhone2").val() + '-' + $("#fPhone3").val(),
		userPath: $("#fPath").val(),
		userType: '1'
	}, () => {
		location.href="../auth/login.html";
	});
});




/*$("#addBtn").click(() => {
	$.post(serverRoot + "/json/user/add", {
		name: $(fName).val(),
		email: $(fEmail1).val() + '@' + $(fEmail2).val(),
		password: $(fPassword1).val()
	}, () => {
		location.href="../auth/login.html";
	});
});*/




/*$("#addBtn").click(() => {
	$.ajax({
		type: "POST",
		url: serverRoot + '/json/user/add',
		dataType: 'json',
		async: false,
		data:{
			name: $(fName).val(),
			sex: $(fGen).val(),
			email: $(fEmail).val(),
			password: $(fPassword).val(),
			userPhone: $(fPhone).val(),
			userPath: $(fPath).val(),
			userType: $(fType).val()
		}
	success: success,
	}).done(function(){
		console.error("성공???");
	});
});
 */