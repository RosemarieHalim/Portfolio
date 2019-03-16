//  javazcript not working

//this is where we apply opacity to the arrow
$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;
    
    //get height of window
    var windowHeight = $(window).height();
        
    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
  
    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);
  
  });
  

//   $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html,body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//         }
//       }
//     });
//   });

  // this is for hamburger

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

// This is for carousel

$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});

// Js for the carousel at the bottom of each project page

//js interferes with the hamburger and other carousel!!!!!!

// (function ( $ ) {

// 	function posts_carousel() {
// 		if( window.innerWidth > 1158 ) {
// 			$('.post_set').first().addClass('first');
// 			$('.post_set').last().addClass('last');

// 			$('.post-tiles .prev-button').click(function() {
// 				if( !$('.post_set.active').hasClass('first') ) {
// 					$('.post_set.active').removeClass('active').prev('.post_set').addClass('active');
// 				}
// 				else {
// 					$('.post_set.active').removeClass('active');
// 					$('.post_set').last().addClass('active');
// 				}
// 			});

// 			$('.post-tiles .next-button').click(function() {
// 				if( !$('.post_set.active').hasClass('last') ) {
// 					$('.post_set.active').removeClass('active').next('.post_set').addClass('active');
// 				}
// 				else {
// 					$('.post_set.active').removeClass('active');
// 					$('.post_set').first().addClass('active');
// 				}
// 			});
// 		}
// 		else {
// 			$('.post_set').removeClass('active');
// 			$('.post_set').first().addClass('active');
// 		}
// 	}
// 	posts_carousel();

// 	$(window).resize(function() {
// 		posts_carousel();
// 	});




// CODE FOR SCROLL FEATURE FOR PROJECTS ON PORTFOLIO.HTML



// (function () {
		
//   //////////////////////
//  // Utils
//  //////////////////////
//    function throttle(fn, delay, scope) {
//        // Default delay
//        delay = delay || 250;
//        var last, defer;
//        return function () {
//            var context = scope || this,
//                now = +new Date(),
//                args = arguments;
//            if (last && now < last + delay) {
//                clearTimeout(defer);
//                defer = setTimeout(function () {
//                    last = now;
//                    fn.apply(context, args);
//                }, delay);
//            } else {
//                last = now;
//                fn.apply(context, args);
//            }
//        }
//    }

//    function extend(destination, source) {
//        for (var k in source) {
//            if (source.hasOwnProperty(k)) {
//                destination[k] = source[k];
//            }
//        }
//        return destination;
//    }
 
//   //////////////////////
//  // END Utils
//  //////////////////////
 
//   //////////////////////
//   // Scroll Module
//   //////////////////////

//    var ScrollManager = (function () {

//        var defaults = {

//                steps: null,
//                navigationContainer: null,
//                links: null,
//                scrollToTopBtn: null,

//                navigationElementClass: '.Quick-navigation',
//                currentStepClass: 'current',
//                smoothScrollEnabled: true,
//                stepsCheckEnabled: true,

//                // Callbacks
//                onScroll: null,

//                onStepChange: function (step) {
//                    var self = this;
//                    var relativeLink = [].filter.call(options.links, function (link) {
//                        link.classList.remove(self.currentStepClass);
//                        return link.hash === '#' + step.id;
//                    });
//                    relativeLink[0].classList.add(self.currentStepClass);
//                },

//                // Provide a default scroll animation
//                smoothScrollAnimation: function (target) {
//                    $('html, body').animate({
//                        scrollTop: target
//                    }, 'slow');
//                }
//            },

//            options = {};

//        // Privates
//        var _animation = null,
//            currentStep = null,
//            throttledGetScrollPosition = null;

//        return {

//            scrollPosition: 0,

//            init: function (opts) {

//                options = extend(defaults, opts);

//                if (options.steps === null) {
//                    console.warn('Smooth scrolling require some sections or steps to scroll to :)');
//                    return false;
//                }

//                // Allow to customize the animation engine ( jQuery / GSAP / velocity / ... )
//                _animation = function (target) {
//                    target = typeof target === 'number' ? target : $(target).offset().top;
//                    return options.smoothScrollAnimation(target);
//                };

//                // Activate smooth scrolling
//                if (options.smoothScrollEnabled)  this.smoothScroll();

