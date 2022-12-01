$(function(){
    /* main_slider */ 
    $('.main_slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    })   
    
    $('.today_pick_items').slick({        
        slidesToShow: 6,
        dots: false,
        slidesToScroll: 2,
    })    

    $('.banner2').slick({        
        slidesToShow: 1,
        dots: false,        
    })
    $('.recommend_items').slick({        
        slidesToShow: 4,
        dots: false,
        slidesToScroll: 2,
    })
    $('.musical_items_wrap').slick({        
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
    })

});