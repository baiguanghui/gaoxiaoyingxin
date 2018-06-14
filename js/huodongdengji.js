$(function () {

var sjzz =/^[1][3,4,5,6,7,8][0-9]{9}$/;   // 手机正则
var sfzz = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;   // 身份证正则

function  volidate() {
    var xm =$(".te-1").val();
    var photo =$("#photo").val();
    var sj =$(".te-2").val();
    var sfz =$(".te-3").val();
    if(xm.length>0){
        if(sjzz.test(sj)){
            if(sfzz.test(sfz)) {
                if(photo.length>0) {
                    // alert("成功")
                    window.location.href="chanyuye.html"
                    }else {
                    alert("请上传照片")
                }
            }else {
                alert("身份证输入不正确")
            }
        }else {
            alert("手机输入不正确")
        }
    }else {
        alert("请输入姓名")
    }
}

$(".queren").click(function () {
    volidate();
});


    $('#photo').change(function(){
       $(this).next('i').css('background-image','url(../img/xszp.png)');
    });




});
