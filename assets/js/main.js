jQuery(document).ready(function ($) {
	var owl = $("#carousel1");
	owl.owlCarousel({
		autoplay: false,
		loop: true,
		autoHeight: false,
		// autoplayTimeout: 1000,
		// autoplayHoverPause: true,
		// mouseDrag: true,
		// touchDrag: true,
		// pullDrag: true,
		// freeDrag: false,
        dots: false,
        nav:false,
		margin: 20,
		responsive: {
			0: {
				items: 1
			},
			520: {
				items: 1.5
			},
			768: {
				items: 2
			},
			992: {
				items: 2.5
			}
		},
	});

	// $(".next").click(function () {
	// 	owl.trigger("owl.next");
	// });
	// $(".prev").click(function () {
	// 	owl.trigger("owl.prev");
	// });
});

AOS.init({
	duration: 1200,
})
