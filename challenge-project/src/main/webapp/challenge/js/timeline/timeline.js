
window.onscroll = function() {
  myFunction()
};

var sh_Class_Daily = document.getElementById("sh-Class-Daily");
var diff = document.getElementById("sh-mainContainer");
var sticky = (diff.offsetTop + 27 + 76);
/*
1. offsetTop => sh-mainContainer부터 top까지 거리
2.sh-contentCol의 padding값(27)만큼 더함
*/
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sh_Class_Daily.classList.add("sh_class_daily_sticky")
  } else {
    sh_Class_Daily.classList.remove("sh_class_daily_sticky");
  }
}


/* 슬라이드 더보기 */
/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sh-mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
*/

/* 강의계획서 더보기 */
function shClassFunction() {
  var dots = document.getElementById("sh-class-dots");
  var moreText = document.getElementById("sh-class-more");
  var divText = document.getElementById("shClassDiv");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    divText.innerHTML = "운동일정 보기";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    divText.innerHTML = "닫기";
    moreText.style.display = "inline";
  }
}

/* 타임라인 글 작성 textarea auto-growing / self-resizing */

function resizeFunction() {
  $('.sh-tl-reply-content').css('height', 'auto');
  $('.sh-tl-reply-content').height(this.scrollHeight);
}



/* 무한 스크롤 */
//무한 스크롤 부분
/*
$(document).ready(function() {
  // 스크롤 이벤트 발생시
	
  $(window).scroll(function() {
    // 필요한 변수 구하기
	  var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop() + $(window).height();
    		console.log("scrollHeight : " + scrollHeight);
    		console.log("documentHeight : " + documentHeight);



    // 스크롤한 높이와 문서의 높이가 같을 때
    if (documentHeight <= scrollHeight + 100) {
    	/*
    	$.ajax({
    		type:'GET',
    		url: serverRoot + 'json/timeline/list'
    	});

    	 */
      /*
      for (var i = 0; i < 5; i++) {
        $(' <div class="sh-tl-card sh-card" style="border: 2px solid blue;"><section class="sh-tl-card-primary"><div class="sh-tl-user"><i class="sh-tl-user-circle fas fa-user-circle"></i><h1 class="sh-tl-user-name">무한스크롤</h1></div></section><div class="sh-tl-card-content"><p>졸려죽겠네? 아니야 할 수 있다! 북극곰 짱</p></div><section class="sh-tl-card-actions"><div class="sh-tl-like-count"><a href="#!"><i class="far fa-thumbs-up"></i></a><a id="sh-tl-CountedClicks" href="#!">0 명이 좋아합니다.</a><a href="#!"></a></div><div class="sh-tl-card-bottom"><div class="sh-tl-like sh-tl-card-bottom-items" style="border: 1px solid black;"><a onclick="TlAddClick()" href="#!"><i class="far fa-thumbs-up"></i>좋아요</a></div><div class="sh-tl-comment sh-tl-card-bottom-items" style="border: 1px solid black;"><a href="#!"><i class="far fa-comments"></i>댓글달기</a></div></div></section><section class="sh-tl-card-reply"><div class="sh-tl-reply-user"><i class="sh-tl-reply-user-circle fas fa-user-circle"></i><h1 class="sh-tl-reply-write">댓글을 입력하세요</h1></div></section><div style="clear:both;"></div></div>').appendTo('.sh-infinite-scroll');
      }
    }
    
  });
  
});
       */

/* modal event */
// Get the modal
var modal = document.getElementById('sh-tl-myModal');

