const desktopScreen = window.matchMedia("(min-width: 800px)");



//FADE IN ON SCROLL
$(window).scroll(function(){
    if ($(".in").mouseover(function() {
        $(".in").css("opacity", 1)
    }))
        $(".in").css("opacity", 0 + $(window).scrollTop() / 500);
})
// FADE OUT ON SCROLL
  $(window).scroll(function(){
    if ($(".out").mouseover(function() {
        $(".out").css("opacity", 1)
    }))
        $(".out").css("opacity", 1.25 - $(window).scrollTop() / 800);
})

// SERVICE HOVER CARDS ////////////////////////////////////////////////////////////////////
$(document).ready(function () {

$(".imgBx").mouseenter(function () {
    $(this).next(".content").animate({ opacity:1 }, 300, 'linear')
});
$(".card").mouseleave(function () {
    $(".content").animate({ opacity:0 }, 300, 'linear')
});
});

var img = document.querySelectorAll('.imgBx');
var cards = document.querySelectorAll('.card');
var content = document.querySelectorAll('.content');
var container = document.querySelectorAll('.container');


if (desktopScreen.matches) {
 
 
    // IF ON MOBILE
} else { 
    Array.prototype.forEach.call (cards, function (card, i) { 
    
    card.addEventListener('click', function() {
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
        window.addEventListener('scroll', function() {
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


// CIRCLE CLIP SCROLL INTO VIEW ////////////////////////////////////////////////////////
//var section = document.querySelector('.in');
//window.addEventListener('scroll', function() {
//    var value = window.scrollY;
//    var bounding = section.getBoundingClientRect();
//    var out;
//    
//    if (bounding.top >= 1) {
//        section.style.clipPath = "circle("+ value +"px at center center)";
//    } else {
//        
//        // need to calculate bounding - scrollY
//        out = 
//        section.style.clipPath = "circle("+ out +"px at center center)";
//    }
// 
//});

 // CUSTOMER SLIDER ////////////////////////////////////////////////////////////////////
$(document).ready(function(){
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


// SCROLL ANIMATIONS /////////////////////////////////////////////////////////////////////

gsap.from('#photo', 4, { x: -200, y: -200, autoAlpha: 0, delay: 2, ease: 'elastic'});
gsap.from('.first', 1, { scale: 2, autoAlpha: 0});
gsap.from('#experiences', 1, { x: 300, autoAlpha: 0, delay: 1});
gsap.from('#section-1 p', 1, { y: 200, autoAlpha: 0, delay: 2});


let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
gsap.set("body", {height: (sections.length * 100) + "%"});

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
    if( desktopScreen.matches) {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
  
  });
} else {
    section.classList.remove('first', 'panel');
    $('section:not(.first)').css('opacity', '1');
    $('section:not(.first)').css('visibility', 'visible');
    $('section:not(.first)').css('transform', 'scale(1)');


}
});

function setSection(newSection) {
  if (newSection !== currentSection) {

    gsap.to(currentSection, {scale: .8, autoAlpha: 0})
    gsap.to(newSection, 1, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
    
    gsap.from('#card-1', { x: -200,y: 400, autoAlpha: 0, delay: 1});
    gsap.from('#card-2', { x: -100, y: 400, autoAlpha: 0, delay: 1.4});
    gsap.from('#card-3', { x: 100, y: 400, autoAlpha: 0, delay: 1.4});
    gsap.from('#card-4', { x: 200, y: 400, autoAlpha: 0, delay: 1});
    gsap.from('.title', { x: 300, autoAlpha: 0, delay: 1});
    gsap.from('h2', { y: -300, autoAlpha: 0, delay: .5});
    gsap.from('p', { scale: 2, autoAlpha: 0, delay: .25});
    gsap.from('#affordable', 2, { y: -400, autoAlpha: 0, delay: 1, ease: "power2.inOut"});
    gsap.from('#practical', 2, { x: -400, autoAlpha: 0, delay: 2, ease: "power2.inOut"});
    gsap.from('#responsive', 2, { y: 400, autoAlpha: 0, delay: 3, ease: "power2.inOut"});


  }
  gsap.to('#card-1', 1, { y: 0, x: 0, autoAlpha: 1, delay: 1});
  gsap.to('#card-2', 1, { y: 0, x: 0, autoAlpha: 1, delay: 1.4});
  gsap.to('#card-3', 1, { y: 0, x: 0, autoAlpha: 1, delay: 1.4});
  gsap.to('#card-4', 1, { y: 0, x: 0, autoAlpha: 1, delay: 1});
  gsap.to('.title', 1, { x: 0, autoAlpha: 1, delay: 1});
  gsap.to('h2', 1, { y: 0, autoAlpha: 1, delay: .5});
  gsap.to('p', 2, { scale: 1, autoAlpha: 1, delay: .25});
  gsap.to('#affordable', 2, { y: 0, autoAlpha: 1, delay: 1, ease: "power2.inOut"});
  gsap.to('#practical', 2, { x: 0, autoAlpha: 1, delay: 2, ease: "power2.inOut"});
  gsap.to('#responsive', 2, { y: 0, autoAlpha: 1, delay: 3, ease: "power2.inOut"});

}

// handles the infinite part, wrapping around at either end....
//document.documentElement.scrollTop = 2;
//ScrollTrigger.create({
//  start: 1,
//  end: () => window.innerHeight * (sections.length - 1) - 1,
//  onLeaveBack: () => document.documentElement.scrollTop = document.body.scrollHeight - 2,
//  onLeave: () => document.documentElement.scrollTop = 2
//});
    


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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

