$('.custom_logos_slides').slick({
	centerMode: false,
	autoplay: true,
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToScroll: 1,
	autoplay: true,
	centerPadding: '60px',
	slidesToShow: 7,
	arrows: false,
	responsive: [{
		breakpoint: 1700,
		settings: {
			arrows: false,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 7
		}
	}, {
		breakpoint: 1200,
		settings: {
			arrows: false,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 7
		}
	}, {
		breakpoint: 991,
		settings: {
			arrows: false,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 6
		}
	}, {
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: false,
			centerPadding: '40px',
			slidesToShow: 4
		}
	}]
});
$('.testmonial-inner-left-slider').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
	}, {
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
$('.testmonial-inner-right-slider').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
	}, {
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
$('.career-guards-inner').slick({
	dots: true,
	arrows: true,
	fade: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: true
		}
	}, {
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
$('.hero_banner-slid1').slick({
	speed: 1000,
	dots: false,
	infinite: true,
	fade: true,
	autoplay: true,
	arrows: false
});
$('.hero_banner-slid2').slick({
	speed: 500,
	dots: false,
	infinite: true,
	fade: true,
	autoplay: true,
	arrows: false
});
$('.inner-slider, .outer-slider, .case-study .cycle-slideshow').on('cycle-update-view', function(event, opts) {
	$(window).scrollTop($(window).scrollTop() + 1).scrollTop($(window).scrollTop() - 1);
});
$(function() {
	$('.smoothScroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
$(function() {
	var e = "";
	$(".fil-cat").click(function() {
		$(".portfolio_list ul li").removeClass("active"), $(this).addClass("active"), e = $(this).attr("data-rel"), $("#portfolio").fadeTo(100, .1), $("#portfolio .showing").not("." + e).fadeOut().removeClass("scale-anm"), setTimeout(function() {
			$("." + e).fadeIn().addClass("scale-anm"), $("#portfolio").fadeTo(800, 1)
		}, 300)
	})
}), $(function() {
	var url = window.location.pathname;
	var activePage = url.substring(url.lastIndexOf('/') + 1);
	$('.primary-main li a').each(function() {
		var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);
		if (activePage == linkPage) {
			$(this).parent().addClass('active');
		}
	});
})
var a = 0;
$(window).scroll(function() {
	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function() {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: 2000,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}
			});
		});
		a = 0;
	}
});
$('.tabs-custom-nav a').click(function(event) {
	$(this).closest('li').siblings('li').removeClass('current');
	$(this).closest('li').addClass('current');
	$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
	$(this.hash).closest('.general').children('div.tab-content-panel').removeClass('selected');
	$(this.hash).show();
	$(this.hash).addClass('selected');
	$(this.hash).find('.item').slice(0, 9).show();
	event.preventDefault();
	$('.sliderxs').slick('setPosition');
});
$(document).ready(function() {
	var stickyNavTop = $('.header_main_sec').offset().top;
	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('.header_main_sec').addClass('sticky');
		} else {
			$('.header_main_sec').removeClass('sticky');
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
});
wow = new WOW({
	animateClass: 'animated',
	offset: 100,
	callback: function(box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
});
wow.init();
$(".close-btn").click(function() {
	$(".popupform-main").hide();
	$(".overlay-bg").hide();
})
$(".no-thanks").click(function() {
	$(".popupform-main").hide();
	$(".overlay-bg").hide();
})
$('.close').click(function() {
	$('.popupform-main').fadeOut(300);
	$('.overlay-bg').fadeOut(300);
});
$('.popupform-main').hide();
setTimeout(function() {
	$('.popupform-main').fadeIn(300);
	$('.overlay-bg').fadeIn(300);
}, 7000);

$(".trigger_o").click(function() {
	$(".toggle_open").slideToggle(1e3)
});


$('.casestydy_slider').slick({
	dots: true,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 2000,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

const chatbtn = document.getElementById("chatbtn");
const frame = document.getElementById("chatFrame");

chatbtn.addEventListener("click", () => {
  frame.style.display = "flex";
  frame.style.opacity = 1;
  chatbtn.style.transform="translateY(100%)"
  chatbtn.style.transition="all 0.3s ease"
  chatbtn.style.opacity=0
});

// Listen for "closeChat" message from iframe
window.addEventListener("message", (event) => {
  if (event.data === "closeChat") {
    frame.style.display = "none";
    chatbtn.style.transform="translateY(0%)"
  chatbtn.style.transition="all 0.3s ease"
  chatbtn.style.opacity=1
  }
});
