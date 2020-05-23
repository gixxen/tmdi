const desktopScreen = window.matchMedia("(min-width: 500px)");
const mobileScreen = window.matchMedia("(max-width: 499px)");



// SERVICE HOVER CARDS ////////////////////////////////////////////////////////////////////
$(document).ready(function () {

    $(".imgBx").mouseenter(function () {
        $(this).next(".content").animate({
            opacity: 1
        }, 300, 'linear')
    });
    $(".card").mouseleave(function () {
        $(".content").animate({
            opacity: 0
        }, 100, 'linear')
    });
});

var img = document.querySelectorAll('.imgBx');
var cards = document.querySelectorAll('.card');
var content = document.querySelectorAll('.content');
var container = document.querySelectorAll('.container');


if (desktopScreen.matches) {


    // IF ON MOBILE
} else {
    Array.prototype.forEach.call(cards, function (card, i) {

        card.addEventListener('click', function () {
            card.lastElementChild.classList.add('clicked');
        })
        document.addEventListener("click", function (event) {
            // If user clicks inside the element, do nothing
            if (event.target.closest(".imgBx")) return;
            if (event.target.closest("a")) return;

            card.lastElementChild.classList.remove('clicked');
            if (event.target.closest("imgBx")) {
                card.lastElementChild.classList.remove('clicked');

            }
        })
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            var boundary = card.lastElementChild.getBoundingClientRect();

            if (boundary.top <= 0) {
                card.lastElementChild.classList.remove('clicked');
            }


        });
    })
}

/////////////////////////////////////////////////////////////////////////////////////////


//var target;
//
////Hover over card --> change opacity of content to 1 --> keep state active while inside card --> return to opacity 0 when mouse leaves
//    Array.prototype.forEach.call (cards, function (card, i) { 
//        
//        card.addEventListener('mouseenter', function() {
//
//            card.lastElementChild.style.opacity = 1;
//    });
//});


// CUSTOMER SLIDER ////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// SCROLL TO LINKS ////////////////////////////////////////////////////////////////////////////////
// nav links for mobile = window.scrollto(0, y) - y // element.scrollintoview 

// nav links for desktop = 
// sections array - is equal node

$(document).ready(function(){
    // Add smooth scrolling to all links
    gsap.utils.toArray(".nav-link").forEach(function(link, i) {
        link.addEventListener("click", function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();
            
            if (desktopScreen.matches) {
                window.scrollTo(0, i * window.innerHeight);
            }
            if (mobileScreen.matches) {
                document.querySelector(this.hash).scrollIntoView();

            }
        });
    });
 });

