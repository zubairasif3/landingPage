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
				items: 1,
				nav:true,
			},
			520: {
				items: 1.5,
			},
			768: {
				items: 2,
				nav:true,
			},
			992: {
				items: 2.5
			}
		},
	});

	var owl2 = $("#carousel2");
	owl2.owlCarousel({
		autoplay: false,
		loop: true,
		autoHeight: false,
        dots: false,
        nav:false,
		margin: 20,
		responsive: {
			0: {
				items: 1,
				nav:true,
			},
			520: {
				items: 1,
				nav:true,
			},
			768: {
				items: 2,
				nav:true,
			},
			992: {
				items: 3
			}
		},
	});
	$(".owl-next").html("<img src='assets/images/nav-icon.png'>")
	$(".owl-prev").html("<img src='assets/images/nav-icon.png'>")
	// $(".next").click(function () {
	// 	owl.trigger("owl.next");
	// });
	// $(".prev").click(function () {
	// 	owl.trigger("owl.prev");
	// });
	
	AOS.init({
		duration: 1200,
	})

	function adjustCarouselCardHeights() {
        var maxHeight = 0;

        $('.item-content .carousel-card').css('height', 'auto');

        setTimeout(() => {
			$('.item-content .carousel-card').each(function() {
				var thisHeight = $(this).outerHeight();
				if (thisHeight > maxHeight) {
					maxHeight = thisHeight;
				}
			});
			$('.item-content .carousel-card').css('height', maxHeight + 'px');
		}, 500); 
    }

    adjustCarouselCardHeights();

    $(window).resize(function() {
        adjustCarouselCardHeights();
    });

	$(".navbar .navbar-collapse .menu-link").click(function(){
		$("#close-menu").click();
	})

});
