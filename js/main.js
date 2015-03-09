$(document).ready(function () {
    document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
    var oneSwiper = new Swiper('.swiper-container-present', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            resistance: false,
            threshold: 50,
            onClick: function (swiper, event) {
                console.log(swiper);
                console.log(event)
            },
            onTouchStart: function (swiper, event) {
                console.log(swiper);
                console.log(event)
            }
        }
    );
    var hereSwiper = new Swiper('.swiper-container-here', {
        scrollbar: '.swiper-scrollbar-here',
        scrollbarHide: true,
        //pagination: '.swiper-pagination-here',
        direction: 'vertical',
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        paginationClickable: true,
        spaceBetween: 5,
        centeredSlides: false,
        freeMode: true,
        threshold: 30
    });
    var swiper = new Swiper('.swiper-container-remote', {
        scrollbar: '.swiper-scrollbar-remote',
        scrollbarHide: true,
        //pagination: '.swiper-pagination-remote',
        //paginationClickable: true,
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        spaceBetween: 5,
        centeredSlides: false,
        freeMode: true,
        initialSlide:0,
        threshold: 30
    });

});