//                // Scroll to top handling
//                if (options.scrollToTopBtn) {
//                    options.scrollToTopBtn.addEventListener('click', function () {
//                        options.smoothScrollAnimation(0);
//                    });
//                }

//                // Throttle for performances gain
//                throttledGetScrollPosition = throttle(this.getScrollPosition).bind(this);
//                window.addEventListener('scroll', throttledGetScrollPosition);
//                window.addEventListener('resize', throttledGetScrollPosition);

//                this.getScrollPosition();
//            },

//            getScrollPosition: function () {
//                this.scrollPosition = window.pageYOffset || window.scrollY;
//                if (options.stepsCheckEnabled) this.checkActiveStep();
//                if (typeof  options.onScroll === 'function') options.onScroll(this.scrollPosition);
//            },

//            scrollPercentage: function () {
//                var body = document.body,
//                    html = document.documentElement,
//                    documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
//                        html.clientHeight, html.scrollHeight, html.offsetHeight);

//                var percentage = Math.round(this.scrollPosition / (documentHeight - window.innerHeight) * 100);
//                if (percentage < 0)  percentage = 0;
//                if (percentage > 100)  percentage = 100;
//                return percentage;
//            },

//            doSmoothScroll: function (e) {
//                if (e.target.nodeName === 'A') {
//                    e.preventDefault();
//                    if (location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') && location.hostname === e.target.hostname) {
//                        var targetStep = document.querySelector(e.target.hash);
//                        targetStep ? _animation(targetStep) : console.warn('Hi! You should give an animation callback function to the Scroller module! :)');
//                    }
//                }
//            },

//            smoothScroll: function () {
//                if (options.navigationContainer !== null) options.navigationContainer.addEventListener('click', this.doSmoothScroll);
//            },

//            checkActiveStep: function () {
//                var scrollPosition = this.scrollPosition;

//                [].forEach.call(options.steps, function (step) {
//                    var bBox = step.getBoundingClientRect(),
//                        position = step.offsetTop,
//                        height = position + bBox.height;

//                    if (scrollPosition >= position && scrollPosition < height && currentStep !== step) {
//                        currentStep = step;
//                        step.classList.add(self.currentStepClass);
//                        if (typeof options.onStepChange === 'function') options.onStepChange(step);
//                    }
//                    step.classList.remove(options.currentStepClass);
//                });
//            },

//            destroy: function () {
//                window.removeEventListener('scroll', throttledGetScrollPosition);
//                window.removeEventListener('resize', throttledGetScrollPosition);
//                options.navigationContainer.removeEventListener('click', this.doSmoothScroll);
//            }
//        }
//    })();
//     //////////////////////
//     // END scroll Module
//     //////////////////////
 
 
//    //////////////////////
//    // APP init
//    //////////////////////

//    var scrollToTopBtn = document.querySelector('.Scroll-to-top'),
//        steps = document.querySelectorAll('.js-scroll-step'),
//        navigationContainer = document.querySelector('.Quick-navigation'),
//        links = navigationContainer.querySelectorAll('a'),
//        progressIndicator = document.querySelector('.Scroll-progress-indicator');

//    ScrollManager.init({
//        steps: steps,
//        scrollToTopBtn: scrollToTopBtn,
//        navigationContainer: navigationContainer,
//        links: links,
     
//        // Customize onScroll behavior
//        onScroll: function () {
//            var percentage = ScrollManager.scrollPercentage();
//            percentage >= 90 ? scrollToTopBtn.classList.add('visible') : scrollToTopBtn.classList.remove('visible');

//            if (percentage >= 10) {
//                progressIndicator.innerHTML = percentage + "%";
//                progressIndicator.classList.add('visible');
//            } else {
//                progressIndicator.classList.remove('visible');
//            }
//        },
     
//    // Behavior when a step changes
//    // default : highlight links 
     
//    // onStepChange: function (step) {},
     
//    // Customize the animation with jQuery, GSAP or velocity 
//     // default : jQuery animate()
//     // Eg with GSAP scrollTo plugin
     
//    //smoothScrollAnimation: function (target) {
//    //		TweenLite.to(window, 2, {scrollTo:{y:target}, ease:Power2.easeOut});
//     //}
     
//    });
 
//    //////////////////////
//    // END APP init
//    //////////////////////

// })();



// CONTACT PAGE JS

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});