$(function(){
    // 쿠키 확인
    var cookie = $.cookie('notice');
    
    // 쿠키가 없으면 배너 노출
    if (cookie == "ok") {
        $("#floating-notice").hide();
        $("#floating-background").hide();
    } else {
        $("#floating-notice").show();
        $("#floating-background").show();
    }

    // 닫기 버튼 클릭
    $('#close_banner').click(function() {
        if ($("#floating_banner").is(":checked")) {
            $.cookie('notice', 'ok', { expires: 1, path: '/' });
        }

        $("#floating-notice").hide();
        $("#floating-background").hide();
    });
});