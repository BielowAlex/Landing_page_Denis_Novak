import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const footerAnim = ()=>{
    gsap.from('.footer',{
        opacity:0,
        scrollTrigger:{
            trigger:'.footer',
            start:'top bottom',
            end:'bottom bottom',
            scrub:true
        }
    })
}