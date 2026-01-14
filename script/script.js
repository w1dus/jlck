

document.addEventListener("DOMContentLoaded", function(e){
    headerMenuSlide()
})


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