// GSAP SCROLL ANIMATIONS, SCROLL TRIGGER /////////////////////////////////////////////////////////////////////
let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

    var intro = gsap.timeline({
        scale: .6,
        opacity: 0
    });
    intro.from("#photo", {
        y: -100,
        x: -50,
        scale: 2,
        opacity: 0,
        boxShadow: "0px 50px 50px 50px rgba(0,0,0,0.9)",
        ease: 'power2.in',
        duration: 1.5,
        delay: .25
    });
    intro.to("#photo", {
        x: 200,
        y: 100,
        opacity: 1,
        duration: 2
    }, ">-1.5");
    intro.from('.title', 1, {
        scale: 2,
        y: -50,
        x: 100,
        autoAlpha: 0,
        delay: 0.5,
        ease: 'power2.out'
    });
    intro.to("#photo", {
        x: 100,
        y: 50,
        opacity: 1,
        duration: 1,
        ease: 'none'
    }, ">-1");
    intro.from('#experiences', 1, {
        x: 300,
        autoAlpha: 0,
        ease: 'power2.out'
    }, ">-1");
    intro.to("#photo", {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1
    }, ">-1");
    intro.from('.p-right-home', 1, {
        y: 200,
        scale: .5,
        autoAlpha: 0,
        ease: 'power2.out'
    }, ">-1");
    intro.play(0);
    
    var slogan = gsap.timeline({
        repeat: 0
    });
    slogan.from('.shadow', 2.5, {
        filter: 'drop-shadow(-10px 10px 40px rgba(0, 0, 0, 1))',
        ease: 'power2.out'
    });
    slogan.from('#honeycomb', 1, {
        x: -1500,
        ease: 'power2.out'
    }, ">-1.5");
    slogan.from('#affordable', .9, {
        y: -400,
        autoAlpha: 0,
        ease: "power2.in"
    }, 1);
    slogan.from('#practical', .7, {
        y: -400,
        autoAlpha: 0,
        ease: "power2.in"
    });
    slogan.from('#responsive', .6, {
        y: -400,
        autoAlpha: 0,
        ease: "power2.in"
    });
    slogan.from('.expand', 1, {
        autoAlpha: 0,
        opacity: 0,
        ease: 'none'
    }, ">-.3");
    // cant change scale without losing hover transform
    //slogan.from('.expand', 1, {autoAlpha: 0, scale: 0, ease: 'power2.out'});
    
    
    //slogan.to('.title-slogan', .5, {filter:'grayscale(100)', fontWeight: 800, opacity: .65, delay: 1, fontSize: '15vw', zIndex: '-1', ease: "power2.out"});
    //slogan.to('.title-slogan span', .5, { filter:'grayscale(100)', fontWeight: 800, opacity: .32, fontSize: '15vw', zIndex: '-1', ease: "power2.out"}, '>-.5');
    //slogan.fromTo('.p-slogan', 1, {rotateY: 90},{opacity: 1, color: 'var(--sub-text)', fontSize: '1vw', y: '-100%', rotateY: 0, ease: 'power2.in'}, '>-.5');
    //slogan.to('#honeycomb', 1, {backgroundColor: 'rgba(0,0,0,.4)', ease: 'power2.in'}, '>-.5');
    
    
    var animateCards = gsap.timeline({
        repeat: 0
    });
    animateCards.from('h2', 1, {
        x: 300,
        autoAlpha: 0,
        delay: .25
    });
    animateCards.from('.p-center', 1, {
        rotateY: 90,
        scale: 1.2,
        autoAlpha: 0
    });
    animateCards.from('#card-1', 1, {
        x: -200,
        y: 400,
        autoAlpha: 0,
        ease: "power2.in",
    });
    animateCards.from('#card-2', 1, {
        x: -100,
        y: 400,
        autoAlpha: 0,
        ease: "power2.in"
    }, ">-.5");
    animateCards.from('#card-3', 1, {
        x: 100,
        y: 400,
        autoAlpha: 0,
        ease: "power2.in"
    }, ">-1");
    animateCards.from('#card-4', 1, {
        x: 200,
        y: 400,
        autoAlpha: 0,
        ease: "power2.in"
    }, ">-1.5");
    
    // var animateElements = gsap.timeline({
    //     repeat: 0
    // });
    // animateElements.from('h2', 1, {
    //     x: 300,
    //     autoAlpha: 0,
    //     delay: 1
    // });
    // animateElements.from('.p-center', 1, {
    //     rotateY: 90,
    //     scale: 1.2,
    //     autoAlpha: 0
    // });
    
    gsap.registerPlugin(CSSRulePlugin);
    
    var rule = CSSRulePlugin.getRule("#info p:before");
    var rule2 = CSSRulePlugin.getRule("#info-2 p:before");
    
    var hero = gsap.timeline({
        repeat: 0,
    });
    hero.fromTo('h2', 1, {
        x: 300,
        autoAlpha: 0
    }, {
        x: 0,
        autoAlpha: 1

    });
    hero.fromTo('.p-center', 1, {
        rotateY: 90,
        autoAlpha: 0,
        delay: .5
    }, {
        rotateY: 0,
        autoAlpha: 1
    });

    hero.to(rule, {
        duration: .75,
        cssRule: {
            left: 200,
            width: 50,
            borderTop: '1.5px solid #e6772e',
        },
        ease: 'power2.out',
    });
    hero.to(rule, {
        duration: .4,
        cssRule: {
            left: 0,
            width: 25,
            borderTop: '3px solid #e6772e'
        },
        ease: 'power2.in'
    });
    var hand = gsap.timeline({
        repeat: 0
    });
    hand.fromTo('h2', 1, {
        x: 300,
        autoAlpha: 0
    }, {
        x: 0
    });
    hand.fromTo('.p-center', 1, {
        rotateY: 90,
        delay: .5,
        autoAlpha: 1
    }, {
        rotateY: 0,
        autoAlpha: 1
    });
    hand.to(rule2, {
        duration: .75,
        cssRule: {
            left: 200,
            width: 50,
            borderTop: '1.5px solid #e6772e'
        },
        ease: 'power2.out',
    });
    hand.to(rule2, {
        duration: .4,
        cssRule: {
            left: 0,
            width: 25,
            borderTop: '3px solid #e6772e'
        },
        ease: 'power2.in'
    });
    
        
    
        //slogan.play(0);
        //animateCards.play(0);
        //animateElements.play(0);
        //intro.play(0);
        //hero.play(0);
        //hand.play(0);

