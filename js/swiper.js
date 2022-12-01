$(function(){
    new Swiper('.swiper-container', {        
        direction: 'vertical',        
        slidesPerView: 1,        
        spaceBetween: 30,        
        debugger: false,        
        mousewheel: false,       
        loop: true,       
        centeredSlides: true,
        // 클릭 disabled
        allowTouchMove: false,      
        // 방향표
        navigation: {
          // 다음페이지 이동
        nextEl: '.swiper-button-next',        
        },        
    });
});