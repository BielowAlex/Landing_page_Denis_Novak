import {gsap} from "gsap";

export const headerAnim = ()=>{
    gsap.from('.header',{
        top:'-100%',
        opacity:0,
    })
}