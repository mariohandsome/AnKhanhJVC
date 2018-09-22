function CCForm1() {
	$('.canhcam-ankhanh-footer-f-1 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {
		} else {
			$(this)[0].reset();
		}
	})
};

$(function() {
    CCForm1();
})

$(window).resize(function() {})
