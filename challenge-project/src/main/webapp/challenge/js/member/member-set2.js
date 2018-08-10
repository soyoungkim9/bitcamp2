function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

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
