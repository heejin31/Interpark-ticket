$(function(){
    /* search recent close */
    $('.search_recent .btn_clear').click(function(){
        $(this).parent().hide();
    })
    $('.search_recent .btn_all_clear').click(function(){
        $('.search_recent .item').hide();
    })    

    /* footer btn_more */
    $('.info_more').click(function(){
        $(this).toggleClass('active')
        $('.company_info_more').toggle();
    })

      /* wish click */
    $('.wish').click(function(){
        $(this).toggleClass('active')
    })

    //동영상 팝업
    $('.btn_play').click(function(){
        $('.play_popup').show();
        $('.dark').css({'display':'block'});      
    });

    //동영상 팝업 사라짐
    $('.btn_close').click(function(){
        $('.play_popup').hide();
        $('.dark').css({'display':'none'});
    });

     //메인 팝업 사라짐
    $('.main_popup_close').click(function(){        
        $('.main_popup').hide();
        $('.dark2').css({'display':'none'});
    });

});



