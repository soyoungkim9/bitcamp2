function enterkey() {
	if (window.event.keyCode == 13) {
	    var data = {
		        email : $("#fId").val(),
		        password: $("#fPassword").val()
		    };
			
		    if ($(document.body).is("#fSaveId:checked")) {
		        data.saveId = "true";
		    }
		    $.post("../../../json/auth/login", data, (result) => {
		        if (result.state == "success")
		            location.href = "../main/main.html";
		        else 
		            window.alert("로그인 실패!");
		    }, "json");
	}
}

$("#loginBtn").click(() => {
		/*
		console.log($("#fId").val())
		console.log($("#fPassword").val())
		*/
	    var data = {
	        email : $("#fId").val(),
	        password: $("#fPassword").val()
	    };
		
	    if ($(document.body).is("#fSaveId:checked")) {
	        data.saveId = "true";
	    }
	    $.post("../../../json/auth/login", data, (result) => {
	        if (result.state == "success")
	            location.href = "../main/main.html";
	        else 
	            window.alert("로그인 실패!");
	    }, "json");
	});

//사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('6810e2ea252d47b9b3bd1d1125653956');  //여기서 아까 발급받은 키 중 javascript키를 사용해준다.

Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function(authObj) {
          console.log(authObj.access_token)
          $.getJSON(
                  '../../../json/auth/kakaoLogin', 
                  {'accessToken': authObj.access_token}, 
                  function(result) {
                      console.log(result)
                    if (result.status == 'success') {
                     console.log('로그인 성공');
                     location.href = "../main/main.html"
                    } else {
                  	  swal('로그인을 실패했습니다!  </code></pre> 카카오톡에서 이메일정보를 가져오지 못했습니다');
                    } // else 끝
              });
    }
    });
    

// 이부분 손봐야댐
function autoServerLogin(accessToken) {
   //container: '#facebook-login-btn'
  
   $.getJSON(
       '../../../json/auth/facebookLogin', 
       {'accessToken': accessToken}, 
       function(result) {
           console.log(result)
         if (result.status == 'success') {
             console.log('로그인 성공');
             location.href = "../main/main.html"
         } else {
      	   swal('로그인을 실패했습니다!  </code></pre> 페이스북에서 정보를 가져오지 못했습니다'); 
      	  /*  swal.mixin({
                 input: 'text',
                 confirmButtonText: 'Next &rarr;',
                 showCancelButton: true,
                 progressSteps: ['1', '2', '3','4','5']
               }).queue([
                 {
                   title: '회원 가입시 프로필 추가입력폼입니다.',
                   //swal2-input : result.name;
                   
                 },
                 {
                     text: '성별을 입력해주세요  ex)남:male 여자면 female'
                   },
                   {
                       text: '이메일을 입력해주세요   ex)challenge@naver.com',
                       input: 'email'
                   },
                     {
                         text: '핸드폰 번호를 입력해주세요   ex)010-1111-1111'
                       },
                       {
                           text: '유형을 숫자로 입력해주세요   ex)회원:1 트레이너:2',
                           
                         },
               ]).then((result) => {
                 if (result.value) {
                   swal({
                     title: '성공!',
                     html:
                       '입력하신 정보입니다: <pre><code>' +
                         JSON.stringify(result.value) +
                       '</code></pre>',
                     confirmButtonText: '감사합니다!'
                   })
                   
                 }
                 
               }) */
               
         } //else 끝
   });
}


// 페이스북 로그인을 수행한 후에 그 결과에 따라 작업을 수행한다.
function statusChangeCallback(response) {
console.log(response);

if (response.status === 'connected') { // 로그인이 정상적으로 되었을 때,
	autoServerLogin(response.authResponse.accessToken);
	console.log("로그인 되었음!");
} else { // 로그인이 되지 않았을 때,
  console.log("로그인 되지 않았음");
}
}

function checkLoginState() {
FB.getLoginStatus(function(response) { 
  statusChangeCallback(response);
});
}

window.fbAsyncInit = function() {
console.log("window. 호출됨")
FB.init({
appId      : '1983230101709022', // 개발자가 등록한 앱 ID
cookie     : true,  
xfbml      : true,  
version    : 'v3.0' 
});

FB.AppEvents.logPageView();  

};






/* FB.api('/{user-id}/accounts', function(response) {                          
 //response handling...
});  */

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.1&appId=1983230101709022&autoLogAppEvents=1';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* FB.logout(function(response) { // 로그아웃
}); */

//디비에 입력


// 네이버 아이디
var naverLogin = new naver.LoginWithNaverId(
  {
      clientId: "53ySFh6l7hMZUH4Hycd0",
      callbackUrl: "http://localhost:8888/challenge-project/challenge/html/login/callback.html",/*콜백 url*/
      isPopup: false, /* 팝업을 통한 연동처리 여부 */
      callbackHandle: true,
      loginButton: {color: "green", type: 3, height: 50} /* 로그인 버튼의 타입을 지정 */
  }
);

/* 설정정보를 초기화하고 연동을 준비 */
naverLogin.init(); 




