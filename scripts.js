if($(window).width() >= 901){

	var swiper = new Swiper('.swiper-container', {
		  direction: 'vertical',
		  mousewheel: {
			  forceToAxis:true,
		  },
		  freeMode: true,
	      scrollbar: {
	        el: '.swiper-scrollbar',
	        hide: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',       
	      },
	      breakpoints: {
	            900: {
	                direction: 'horizontal',
	            }
	       },
	   	
	});
	
	$('#logo').on('click',function() {
		$('.swiper-button-prev').trigger('click').trigger('click')
	})
}
var swiper = new Swiper('.bottom-swipe-container1', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	navigation: {
      nextEl: '.swipe2-next',
      prevEl: '.swipe2-prev',
    },
});
var swiper = new Swiper('.bottom-swipe-container2', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	navigation: {
      nextEl: '.swipe3-next',
      prevEl: '.swipe3-prev',
    },
});



if ($('.main-wrapper.swiper-wrapper').length) {
	

	
	function isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	
	if (!isMobile()) {
		
		
		var observer = new MutationObserver(function(mutations) {
		    mutations.forEach(function(mutationRecord) {
		        console.log('style changed!');
		    });    
		});
	
		const test = document.querySelector('.swiper-wrapper');
		let counter = 0;
		
// 		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		const transformObserver = new MutationObserver(function(mutations) {
		  const styleMutation = mutations[0];
		  const oldValue = styleMutation.oldValue.split(';').find(prop => prop.startsWith('transform') || prop.startsWith(' transform'));
		  const current = styleMutation.target.style.transform;
		  const old = ((oldValue && oldValue.split(':')[1]) || '').trim();
		

		
		  if (current == 'translate3d(0px, 0px, 0px)') {
			  $('.menu-col').removeClass('active');
		  } else {
			  $('.menu-col').addClass('active');
			  $('nav').css('left','-415px')
			}
		});
		
		transformObserver.observe(test, {
		  attributes: true, //configure it to listen to attribute changes
		  attributeFilter: ['style'], //configure it to limit the listening only to the style attribute
		  attributeOldValue: true // keep the old value so we can compare;
		});
	
	}
} else {
	if($(window).width() >= 1280){
		$(function () {
		  $(document).scroll(function () {
		    var $nav = $(".menu-col");
		    var pgCont = $('section#page-container');
		    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
		    pgCont.toggleClass('scrolled', $(this).scrollTop() > 50)
		  });
		});
	}
}

$(function () {
  count = 0;

  wordsArray1 = ["Pixels", "Qubit", "Firewall"];
  setInterval(function () {
    count++;
    $("#switch").fadeOut(400, function () {
      $(this).text(wordsArray1[count % wordsArray1.length]).fadeIn(400);
    });
  }, 2000);
});



$('body').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
        //mouse up
    } else {
        $('.swiper-slide-active #findfit').addClass('animate__slideInUp');
        $('.swiper-slide-active .deg-tiles div').addClass('animate__zoomIn');
        $('.swiper-slide-active #jumpgirl').addClass('animate__flipInY');
        $('.swiper-slide-active #laugh').addClass('animate__fadeInRight');
        $('.swiper-slide-active .form').addClass('animate__fadeInLeft');
        $('.swiper-slide-active .title4').addClass('animate__fadeInDown');
        $('.swiper-slide-active .post-tiles div').addClass('animate__zoomIn');
    }
});

$('.swiper-button-next').on('click',function() {
  $('.swiper-slide-active #findfit').addClass('animate__slideInUp');
   $('.swiper-slide-active .deg-tiles div').addClass('animate__zoomIn');    
   $('.swiper-slide-active #jumpgirl').addClass('animate__flipInY');
   $('.swiper-slide-active #laugh').addClass('animate__fadeInRight');
   $('.swiper-slide-active .form').addClass('animate__fadeInLeft');
   $('.swiper-slide-active .title4').addClass('animate__fadeInDown');
   $('.swiper-slide-active .post-tiles div').addClass('animate__zoomIn');
})

$(function () {
  count2 = 0;

  wordsArray = ["VFX Artist", "Security Analyst", "Software Engineer", "Roboticist"];
  setInterval(function () {
    count2++;
    $("#switch2").fadeOut(400, function () {
      $(this).text(wordsArray[count2 % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});


/*
$('.card').on('click',function(){
	$('.card').removeClass('animate__animated animate__slow animate__zoomIn');
	$('.card div').removeClass('animate__zoomIn');
	$(this).toggleClass('flipped');
})
*/
$('.card').on({
    mouseenter: function () {
	    
		$(this).addClass('flipped');
		
        
        $('.card').removeClass('animate__animated animate__slow animate__zoomIn');
		$('.card div').removeClass('animate__zoomIn');
    },
    mouseleave: function () {
        $(this).removeClass('flipped');
    }
});
	

$('.filters-wrap').hide()
$('.filter-btn').on('click',function() {
	$('.filters-wrap').slideToggle()
})



$('#navi').on('click',function() {
	console.log('click')
	$('nav').animate({
		left: '0'
	})

})
$('#close-nav').on('click',function(){
	$('nav').animate({
		left: '-465px'
	})
})

$('.cat-child').hide();
// $('.deg-accordion ul').hide();

$('.nav-cat span').on('click',function(){
	if($(this).parent().find('.cat-child').is(':visible')){ 
		$(this).parent().find('.cat-child').slideUp();
		$('.fa-plus').removeClass('rotate');
	}else{
		$('.cat-child').slideUp();
		$('.fa-plus').removeClass('rotate');
		$(this).parent().find('.cat-child').slideToggle();
		$(this).parent().find('.fa-plus').toggleClass('rotate');
	}
})
/*
$('.deg-accordion').on('click',function(){

	if($(this).find('ul.level3').is(':visible')){ 
		$(this).find('ul.level3').slideUp()
	} else {
		$('ul.level3').slideUp()
		$(this).find('ul.level3').slideToggle()
	}
})
*/
$('#degree-drop span').on('click',function() {
  $('.degree-ops').toggleClass('active')
  $('#degree-drop i').toggleClass('flipit')
})

if($(window).width() < 550){
/*
	$('#degree-drop').on('blur',function() {
			document.location = $(this).val();
	})
*/

	
	flipped = false;
	
	$('.card').on('click',function(){
		console.log('intial ' + flipped);
		if(flipped == false) {
			$('.back ul li a').on('click',function(e){
				e.preventDefault();
				
				setTimeout(function(){
					flipped = true;
					console.log('timeout ' + flipped)
				},2000)
			})
		} else{$(this).find('a').unbind();}
	})
	
	$('.flipped .back ul li a').on('click',function(){
		$(this).unbind();
	})
} else{
	$('#degree-drop').on('change',function() {
		window.open(this.value)
	})
}


// https://test.cors.workers.dev/?


	
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
	get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
}});


if ($('#player').length) {
	$('body').on('click touchstart', function () {
	        const videoElement = document.getElementById('player');
	        if (videoElement.playing) {
	
	        }
	        else {
	            videoElement.play();
	        }
	});
}