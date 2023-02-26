import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger)
export const aboutAnim = ()=>{
    const tl = gsap.timeline({
        ease:'power4',
        scrollTrigger:{
            trigger:'.about-list',
            start:'50px bottom',
            end:'bottom bottom',
            scrub:true
        }
    });

    const aboutList = document.querySelectorAll('.about-item');

    aboutList.forEach(el=>{
        tl.from(el,{
            y:100,
            opacity:0
        })
    })

}