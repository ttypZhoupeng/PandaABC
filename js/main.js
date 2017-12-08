// 监听滚动条，改变top样式
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>"150"){
            $('header .top').addClass('change-top');
        }else{
            $('header .top').removeClass('change-top');
        }
    })
})