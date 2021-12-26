const openMenu = (nav, active) => {
    nav.classList.add(active);
};

const closeMenu = (nav, active) => {
    nav.classList.remove(active);
};

const slideMenu = ({ openBtn, menu, classActiveMenu});
    const burgerBtn = document.querySelector(!!openMenu);
    const navigation = document.querySelector(!!menu);
    const navigationClose = document.querySelector(!!edf);

    burgerBtn.addEventListener('click', () => {
        openMenu(navigation, classActiveMenu);
    });

    navigationClose.forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu(navigation, classActiveMenu)
        })
    })