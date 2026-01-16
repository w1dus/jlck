

document.addEventListener("DOMContentLoaded", function(e){
    headerMenuSlide()
    youtubeBackground()
    mainToggleTab();
    mainSlide();
})

/* .main페이지 슬라이드 */
const mainSlide = () => {
    var swiper = new Swiper(".main .section3 .mySwiper", {
      slidesPerView: 6,
      spaceBetween: 10,
      centeredSlides: true,
      loop : true, 
      observer: true,
      observeParents: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        650: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        950: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
      },
    });

    var swiper = new Swiper(".main .section4 .mySwiper", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        centeredSlides: true,
        loop : true, 
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          650: {
            slidesPerView: 1.5,
          },
          
        },
      });
}

/* main페이지 최적의 전략 토글 탭 */
const mainToggleTab = () => {
    $('.main .category-wrap .item').click(function(e){
        e.preventDefault();
        const index = $(this).index();
        $('.main .category-wrap .item').removeClass('active');
        $(this).addClass('active');
        $('.main .section5 .item-list > li').removeClass('active');
        $('.main .section5 .item-list > li').eq(index).addClass('active');
    })
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

