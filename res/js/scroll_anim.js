let animItemList = document.querySelectorAll('._anim_item');
console.log(animItemList);
console.log(document.documentElement.scrollTop)

if (animItemList.length > 0) {
    window.addEventListener('scroll', scrollAnim);

    function scrollAnim() {
        for (let i = 0; i < animItemList.length; i++) {
            const animItem = animItemList[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offSet(animItem).top;
            const animStart = 4;

            let animItemPointStart = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPointStart = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPointStart) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }

    function offSet(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    scrollAnim();
}