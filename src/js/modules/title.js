import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger)
export const titleAnim = () => {
    const titleList = document.querySelectorAll('.title-text');

    titleList.forEach(el => {
        gsap.from(el, {
            y: '100%',
            opacity: 0,
            ease: 'power4',
            scrollTrigger: {
                trigger: el.parentElement,
                start: '30px bottom',
                end: 'top center',
                scrub: true
            }
        })
    })
}