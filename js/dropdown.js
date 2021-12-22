$(function () {
    $('#topMenuItem>li').mouseover(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $('#topMenuItem>li').mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });
})