$.getJSON(serverRoot + "/json/bodyInfo/" + userInfo.userNo, (data) => {
	console.log(data[data.length-1]);
    var lastData = data[data.length-1];
    $(setmdate).val(lastData.bdate);
    $(setweight).val(lastData.weight);
    $(setmuscle).val(lastData.muscle);
    $(setfat).val(lastData.fat);
}); 

$("#updBtn").click(() => {
	$.ajax({
        type: 'POST',
        url: serverRoot + '/json/bodyInfo/add',
        data: {
            userNo: userInfo.userNo,
        	bdate: $(setmdate).val(),
            weight: $(setweight).val(),
            muscle: $(setmuscle).val(),
            fat: $(setfat).val()

        }, 
    }).done(function() {
    	location.href = "member-set2.html";
    });
  
});
