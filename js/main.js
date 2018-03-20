// 监听滚动条，改变top样式
$(function(){
    // 导航条
    $(window).scroll(function(){
        if($(window).scrollTop()>"150"){
            $('header .top').addClass('change-top');
        }else{
            $('header .top').removeClass('change-top');
        }
    })
    

    // 二位码弹出
    $('.button').click(function(){
        $('.modal').fadeIn(800);
    })
    $('.modal').click(function(){
        $(this).fadeOut(800);
    })

    // wow 动画
    new WOW().init();


    // swiper 轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: 3000,
        loop: true,
        slideToClickedSlide: true,
        paginationClickable: true,
        spaceBetween: 30,
        breakpoints: {
          // when window width is <= 320px
          767: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
    });   

    
})