
//체지방 function
var fatInfo = new Array();
$.get(serverRoot + "/json/bodyInfo/list/" + userInfo.userNo, function(data) {
	for (var i = 0; i < data.length; i++) {
		fatInfo.push({
			"date" : data[i].bdate,
			"value" : data[i].fat
		})
	}
	console.log(fatInfo)
}) 

/*

//체중 function
var weightInfo = new Array();
$.get(serverRoot + "/json/bodyInfo/list/" + userInfo.userNo, function(data) {
	for (var i = 0; i < data.length; i++) {
		weightInfo.push({
			"date" : data[i].bdate,
			"value" : data[i].weight
		})
	}
	console.log(weightInfo)
}) 

//근력량 function
var muscleInfo = new Array();
$.get(serverRoot + "/json/bodyInfo/list/" + userInfo.userNo, function(data) {
	for (var i = 0; i < data.length; i++) {
		muscleInfo.push({
			"date" : data[i].bdate,
			"value" : data[i].weight
		})
	}
	console.log(muscleInfo)
}) 

 */

// InfoId => fatInfo, weightInfo, muscleInfo
var chart = AmCharts.makeChart("chartdiv", { // div Id
		"type": "serial",
		"theme": "light",
		"language": "ko",
		"marginRight": 30,
		"marginLeft": 30,
		"autoMarginOffset": 20,
		"mouseWheelZoomEnabled":true,
		"dataDateFormat": "YYYY-MM-DD",
		"valueAxes": [{
			"id": "v1",
			"axisAlpha": 0,
			"position": "left",
			"ignoreAxisWidth":true
		}],
		"balloon": {
			"borderThickness": 1,
			"shadowAlpha": 0
		},
		"graphs": [{
			"id": "g1",
			"balloon":{
				"drop":true,
				"adjustBorderColor":false,
				"color":"#ffffff"
			},
			"bullet": "round",
			"bulletBorderAlpha": 1,
			"bulletColor": "#FFFFFF",
			"bulletSize": 5,
			"hideBulletsCount": 50,
			"lineThickness": 2,
			"title": "red line",
			"useLineColorForBulletBorder": true,
			"valueField": "value",
			"balloonText": "<span style='font-size:18px;'>[[value]]</span>"
		}],
		"chartScrollbar": {
			"graph": "g1",
			"oppositeAxis":false,
			"offset":30,
			"scrollbarHeight": 80,
			"backgroundAlpha": 0,
			"selectedBackgroundAlpha": 0.1,
			"selectedBackgroundColor": "#888888",
			"graphFillAlpha": 0,
			"graphLineAlpha": 0.5,
			"selectedGraphFillAlpha": 0,
			"selectedGraphLineAlpha": 1,
			"autoGridCount":true,
			"color":"#AAAAAA"
		},
		"chartCursor": {
			"pan": true,
			"valueLineEnabled": true,
			"valueLineBalloonEnabled": true,
			"cursorAlpha":1,
			"cursorColor":"#258cbb",
			"limitToGraph":"g1",
			"valueLineAlpha":0.2,
			"valueZoomable":true
		},
		"valueScrollbar":{
			"oppositeAxis":false,
			"offset":50,
			"scrollbarHeight":10
		},
		"categoryField": "date",
		"categoryAxis": {
			"parseDates": true,
			"dashLength": 1,
			"minorGridEnabled": true
		},
		"export": {
			"enabled": true
		},
		"dataProvider": fatInfo // list 불러와서 붙일 부분
	});

	chart.addListener("rendered", zoomChart);

	zoomChart();

function zoomChart() {
	chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}
