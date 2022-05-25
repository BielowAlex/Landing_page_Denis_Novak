const btn_close_popup = document.querySelector('.close');
const popup = document.querySelector('.popup');
btn_close_popup.onclick = function click() {
    popup.classList.remove('show_popup')
    // popup.classList.add('hide_popup');
}

const burgerButton = document.querySelector('.burger_button');
console.log(burgerButton);
burgerButton.onclick = () => {
    console.log('1');
    popup.classList.add('show_popup');
}

const menu = document.querySelector('.menu');
let menuItemList = menu.children;
for (const menuItem of menuItemList) {
    menuItem.onclick = () => {
        popup.classList.remove('show_popup');
    }
}
