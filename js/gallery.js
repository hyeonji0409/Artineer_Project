$(function () {

    $('#table_write_btn').on('click', function (e) {
    }).mouseenter(function (e) {
        var _this = $(this);
        _this.addClass('hover');
    }).mouseleave(function (e) {
        var _this = $(this);
        _this.removeClass('hover');
    });

    $(".project_link_info a").mouseover(function () { $(this).css("color", "blue"); })
    $(".project_link_info a").mouseleave(function () { $(this).css("color", "black"); })

});