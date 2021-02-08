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
    trigger: ".kafe-start",
    start: "bottom 64.5%",
    end: "bottom 50%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
moveUpper.to(".cake1 , .cake2,  .cake5 , .cake7", {
  y: "-70px",
});
//

let moveUpper2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".kafe-start",
    start: "bottom 64.5%",
    end: "bottom 30%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
moveUpper2.to(".cake3 , .cake6", {
  y: "-45px",
});

let moveUpper3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".kafe-start",
    start: "bottom 64.5%",
    end: "bottom 50%",
    scrub: 1,
    markers: false,
    toggleActions: "play none reverse none",
  },
});
moveUpper3.to(".cake4", {
  y: "-55px",
});
