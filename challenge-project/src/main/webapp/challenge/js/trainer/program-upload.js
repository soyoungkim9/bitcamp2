var chalBody = $("#proInsert").html();

var chalBodyFn = Handlebars.compile(chalBody);

$.getJSON(serverRoot + "/json/challenge/list", (data) => {
	$(chalTab).html(chalBodyFn({list:data}));
});


$("#addBtn").click(() => {
    $.post(serverRoot + "/json/board/add", {
        title: $(fTitle).val(),
        content: $(fContent).val()
    }, () => {
        location.href = "list.html";
    });
});