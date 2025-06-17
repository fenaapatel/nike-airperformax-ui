var tl = gsap.timeline();

gsap.set(".a", {opacity: 0, y: 10})
gsap.set("#right img", { opacity: 0, y: 10, scale: 2.0 })

tl
    .from("#left", {
        width: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .from("#right", {
        width: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".a", {
        delay: -2.3,
        stagger: .1,
        opacity: 1,
        y:0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to("#right img", {
        delay: -1.5,
        opacity: 1,
        y:0,
        scale: 1,
        duration: 1.5,
        ease: Expo.easeInOut
    })
