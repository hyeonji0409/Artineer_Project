window.onload = function() {
    // 폼에서 id가 joinForm인 폼의 submit 버튼이 눌러졌을 때 수행되는 이벤트 처리
    document.getElementById('joinForm').onsubmit = function() {
        // 성명을 입력하지 않은 경우 경고창 띄우기
        // 성명 입력 칸의 id를 찾아오기
        var name = document.getElementById('name')
        // 값이 비었는지 확인 후 비었으면 경고 출력, 입력란에 포커스, 서버로 전송되지 않게(다음 페이지로 이동 못하게)
        if(name.value == "") {
            alert("성명을 입력하세요.");
            name.focus();
            return false; // 서버로 전송되지 않게 함.
        } // 이름 검증 끝

        var id = document.getElementById('id');
        if(id.value == "") {
            alert("아이디를 입력하세요.");
            id.focus();
            return false;
        } // 아이디 입력 됐는지 검사
        if(id.value.length < 6 || id.value.length > 12) { // 글자 수 검사
            alert("아이디는 6~12자로 입력하세요.");
            id.focus();
            id.value = "";
            return false;
        } // 아이디 검증 끝

        var password = document.getElementById('password');
        if(password.value == "") {
            alert("비밀번호를 입력하세요.");
            password.focus();
            return false;
        } // 비밀번호 입력 됐는지 검사

        var passwordCheck = document.getElementById('passwordCheck');
        if(passwordCheck.value == "") {
            alert("비밀번호 확인을 입력하세요.");
            passwordCheck.focus();
            return false;
        } // 비밀번호 확인 입력 됐는지 검사

        if(password.value != passwordCheck.value) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            password.focus();
            password = "";
            passwordCheck = "";
            return false;
        } // 비밀번호와 비밀번호 확인이 일치하는지 검사
        if(password.value.length < 8 || password.value.length > 20) { // 글자 수 검사
            alert("비밀번호는 8~20자로 입력하세요.");
            password.focus();
            password.value = "";
            return false;
        } // 비밀번호 길이 검증

        var birthYear = document.getElementById('birthYear');
        if(birthYear.value == "") {
            alert("생년월일을 입력해 주세요.");
            birthYear.focus();
            birthYear.value = "";
            return false;
        }
        if(birthYear.value.length > 4) {
            alert("생년월일을 올바르게 입력해 주세요.");
            birthYear.focus();
            birthYear.value = "";
            return false;
        }

        var hp2 = document.getElementById('hp2');
        var hp3 = document.getElementById('hp3');
        if(hp2.value == "" || hp3.value == "") {
            alert("휴대폰번호 입력 양식이 정확하지 않습니다.");
            hp2.focus();
            return false;
        }
        if(hp2.value.length > 4 || hp3.value.length > 4) {
            alert("휴대폰번호 입력 양식이 정확하지 않습니다.");
            email1.focus();
            return false;
        }

        var zipcode = document.getElementById('zipcode');
        if(zipcode.value == "") {
            alert("주소를 검색해 주세요.");
            zipcode.focus();
            return false;
        }

        var address2 = document.getElementById('address2');
        if(address2.value == "") {
            alert("상세 주소를 입력해 주세요.");
            address2.focus();
            return false;
        }

        // 관심분야를 선택하지 않은 경우 검사
        var job = document.getElementById('job');
        if(job.value == "") {
            alert("관심분야를 선택해 주세요.");
            return false;
        } // 관심분야 선택 검사 완료

        var email1 = document.getElementById('email1');
        var email2 = document.getElementById('email2');
        if(email1.value == "" || email2.value == "") {
            alert("이메일 입력 양식이 정확하지 않습니다.");
            email1.focus();
            return false;
        }

        // radio 버튼 검사.
        // radio 버튼의 경우 id 속성을 사용하지 않고 그룹 이름인 name 속성 사용
        // 동일 그룹에 속한 여러 라디오 버튼(객체)는 동일한 name : 배열로 처리
        // 체크 여부를 저장할 변수 선언

        var chk = false;
        for(var i = 0; i < joinForm.emailRcv.length; i++) {
            if(joinForm.emailRcv[i].checked == true) {
                chk = true; // 하나라도 체크되면 true값 저장
                // 하나도 체크되지 않으면 false 값 그대로 유지.
            }
        }
        if(chk == false) { // 하나도 체크되지 않았을 경우
            alert("이메일 수신 여부를 선택해 주세요.")
            return false;
        }  // radio 버튼 검사 끝.

    }; // onsubmit 끝

    document.getElementById("zipcodeButton").addEventListener("click", function(){ //주소입력칸을 클릭하면
        //카카오 지도 발생
            new daum.Postcode({
                oncomplete: function(data) { //선택시 입력값 세팅
                    document.getElementById("zipcode").value = data.zonecode; // 주소 넣기 data.address
                    document.getElementById("address1").value = data.address;
                    document.getElementById("address2").focus(); //상세입력 포커싱
                    }
                }).open();
            });
}; // window.onload 끝

window.addEventListener("keyup", () => {
    var hp2 = document.getElementById('hp2');
    var hp3 = document.getElementById('hp3');

    if(hp2.value.length == 4 && hp3.value.length == 0) {

        hp3.focus();
    } // 휴대폰 번호 중간 입력하면 다음 칸으로 포커스
  });
  

$(function(){	
    $(document).ready(function(){
        $('select[name=emailSelect]').change(function() {
			if($(this).val()==""){
				$('#email2').val("");
                $("#email2").attr("readonly", false);
			} else {
				$('#email2').val($(this).val());
				$("#email2").attr("readonly", true);
			}
		});
        $('input[type="submit"]').on('click', function() {
            if($('#name').value == "" || 
                $('#id').value == "" ||  
                ($('#id').value.length < 6 || $('#id').value.length > 12) || 
                $('#password').value == "" || 
                $('#passwordCheck').value == "" || 
                ($('#password').value != $('#passwordCheck').value) ||
                ($('#password').value.length < 8 || $('#password').value.length > 20) || 
                $('#birthYear').value == "" ||
                ($('#hp2').value == "" || $('#hp3').value == "") ||
                ($('#hp2').value.length > 4 || $('#hp3').value.length > 4) ||
                $('#zipcode').value == "" || 
                $('#address2').value == "" ||
                $('#job').value == "" || 
                ($('#email1').value == "" || $('#email2').value == "") ||
                $(':radio[name="emailRcv"]:checked').length < 1) {
                    alert("정보가 올바르지 않습니다. <br> 다시 확인해 주세요.");
                    event.preventDefault();
            }
            else {
                window.open("login.html", "로그인", "width=400, height=450");
            }
        });
        $('#Cancel').on('click', function() {
            window.close();
        });
    });
});
