let sideBar = document.getElementById("sidebar");
let navBtn = document.getElementById("navlogo");
let closeBtn = document.getElementById("close-btn");
navBtn.addEventListener("click", function () {
    sideBar.classList.toggle("slide");
});
closeBtn.addEventListener("click", function () {
    sideBar.classList.add("slide");
});

gsap.from("#name", {
    duration: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: "#first-section",
        // markers: true,
        start: "top 25%",
        scrub: true
    }
});

gsap.to("#name", {
    transform: "translateX(-50%)",
    scrollTrigger: {
        scroller: "body",
        trigger: "first-section",
        scrub: true
    }
});
gsap.to("#name2", {
    transform: "translateX(200px)",
    scrollTrigger: {
        scroller: "body",
        trigger: "first-section",
        scrub: true
    }
});
gsap.from("#name2", {
    duration: 2,

    scrollTrigger: {
        scroller: "body",
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

gsap.from("#about-text", {
    transform: "translateX(250px)",
    scrollTrigger: {
        scroller: "body",
        trigger: "#second-section",

        start: "top 25%",
        scrub: true
    }
});
gsap.from("#skills-text", {
    duration: 1,
    transform: "rotateX(90deg)",
    scrollTrigger: {
        scroller: "body",
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
        scroller: "body",
        trigger: "#third-section",
        scrub: true,
        start: "top 60%",
        end: "top 0%"
    }
});

gsap.registerPlugin(TextPlugin);

gsap.to("#anim-text", {
    duration: 20,
    text: "Optimize website content for SEO · Recognize strategies to build brand awareness among potential customers · Explain the purpose of SEO (search engine optimization) and essential SEO terms · Understand search engine marketing (SEM) and how it benefits businesses.",
    ease: "none",

    scrollTrigger: {
        scroller: "body",
        trigger: "#fourth-section",
        scrub: true,
        pin: true,
        top: "80%",
        end: "top -200%"
    }
});

// gsap.to("#fifth-section", {
//     // backgroundColor: "black",
//     background: "rgb(87,20,20)",
//     background:
//         "linear-gradient(45deg, rgba(87,20,20,0.06613964136096018) 0%, rgba(0,0,0,1) 0%, rgba(17,15,12,1) 50%, rgba(26,22,19,1) 100%, rgba(0,0,0,1) 1000%)",
//     // transition: "0.5s ease",
//     scrollTrigger: {
//         scroller: "body",
//         trigger: "#fifth-section",
//         // markers: true,
//         start: "top 10%",
//         end: "top 70%",
//         scrub: 2
//     }
// });

let tl = gsap.timeline();

tl.from("#dark-circle", {
    // duration: 1,
    height: 300,
    width: 300,
    borderRadius: "50%",
    scrollTrigger: {
        scroller: "body",
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
        scroller: "body",
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
        scroller: "body",
        trigger: "#fifth-section",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2
    }
});

gsap.to("#faq-section", {
    backgroundColor: "#eee9db",
    scrollTrigger: {
        scroller: "body",
        trigger: "#faq-section",
        // markers: true,
        start: "top 10%",
        end: "top 0%"
    }
});
