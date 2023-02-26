import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const worksAnim = ()=>{
    const worksList = document.querySelectorAll('.works-item');

    worksList.forEach((work,index)=>{
        gsap.from(work,{
            x:index%2?'100%':'-100%',
            opacity:0,
            ease:'power4',
            scrollTrigger:{
                trigger:work,
                start:'top bottom',
                end:'bottom bottom',
                scrub:true
            }
        })
    })
}