// Get the button that opens the modal
var btn = document.getElementById("sh-tl-myModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sh-tl-modal-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-----------------타임라인 글 게시 (img 있는 경우 / 없는 경우)------------------------------
// 1. 글만 게시하는 함수를 선언


/*
function tl_post_textarea() {
  $.ajax({
	    type: 'POST',
	    url: '../../../json/timeline/add',
	    data: {
	      picture: $('#sh_tl_upload').val(),
	      content: $('#sh_tl_post_write').val(),
	      "progMemb.no" : objPmemb[0].no,
	      "progMemb.users.userNo" : obj.userNo
	    },
	  }).done(function() {
	    console.log("이미지 없이 글 게시 입력됨.");
	    location.href = "timeline.html"
	  });
}
*/
// 2. img 전달하는 코드 선언.


// 3. img 없는 경우 1을 부른다  / img 있는 경우 글 + 이미지 처리를 부른다.


// 타임라인 글 게시
$("#sh-tl-post-btn").click(() => {
	console.log('=============>')
	//console.log(obj)
	/*
	console.log(objPmemb[0].no)
  $.ajax({
    type: 'POST',
    url: '../../../json/timeline/add',
    data: {
      picture: $('#sh_tl_post_photo').val(),
      content: $('#sh_tl_post_write').val(),
      "progMemb.no" : objPmemb[0].no,
      "progMemb.users.userNo" : obj.userNo
    }
  }).done(function() {
    console.log("이미지 없이 글 게시 입력됨.");
    location.href = "timeline.html"
  });
  */
});


// 게시 버튼 눌렀을 때 함수 - 이름있는 함수로

/*
$(document).ready(
function postBtnClicked(picData) {
	console.log("postBtnClicked() 눌렸습니다.")
	
	$.ajax({
		type: 'POST',
		url: '../../../json/timeline/add',
	    data: {
	      picture: picData,
	      content: $('#sh_tl_post_write').val(),
	      "progMemb.no" : objPmemb[0].no,
	      "progMemb.users.userNo" : obj.userNo
	    }
	}).done(() => console.log("글 게시됨"))
});
*/
//$(document).on("click", '#sh-tl-post-btn' ,postBtnClicked(null));

// 게시 버튼 눌렀을 때 이벤트


//타임라인 카드에서 이미지 추가
//이미지


$('#sh_tl_upload').fileupload({
url: '../../../json/fileupload27/upload',        // 서버에 요청할 URL
dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
previewMaxWidth: 633,   // 미리보기 이미지 너비
previewMaxHeight: 300,  // 미리보기 이미지 높이 
previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
processalways: function(e, data) {
    console.log('fileuploadprocessalways()...');
    console.log(data.files);
    imgFiles = data.files;
    var imagesDiv = $('#images-div');
    imagesDiv.html("");
    for (var i = 0; i < data.files.length; i++) {
      try {
        if (data.files[i].preview.toDataURL) {
          $("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '500px').appendTo(imagesDiv);
        }
      } catch (err) {}
    }
  $('#sh-tl-post-btn').attr("disabled", true);
  $('#sh-tl-post-btn').html("업로드 중...");
  //data.submit();
}, 
submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
  console.log('submit()...');
}, 
done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
  console.log('done()...');
  console.log(data.result.filename);
  $('#sh_tl_post_photo').val(data.result.filename);
  $('#sh-tl-post-btn').attr("disabled", false);
  $('#sh-tl-post-btn').html("게시");
  //postBtnClicked(data.result.filename)
  //location.href = "timeline.html"
}
});


//-----------------타임라인 글 게시 (img 있는 경우 / 없는 경우)------------------------------



// 댓글 달기
function cmtFunction(no) {
  console.log("댓글 버튼 눌렸습니다.")
  console.log(no); // 카드 번호 가져오기
  console.log($('#' + no).val());
  
  $.ajax({
    type: 'POST',
    url: '../../../json/comment/add',
    data: {
      content: $('#' + no).val(),
      timelineNo: no,
      "progMemb.no" : objPmemb[0].no,
      "progMemb.users.userNo" : obj.userNo
    }
  }).done(function() {
    console.log("댓글 입력됨");
    location.href = "timeline.html";
  });

}



/* 좋아요 카운트 */
function TlAddClick(postNo) {
	// 포스트 넘버를 일단 받아와야함.
	
	console.log(postNo)
	$.ajax({
		type: "POST",
		url: "../../../json/timeline/timelineLike",
		data: {
			pno: objPmemb[0].no,
			pono: postNo,
			uno: obj.userNo
		}
		
		// 성공시 좋아요 갯수 불러오기
	}).done(function (result) {
			$.get(serverRoot + "/json/timeline/timelineLikeCount/" + postNo, (data) => {
				
				if (result == 0) {
				$('.lk' + postNo).html(data);
				$('.lk-thumbs' + postNo).attr("style", "color:black;")
				} else {
					$('.lk' + postNo).html("회원님 외 " + data);
					$('.lk-thumbs' + postNo).attr("style", "color:#DD1F26;")
				}
			});
		})
}
