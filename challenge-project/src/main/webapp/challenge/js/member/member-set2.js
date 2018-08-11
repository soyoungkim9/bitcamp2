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
}
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

$(function() {
    $("#setmdate").datepicker({
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dateFormat: "yy-mm-dd"
    });
});
