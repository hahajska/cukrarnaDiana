const mediaQuery = window.matchMedia("(min-width: 992px)");

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert

  //btns-move

  let moveBtns = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter",
      start: "bottom 32.5%",
      end: "bottom 5%",
      delay: 0.5,
      scrub: 2,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  moveBtns.fromTo(".katalog", { y: "0px" }, { y: "-100px" });
  //

  let moveBtns2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter",
      start: "bottom 27.5%",
      end: "bottom 5%",
      delay: 0.5,
      scrub: 2,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  moveBtns2.fromTo(".btn-objednat", { y: "0px" }, { y: "-75px", x: "0px" });

  //textuop

  let moveUp = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter",
      start: "bottom 37.5%",
      end: "bottom 5%",
      delay: 0.5,
      scrub: 2,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  moveUp.fromTo(".cake_Img", { y: "10px" }, { y: "-110px" });

  let moveUp2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter",
      start: "bottom 35%",
      end: "bottom 25%",
      delay: 0.5,
      scrub: 2,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  moveUp2.fromTo(".about-box", { y: "10px" }, { y: "-45px" });

  //

  let moveUp3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter",
      start: "bottom 32.5%",
      end: "bottom 15%",
      delay: 0.5,
      scrub: 2,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });
  moveUp3.fromTo(".doba-box", { y: "0px" }, { y: "-105px" });

  //

  //objednavky-box
  //objednavky-box
  //objednavky-box
  //objednavky-box
  let objednavka1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter2",
      start: "bottom 37.5%",
      end: "bottom 25%",
      scrub: 2,
      duration: 3,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  objednavka1.fromTo(".zakusky", { y: "50px" }, { y: "-200px" });

  let objednavka2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter2",
      start: "bottom 30.5%",
      end: "bottom 18%",
      scrub: 2,
      duration: 3,
      toggleActions: "play none reverse none",
    },
  });

  objednavka2.fromTo(".dorty", { y: "50px" }, { y: "-150px" });

  let objednavka3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".starter2",
      start: "bottom 25%",
      end: "bottom 13.5%",
      scrub: 2,
      duration: 3,
      markers: false,
      toggleActions: "play none reverse none",
    },
  });

  objednavka3.fromTo(".chlebicky", { y: "50px" }, { y: "-100px" });
}

//
