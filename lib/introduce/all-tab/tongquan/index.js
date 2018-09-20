$(function() {
    if ($('.canhcam-project-detail-5 .carousel-1').length) {
        $('.canhcam-project-detail-5 .carousel-1').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 2,
            loop: true,
            center: false,
            navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
            nav: false,
            dots: true,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                0: {},
                480: {
                    items: 2
                },
                768: {
                    dots: true,
                    nav: false,
                    items: 3
                },
                1024: {
                    mouseDrag: false,
                    items: 4
                },
                1140: {
                    dots: false,
                    nav: true,
                    items: 5
                }
            }
        });
    }

    $('.carousel-2 .item[data-slider="1"]').find('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: false,
        navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
        nav: true,
        dots: false,
        autoplay: false,
    });

    $('.canhcam-project-detail-5 .carousel-1 .item').on('click', function() {
        $('.carousel-1 .item').removeClass('active')
        $(this).addClass('active')
        $('.carousel-2 .item').removeClass('active')
        $('.carousel-2 .item[data-slider="' + $(this).attr('data-to') + '"]').addClass('active')
        $('.carousel-2 .item[data-slider="' + $(this).attr('data-to') + '"]').find('.owl-carousel').owlCarousel({
            items: 1,
            loop: false,
            center: false,
            navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
        });
    })

});
// $(document).ready(function() {

//     var sync1 = $(".carousel-2");
//     var sync2 = $(".carousel-1");
//     var slidesPerPage = 7; //globaly define number of elements per page
//     var syncedSecondary = true;

//     sync1.owlCarousel({
//         items: 1,
//         slideSpeed: 2000,
//         nav: true,
//         autoplay: true,
//         navText: ['<i class="lnr lnr-arrow-left"></i>', '<i class="lnr lnr-arrow-right"></i>'],
//         dots: false,
//         loop: true,
//         responsiveRefreshRate: 200
//     }).on('changed.owl.carousel', syncPosition);

//     sync2
//         .on('initialized.owl.carousel', function() {
//             sync2.find(".owl-item").eq(0).addClass("current");
//         })
//         .owlCarousel({
//             items: slidesPerPage,
//             dots: false,
//             navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
//             nav: true,
//             smartSpeed: 200,
//             slideSpeed: 500,
//             responsive: {
//                 0: {
//                     nav: false,
//                     items: 3
//                 },
//                 768: {
//                     nav: false,
//                     items: 7
//                 },
//                 992: {
//                     nav: true,
//                     items: 7
//                 }
//             },
//             slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//             responsiveRefreshRate: 100
//         }).on('changed.owl.carousel', syncPosition2);

//     function syncPosition(el) {
//         //if you set loop to false, you have to restore this next line
//         //var current = el.item.index;

//         //if you disable loop you have to comment this block
//         var count = el.item.count - 1;
//         var current = Math.round(el.item.index - (el.item.count / 2) - .5);

//         if (current < 0) {
//             current = count;
//         }
//         if (current > count)  {
//             current = 0;
//         }

//         //end block

//         sync2
//             .find(".item")
//             .removeClass("click")
//             .eq(current)
//             .addClass("click");
//         var onscreen = sync2.find('.owl-item.active').length - 1;
//         var start = sync2.find('.owl-item.active').first().index();
//         var end = sync2.find('.owl-item.active').last().index();

//         if (current > end) {
//             sync2.data('owl.carousel').to(current, 100, true);
//         }
//         if (current < start) {
//             sync2.data('owl.carousel').to(current - onscreen, 100, true);
//         }
//     }

//     function syncPosition2(el) {
//         if (syncedSecondary) {
//             var number = el.item.index;
//             sync1.data('owl.carousel').to(number, 100, true);
//         }
//     }

//     sync2.on("click", ".owl-item", function(e) {
//         e.preventDefault();
//         var number = $(this).index();
//         sync1.data('owl.carousel').to(number, 300, true);
//     });
// });