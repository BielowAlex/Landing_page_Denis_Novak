
const langList = document.querySelectorAll('.lang');
console.log(langList);


console.log(languages.length);


const langBtn1 = document.querySelector('.language_btn');
const langBtn1Children = langBtn1.children;
langBtn1.onclick = () => {
    if (langBtn1Children[1].classList.length > 1) {
        langBtn1Children[1].classList.remove('pressed');
        langBtn1Children[0].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn1Children[0].classList[0]);
        langInit();
    } else if (langBtn1Children[0].classList.length > 1) {
        langBtn1Children[0].classList.remove('pressed');
        langBtn1Children[1].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn1Children[1].classList[0]);
        langInit();
    }
}

const langBtn2 = document.querySelector('.language_btn2');
const langBtn2Children = langBtn2.children;
langBtn2.onclick = () => {
    if (langBtn2Children[1].classList.length > 1) {
        langBtn2Children[1].classList.remove('pressed');
        langBtn2Children[0].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn2Children[0].classList[0]);
        langInit();
    } else if (langBtn2Children[0].classList.length > 1) {
        langBtn2Children[0].classList.remove('pressed');
        langBtn2Children[1].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn2Children[1].classList[0]);
        langInit();
    }
}


function langInit() {
    let lang = localStorage.getItem('lang_DN');
    if (lang === 'ru') {
        // btn1
        langBtn1Children[1].classList.remove('pressed');
        langBtn1Children[0].classList.add('pressed');
        // btn2
        langBtn2Children[1].classList.remove('pressed');
        langBtn2Children[0].classList.add('pressed');

        localStorage.setItem('lang_DN', langBtn2Children[0].classList[0]);

        for (let i = 0; i < languages.length; i++) {
            let arr = languages[i].ru;
            let child = langList[i].children;

            for (let j = 0; j < arr.length; j++) {
                child[j].innerText = arr[j];
            }
        }
    } else if (lang === 'eng') {
        // btn1
        langBtn1Children[0].classList.remove('pressed');
        langBtn1Children[1].classList.add('pressed');
        // btn2
        langBtn2Children[0].classList.remove('pressed');
        langBtn2Children[1].classList.add('pressed');

        localStorage.setItem('lang_DN', langBtn2Children[1].classList[0]);

        for (let i = 0; i < languages.length; i++) {
            let arr = languages[i].eng;
            let child = langList[i].children;

            for (let j = 0; j < arr.length; j++) {

                child[j].innerText = arr[j];
            }
        }
    }

}

