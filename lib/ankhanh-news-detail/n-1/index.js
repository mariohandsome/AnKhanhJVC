function changeNewsDetail1() {
	$(".canhcam-ankhanh-news-detail-n-1 .news-read").lightGallery({
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
		selector: '.item-news-read'
	});
}
function createNewsSocial1() {
	var newsFullPath = document.URL
	var newsFullPathEncode = encodeURIComponent(document.URL)
	$('.fb-share-button').attr('data-href', newsFullPath)
	$('.fb-share-button .fb-xfbml-parse-ignore').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + newsFullPathEncode + '&src=sdkpreparse')
	$('.twitter-share-button').attr('data-url', newsFullPath)
}

function changeIMGtoDiv1(){
	$('.canhcam-ankhanh-news-detail-n-1 .othernews .item figure').each(function () {
		var tmp = $(this).find('img').attr('src')
		$(this).append('<div class="thumb"></div>')
		$(this).find('.thumb').css({
			"background-image": "url(" + tmp + ")",
			"background-position": "center center",
			"background-size": "cover"
		})
	})
}


$(document).ready(function() {
	changeNewsDetail1()
	createNewsSocial1()
	changeIMGtoDiv1()
});

$(function() {
	$('.box-match').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});
});
$(window).resize(function () {
	changeIMGtoDiv1()
})
