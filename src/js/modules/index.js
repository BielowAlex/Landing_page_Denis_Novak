import {headerAnim} from "./header.js";
import {heroAnim} from "./hero.js";
import {aboutAnim} from "./about.js";
import {titleAnim} from "./title.js";
import {skillAnim} from "./skills.js";
import {worksAnim} from "./works.js";
import {footerAnim} from "./footer.js";
import {menuMobile} from "./menu-mobile.js";


export const init = ()=>{
    menuMobile();

    headerAnim();
    heroAnim();
    aboutAnim();
    titleAnim();
    skillAnim();
    worksAnim();
    footerAnim();
}