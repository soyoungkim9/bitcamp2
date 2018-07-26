//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비
$(document).ready(function() {
	// 글쓰기 모달에 글쓴이 이름 출력
	$(".tl-user-name-json").html(obj.name);

	var pageCount = 1; // 타임라인 첫번째 page 카운트임.
	loadCards(pageCount);

	$(window).on('scroll',function () {
		infiniteScroll();
	});

	function infiniteScroll() {
		var documentHeight = $(document).height();
		var scrollHeight = $(window).scrollTop() + $(window).height();

		// 스크롤한 높이와 문서의 높이가 같을 때
		if (documentHeight <= scrollHeight + 100) { // 스크롤이 바닥에 닿으면?
			setTimeout(loadCards(pageCount), 1000);
			pageCount++;
			console.log("무한스크롤 다음 카드 불러옴! pageCount 값 : " + pageCount);

		}
	}


});

// 타임라인 카드 불러오기
function loadCards(pageCount) {
	var trTemplateSrc = $("#tr-template").html();
	var templateFn = Handlebars.compile(trTemplateSrc);

	$.getJSON(serverRoot + "/json/timeline/list/" + pageCount + "/6", (data) => {
		$('#sh_tl_card_add').append(templateFn({list: data}));
	}).done(function(data) {
		var i;
		for (i = 0; i < data.length; i++) {
			loadComments(data[i].no)
			timelineLikeCount(data[i].no)
		}
	});
}



// 댓글 JSON 리스트 가져와서 댓글 붙이기(handleBars) 
function loadComments(cardNo) {
//	console.log(cardNo)
	var cmTemplateSrc = $("#cm-template").html();
	var cmtemplateFn = Handlebars.compile(cmTemplateSrc);
	
	$.getJSON(serverRoot + "/json/comment/listWithNo/" + cardNo, (data) => {
		$('.cm' + cardNo).html(cmtemplateFn({
			list: data
		}));
	});
}

// 좋아요 체크 여부
function timelineLikeChecked(cardNo) {
	console.log(cardNo)
	$.post({
		url: "../../../json/timeline/isChecked",
		data: {
			pno: objPmemb[0].no,
			pono: cardNo,
			uno: obj.userNo
		},
		async: false
	}).done(function(isChecked) {
		$('.lk' + cardNo).prepend("회원님 외 ");
		if (isChecked) {
			console.log("좋아요 체크 여부" + cardNo);
			console.log($('.lk' + cardNo))
					
			$('.lk' + cardNo).html("회원님 외 ");
			$('.lk-thumbs' + cardNo).attr("color", "blue")
			$('.lk' + cardNo).prepend("회원님 외 ");
		}
	});
}

// 좋아요 개수 카운트
function timelineLikeCount (cardNo) {
	$.get(serverRoot + "/json/timeline/timelineLikeCount/" + cardNo, (data) => {
			$('.lk' + cardNo).html(data);
	})
	
	console.log("좋아요 개수 카운트 함수" + cardNo);
	timelineLikeChecked(cardNo);
}
