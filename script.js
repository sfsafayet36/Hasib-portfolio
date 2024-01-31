let sideBar = document.getElementById("sidebar");
let navBtn = document.getElementById("navlogo");
let closeBtn = document.getElementById("close-btn");
navBtn.addEventListener("click", function() {
  sideBar.classList.toggle("slide");
});
closeBtn.addEventListener("click", function() {
  sideBar.classList.add("slide");
});

sideBar.addEventListener("click", () => {
  sideBar.classList.add("slide");
});

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true,
  getDirection: true
});
console.dir(locoScroll);

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ?
      locoScroll.scrollTo(value, 0, 0) :
      locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector("#main").style.transform ?
    "transform" :
    "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.from("#name", {
  duration: 2,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#first-section",
    // markers: true,
    start: "top 25%",
    scrub: true
  }
});

// gsap.to("#name", {
//     transform: "translateX(-50%)",
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: "first-section",
//         scrub: true
//     }
// });
// gsap.to("#name2", {
//     transform: "translateX(200px)",
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: "first-section",
//         scrub: true
//     }
// });

gsap.from("#name2", {
  duration: 2,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#first-section",
    // markers: true,
    start: "top 25%",
    scrub: true
  }
});

function nameAnimate(item, style) {
  gsap.from(`${item}`, {
    duration: 1.5,
    opacity: 0,
    transform: `${style}`
  });
}
nameAnimate(
  "#name h3:nth-child(1)",
  "scale(1.5) rotate(-90deg) skew(60deg) translateX(10px)"
);
nameAnimate(
  "#name h3:nth-child(2)",
  "rotate(90deg) translateX(-20px) scale(0.5)"
);
nameAnimate(
  "#name h3:nth-child(3)",
  "translateY(-50px) scale(0.4) skew(20deg)"
);
nameAnimate("#name h3:nth-child(4)", "translateY(100px) scale(0.5)");
nameAnimate(
  "#name h3:nth-child(5)",
  "translateY(-100px) scale(0.5) skew(20deg)"
);
nameAnimate("#name h3:nth-child(6)", "translateX(-100px) scale(2) skew(20deg)");
nameAnimate("#name h3:nth-child(7)", "translateX(100px) scale(2) skew(70deg)");
nameAnimate(
  "#name h3:nth-child(8)",
  "translateX(-100px) scale(2) skew(70deg) translateY(-100px)"
);
nameAnimate(
  "#name h3:nth-child(9)",
  "rotate(90deg) translateX(-20px) scale(0.5)"
);
nameAnimate(
  "#name h3:nth-child(10)",
  "rotate(90deg) translateY(-200px) scale(3)"
);
nameAnimate(
  "#name2 h4:nth-child(1)",
  "translateX(-200px) translateY(200px) skew(-60deg)"
);
nameAnimate(
  "#name2 h4:nth-child(2)",
  "translateX(200px) translateY(200px) skew(-60deg)"
);
nameAnimate("#name2 h4:nth-child(3)", "translateX(100px) scale(0)");
nameAnimate("#name2 h4:nth-child(4)", "rotate(60deg)");
nameAnimate("#name2 h4:nth-child(5)", "translateY(100px) translateX(100px)");
nameAnimate(
  "#name2 h4:nth-child(6)",
  "translateY(100px) translateX(100px) scale(3)"
);

gsap.from("#digital", {
  delay: 1,
  duration: 1.5,
  opacity: 0,
  y: 50
});

// gsap.from("#about-text", {
//     transform: "translateX(250px)",
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: "#second-section",
// 
//         start: "top 25%",
//         scrub: true
//     }
// });
gsap.from("#skills-text", {
  duration: 1,
  transform: "rotateX(90deg)",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#third-section",
    scrub: true,
    start: "top 40%",
    end: "top 0%"
  }
});

gsap.from("#skill-logo", {
  duration: 3,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#third-section",
    scrub: true,
    start: "top 60%",
    end: "top 0%"
  }
});

gsap.registerPlugin(TextPlugin);

gsap.to("#anim-text", {
  // duration: 10,
  // transition: "0.5s ease",
  text: "Optimize website content for SEO · Recognize strategies to build brand awareness among potential customers · Explain the purpose of SEO (search engine optimization) and essential SEO terms · Understand search engine marketing (SEM) and how it benefits businesses.",
  ease: true,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#fourth-section",
    scrub: true,
    // ease: 4,
    pin: true,
    top: "90%",
    end: "top -100%"
  }
});

let tl = gsap.timeline();

tl.from("#dark-circle", {
  // duration: 1,
  height: 300,
  width: 300,
  borderRadius: "50%",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#fifth-section",
    // markers: true,
    start: "top 0%",
    scrub: true,
    pin: true
  }
});
tl.from("#certificate-text", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#fifth-section",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2
  }
});

tl.from(".swiper", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#fifth-section",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1
  }
});

gsap.to("#faq-section", {
  backgroundColor: "#eee9db",
  // transition: "0.3s ease",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#faq-section",
    // markers: true,
    start: "top 40%",
    end: "top 0%"
  }
});

gsap.from("#faq-h1", {
  x: -200,
  opacity: 0,
  // duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#faq-section",
    // markers: true,
    start: "top 40%",
    end: "top 0%"
  }
});

gsap.from("#faq-right", {
  opacity: 0,
  // duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#faq-section",
    // markers: true,
    start: "top 40%",
    end: "top 0%"
  }
});