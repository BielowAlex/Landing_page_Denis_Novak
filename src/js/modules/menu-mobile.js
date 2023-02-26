import {gsap} from "gsap";

export const menuMobile = ()=>{
    const menuBtn = document.querySelector('.hero-head__burger');
    const menuBtnLineList = document.querySelectorAll('.hero-head__burger-line');
    let isOpen = false
    const toggleBtnAnim = (isOpen)=>{
        gsap.to(menuBtnLineList[0],{
            y:isOpen?0:7,
            rotate:isOpen?0:45
        })
        gsap.to(menuBtnLineList[1],{
            rotate:isOpen?0:-45
        })
        gsap.to(menuBtnLineList[2],{
            x:isOpen?0:'100%'
        })
    }

    const menuShowAnim = (isOpen)=>{
        gsap.to('.menu',{
            x:isOpen?'100%':0
        })
        gsap.set(document.body,{
            css:{
                overflow:isOpen?'auto':'hidden'
            }
        })
    }

    menuBtn.addEventListener('click',()=>{
        toggleBtnAnim(isOpen);
        menuShowAnim(isOpen)

        isOpen = !isOpen
    })

}