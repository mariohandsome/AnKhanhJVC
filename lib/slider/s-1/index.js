$(function() {
    if ($('.canhcam-slider-1 .owl-carousel').length) {
        $('.canhcam-slider-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            padding: 0,
            margin: 0,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                768: {
                    nav: false
                }
            }
        });
    }

});