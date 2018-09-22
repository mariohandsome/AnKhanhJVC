function changeNewsItemNews3() {
	if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
		$('.canhcam-ankhanh-news-n-1 .news-item').each(function () {
			var geth = $(this).find('.top-list .item:first-child figure').outerHeight();
			var countitem = $(this).find('.part-list').find('.item').length
			$(this).find('.part-list .item figure').each(function () {
				$(this).css({
					'height': 'calc(' + (geth / countitem) + 'px - 1rem)'
				})
			});
		});

	} else {
		$('.canhcam-ankhanh-news-n-1 .part-list .item figure').each(function () {
			$(this).css({
				'height': 'initial'
			})
		});
	}
}


$(document).ready(function () {
	changeNewsItemNews3()

	if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
		$('.canhcam-ankhanh-news-n-1 .owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true
		});
	}

	$('.canhcam-ankhanh-news-n-1 .news-list #list').click(function (event) {
		event.preventDefault();
		$(this).addClass('active')
		$('.canhcam-ankhanh-news-n-1 .news-list #grid').removeClass('active')
		$('.canhcam-ankhanh-news-n-1 #products').addClass('list-group-wrapper').removeClass('grid-group-wrapper');
	});
	$('.canhcam-ankhanh-news-n-1 .news-list #grid').click(function (event) {
		event.preventDefault();
		$(this).addClass('active')
		$('.canhcam-ankhanh-news-n-1 .news-list #list').removeClass('active')
		$('.canhcam-ankhanh-news-n-1 #products').removeClass('list-group-wrapper').addClass('grid-group-wrapper');
	});
});

$(function() {
	$('.text').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});
});

$(window).resize(function () {
	changeNewsItemNews3()
})
