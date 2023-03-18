gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
const tl = gsap.timeline();
tl.to(".wrapper1", { yPercent: -100 })
  .to(".wrapper2", { yPercent: -100 })
  .to(".wrapper3", { yPercent: -100 })
  .to(".wrapper4", { yPercent: -100 })
  .to(".wrapper5", { yPercent: -100 })
  .to(".wrapper6", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".container",
  scrub: true,
  pin: true,
  start: "top top",
  end: "+=10000",
  span: true,
  anticipatePin: 1,
});

gsap.to(".first", { y: 400 });
gsap.to(".second", { y: -330 });

// gsap.to(".fourth", {
//   rotation: "360",

//   scrollTrigger: { start: "top center", trigger: ".fourth" },
// });
// gsap.to(".third", { y: -330 });

// let sections = gsap.utils.toArray(".wrapper");

// gsap.to(sections, {
//   yPercent: -100 * (sections.length - 1),
//   ease: "none",
//   ScrollTrigger: {
//     trigger: ".container",
//     scrub: 1,
//     pin: true,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth,
//   },
// });
