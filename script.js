let moveUp = gsap.timeline({
  scrollTrigger: {
    trigger: ".nadpis-box",
    start: "bottom 40%",
    end: "bottom 20%",
    delay: 0.5,
    scrub: 2,
    markers: false,
    toggleActions: "play none reverse none",
  },
});

moveUp.fromTo(".cake_Img", { y: "10px" }, { y: "-60px" });

let moveUp2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".nadpis-box",
    start: "bottom 35%",
    end: "bottom 25%",
    delay: 0.5,
    scrub: 2,
    markers: false,
    toggleActions: "play none reverse none",
  },
});

moveUp2.fromTo(".about-box", { y: "10px" }, { y: "-85px" });

//

let moveUp3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".nadpis-box",
    start: "bottom 37.5%",
    end: "bottom 25%",
    delay: 0.5,
    scrub: 2,
    markers: true,
    toggleActions: "play none reverse none",
  },
});

moveUp3.fromTo(".doba-box", { y: "0px" }, { y: "-105px" });
