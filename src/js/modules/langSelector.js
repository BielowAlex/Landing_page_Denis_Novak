import {gsap} from "gsap";

export const langSelector = ()=>{
    const engSelector = document.querySelectorAll('._eng');
    const uaSelector = document.querySelectorAll('._ua');

    engSelector.forEach(btn=>{
        btn.addEventListener('click',()=>{
            setLocation('eng')
        })
    });
    uaSelector.forEach(btn=>{
        btn.addEventListener('click',()=>{
            setLocation('ua')
        })
    });
}

export const checkLocation = ()=>{
    const location = localStorage.getItem('location');

    langSelector();

    !location
        ?setLocation('eng')
        :setLocation(location)
}

const setLocation =  (location)=>{
    localStorage.getItem('location')!==location &&
    localStorage.setItem('location',location);
    loadTranslate();

    const uaBtns = document.querySelectorAll('._ua');
    const engBtns = document.querySelectorAll('._eng');

    uaBtns.forEach(btn=>{
        location==='ua'?btn.classList.add('_active'):btn.classList.remove('_active')
    });
    engBtns.forEach(btn=>{
        location==='eng'?btn.classList.add('_active'):btn.classList.remove('_active')
    });

}

const loadTranslate = ()=>{
    gsap.set('.loader',{
        css:{
            display:'block'
        }
    })

    fetch('https://bielowalex.github.io/portfolio__old/dn-translate.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const location = localStorage.getItem('location');
            const dataKeys = Object.keys(data[0][location]);
            const output = data[0][location];
            const toTranslate = document.querySelectorAll('._lang');

            toTranslate.forEach(el=>{
                dataKeys.forEach(key=>{
                    if(el.classList.contains(key)) {
                        el.innerText = output[key];
                    }
                })
            })

            gsap.set('.loader',{
                css:{
                    display:'none'
                }
            })
        })
        .catch(error => {
            gsap.set('.loader',{
                css:{
                    display:'none'
                }
            })
            alert("Data load error try latter. Error 404 :" + error);
        });


}