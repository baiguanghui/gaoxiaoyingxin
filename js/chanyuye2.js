$(function () {
    // 下拉框开始
$(".tb").click(function () {
    $(this).children(".xlzs").slideToggle();
    $(this).find(".xlzs").toggleClass("open");
    // 下拉框结束
});
    // 更多精彩开始
$("#cy").click(function () {
    window.location.href="sczjk.html"
});
    // 更多精彩结束


});
