const Nav = {
    init() {
        this.nav = document.querySelector('.nav__container');
        if (!this.nav) {
            return
        }
        this.navOpen = document.querySelector('.header__button-menu');
        this.navClose = document.querySelector('.nav__button-close');
        this.registerEventListeners();
    },
    registerEventListeners() {
        this.navOpen.addEventListener('click', this.slideNavIn);
        this.navClose.addEventListener('click', this.slideNavOut);
    },
    slideNavIn() {
        const nav = document.querySelector('.nav__container');
        nav.classList.add('active');
    },
    slideNavOut() {
        const nav = document.querySelector('.nav__container');
        nav.classList.remove('active');
    }
}

export default Nav