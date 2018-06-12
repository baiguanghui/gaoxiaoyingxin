$(function () {
    // 二维码弹窗开始
    $(".chanyu").click(function(){
        $(".tc").removeClass("d-none");
    });
    // 二维码弹窗结束

// 扫二维码开始
    $(".ma>img").click(function () {
        window.location.href="huodongdengji.html"
    });
// 扫二维码结束

//// 获得值开始
//   $(".queren").click(function () {
//      var xm=$(".xinming+input").val();
//       var sj=$(".shoji+input").val();
//       var sfz=$(".shengfeng+input").val();
//   });
//// 获得值结束



    $ (function () {
        //var xm = xinming+input;
        var sj = shoji+input;
        var sfz = shengfeng+input;

        // 验证姓名开始

    $(".xinming+input").keyup(function () {
         var a=$(this).val();
      //console.log($(this).val());

        if(sj.sfz(a)){
            //alert("请完整输入")
            $(".queren").attr('disabled,false')
        }else {
            $(".queren").attr('disabled,true')
        }


// 验证姓名结束
   });
// 验证手机号码开始
    $(".shoji+input").keyup(function () {

    });
// 验证手机号码结束

// 验证身份证号码开始
    $(".shengfeng+input").keyup(function () {

    });
// 验证身份证号码结束



    });


});
