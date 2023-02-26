import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const skillAnim=()=>{
    gsap.from('.skills-message__text',{
        y:30,
        opacity:0,
        scrollTrigger:{
            trigger:'.skills',
            start:'top bottom',
            end:'bottom bottom',
            scrub:true
        }
    })

    const skillsList = document.querySelectorAll('.skills-item');
    const tl = gsap.timeline({
        ease:'power4',
        scrollTrigger:{
            trigger:'.skills-list',
            start:'50px bottom',
            end:'top center',
            scrub:true
        }
    })

    skillsList.forEach(skill=>{
        tl.from(skill,{
            y:'100%',
            opacity:0,
        })
    })
}