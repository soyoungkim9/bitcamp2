

//프로그램 가져오기
var chalBody = $("#proInsert").html();
var chalBodyFn = Handlebars.compile(chalBody);
$.getJSON(serverRoot + "/json/program/listProgram/"+ userInfo.userNo, (data) => {
  $(proTab).html(chalBodyFn({list:data}));
});