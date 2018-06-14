$(function () {
    // 下拉框开始
$(".xiala").click(function () {
    $(this).children(".xlzs").slideToggle();
    $(this).find(".xlzs").toggleClass("open");
    if($(".tbb").hasClass("d-none")){
        $(".tbb").removeClass("d-none");
        $(".tb").addClass("d-none");
    }else{
        $(".tb").removeClass("d-none");
        $(".tbb").addClass("d-none");
    }

});

// 下拉框结束

    // 更多精彩开始
$("#cy").click(function () {
    window.location.href="sczjk.html"
});
    // 更多精彩结束


});
