$(function () {

    // 1. 열기: #toggle-btn 클릭시 #gnb on
    $('#icon-menu').click(function () {
        $('#gnb').addClass('on');
    });
    // 2. 닫기: #btn-close 클릭시 #gnb 닫음
    $('#btn-close').click(function () {
        $('#gnb').removeClass('on');
    });

}); // $