function init() {
    sections[0].timeline = intro;
    sections[1].timeline = animateCards;
    sections[2].timeline = slogan;
    sections[3].timeline = animateCards;
    sections[4].timeline = hero;
    sections[5].timeline = hand;

   }

   init();

gsap.defaults({
    overwrite: 'false',
    duration: 0.3
});

// stretch out the body height according to however many sections there are. 
gsap.set("body", {
    height: (sections.length * 100) + "%"
});

// create a ScrollTrigger for each section


   if (desktopScreen.matches) {
    sections.forEach((section, i) => {
        ScrollTrigger.create({
          animation: section.timeline,
          trigger: section,
          
          // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
          start: () => (i - 0.5) * innerHeight,
          end: () => (i + 0.5) * innerHeight,
          // when a new section activates (from either direction), set the section accordingly
          onToggle: self => self.isActive && setSection(section),
          toggleActions: 'restart none restart none'
        });
       });
   } else {                     ////////////////////////// MOBILE ///////////////////////
    sections.forEach((section, i) => {
        ScrollTrigger.create({
            animation: section.timeline,
            trigger: section,
            
            start: "top center",
            end: "bottom center",
            toggleActions: 'restart none none none'
            //toggleActions: 'restart none restart none'
          });

    section.classList.remove('first', 'panel');

    });
    $('section:not(.first)').css('opacity', '1');
    $('section:not(.first)').css('visibility', 'visible');
    $('section:not(.first)').css('transform', 'scale(1)');
   }


   
   function setSection(newSection) {
    
    if (newSection !== currentSection
    && desktopScreen.matches) {
      gsap.to(currentSection, {scale: 0.7, autoAlpha: 0});
      gsap.to(newSection, {scale: 1, autoAlpha: 1});
      
      currentSection = newSection;
    }

   }


//gsap.fromTo("#photo", 1, {filter: 'blur(4px)'}, {filter: 'blur(0px)'}) // Causes box-shadow to disappear after timeline?
gsap.registerPlugin(TextPlugin);



//////////////////////////////////////////////// INFINITE SCROLL
// ScrollTrigger.create({
//   start: 1,
//   end: () => window.innerHeight * (sections.length - 1) - 1,
//   onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
//   onLeave: self => self.scroll(2)
// }).scroll(2);


// SCROLL SPEED ////////////////////////////////////////////////////////////////////////


//    function wheel(event) {
//        var delta = 0;
//            if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
//            else if (event.detail) {(delta = -event.detail / 3);}

//        handle(delta);
//        if (event.preventDefault) {(event.preventDefault());}
//        event.returnValue = true;

//    }

//    function handle(delta) {
//        var time = 500;
//        var distance = 1000;

//        $('html, body').stop().animate({
//            scrollTop: $(window).scrollTop() - (distance * delta)
//        }, time );
// }
//        if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
//            window.onmousewheel = document.onmousewheel = wheel;



////////////////////////////////////////////////////////////////