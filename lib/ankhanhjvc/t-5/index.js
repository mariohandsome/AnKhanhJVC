$(document).ready(function(){
	$('.canhcam-jvc-5 .cohoidautu').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeOut: 3000,
		autoplaySpeed: 700,
		margin: 30,
		responsive:{
			576:{
				items: 2
			},
			768:{
				items: 3
			},
			992:{
				items: 4,
				autoplay: false,
				mouseDrag: false,
			},
		}
	})
})