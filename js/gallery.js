$(function () {

    var writebtn = document.getElementById('writebtn');

    $('#write_btn').hover(function () {
        $(this).css("background", "black");
        $(this).css("color", "white");
    }, function () {
        $(this).css("background", "white");
        $(this).css("color", "black");

    });

});