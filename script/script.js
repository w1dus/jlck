

document.addEventListener("DOMContentLoaded", function(e){
    headerMenuSlide()
    youtubeBackground()
    mainToggleTab();
})

/* main페이지 최적의 전략 토글 탭 */
const mainToggleTab = () => {
    
}

/* youtube background */
const youtubeBackground = () => {  
    $('[data-vbg]').youtube_background(); // 실행
}

/* 헤더 메뉴 슬라이드 */
const headerMenuSlide = () => {
    $('header .menu-btn').click(function(){
        $('.slide-menu').toggleClass('show');
        $('.slide-menu-bg').toggleClass('show');
    })

    $('.slide-menu-bg').click(function(){
        $('.slide-menu').removeClass('show');
        $('.slide-menu-bg').removeClass('show');
    })

    $('.slide-menu .btn-div .close-btn').click(function(){
        $('.slide-menu').removeClass('show');
        $('.slide-menu-bg').removeClass('show');
    })
}

