import {gsap} from "gsap";

export const heroAnim = () => {
    const tl = gsap.timeline();

    tl.from('.hero-title', {
        x: '-100%',
        opacity: 0,
    }).from('.hero-desc', {
        y:50,
        opacity:0
    }).from('.hero-local',{
        x:'100%',
        opacity:0
    })
}