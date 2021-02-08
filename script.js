let changeColor = gsap.timeline({
  scrollTrigger: {
    trigger: "#start_BigText",
    start: "bottom 60%",
    end: "bottom 40%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});

changeColor.to(".cakeAbsolute, .cakeAbsolute1, .bigText-box", {
  opacity: 0,
});

//
//
//
//
/* let changeColor2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#start_BigText",
    start: "bottom 40%",
    end: "bottom 20%",
    scrub: 1,
    markers: true,
    toggleActions: "play none reverse none",
  },
});

changeColor2.to(".informace", {
  backgroundColor: "rgb(97, 79, 79)",
  duration: 0.3,
}); */

//swiper

/* var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
}); */

//
//
//kafe
let moveUpper = gsap.timeline({
  scrollTrigger: {
    trigger: ".kafe-img",
    start: "bottom 100%",
    end: "bottom 80%",
    scrub: 1,
    markers: true,
    toggleActions: "play none reverse none",
  },
});
moveUpper.to(".kafe-img", {
  y: "-30%",
});
