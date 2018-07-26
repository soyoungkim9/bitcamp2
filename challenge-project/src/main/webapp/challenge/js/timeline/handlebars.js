//위에서 준비한 템플릿 데이터를 가지고 HTML을 생성할 템플릿 엔진 준비

$(document).ready(function() {
	
	// 타임라인 전체 글 불러오기
  var trTemplateSrc = $("#tr-template").html();
  var templateFn = Handlebars.compile(trTemplateSrc);

  $.getJSON(serverRoot + "/json/timeline/list", (data) => {
    $('#sh_tl_card_add').html(templateFn({
      list: data
    }));
    
  }).done(function() {
	// 댓글 불러오기
	var cmTemplateSrc = $("#cm-template").html();
	var cmtemplateFn = Handlebars.compile(cmTemplateSrc);
	
	var cards = $('div[class*="cm"]')
	var likes = $('span[class*="lk"]')
	
	var i;
	for (i = 0; i < cards.length; i++) {
		(function (closed_i) {
			// 댓글
			$.getJSON(serverRoot + "/json/comment/listWithNo/" + cards[closed_i].textContent, (data) => {
				$('.cm' + cards[closed_i].textContent).html(cmtemplateFn({
	    	        list: data
	    	      }));
			});
			
			// 좋아요 (내가 체크했는지 아닌지)
			$.post({
				url: "../../../json/timeline/isChecked",
				data: {
					pno: objPmemb[0].no,
					pono: likes[closed_i].textContent,
					uno: obj.userNo
				},
				async: false
			}).done(function (isChecked) {
				
				$.get(serverRoot + "/json/timeline/timelineLikeCount/" + likes[closed_i].textContent, (data) => {
					if (isChecked == 0) {
						$('.lk-thumbs' + likes[closed_i].textContent).attr("style", "color:#DD1F26;")
						$('.lk' + likes[closed_i].textContent).html("회원님 외 " + data);
					} else {
						$('.lk' + likes[closed_i].textContent).html(data);
					}
				});
			});
		})(i)
	}
	
  });
  
  
  // 좋아요 불러오기
  
});

// 타임라인 글
$(document).ready(function() {
	$(".tl-user-name-json").html(obj.name); // 리뷰 작성할 때 지금 글쓴이.
});
