
$(function () {
    // 이동한 이미지의 index 값 저장
    var movedIndex = 0;

    window.onload = function () {
        moveSlide();
    }

    function moveSlide() {
        let i;
        let x = document.getElementsByClassName("slideImage");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        movedIndex++;
        if (movedIndex > x.length) {
            movedIndex = 1;
        }
        x[movedIndex - 1].style.display = "block";
        setTimeout(moveSlide, 2000);
    }

});