import { debounce } from "lodash";

let lastScrollPosition = 0 || document.documentElement.scrollTop || window.pageYOffset;

const HeaderScroll = {
    init() {
        this.header = document.querySelector('.header--top-bar');
        if (!this.header) {
            return
        }
        this.header = document.querySelector('header');
        this.registerEventListeners()
    },
    registerEventListeners() {
        window.addEventListener("scroll", debounce(this.checkPosition.bind(this), 50))
    },
    checkPosition() {
        const current = window.pageYOffset || document.documentElement.scrollTop;
        if (current > lastScrollPosition) {
            this.header.classList.add("slide-out")
        } else {
            this.header.classList.remove("slide-out")
        }
        lastScrollPosition = current <= 0 ? 0 : current; // set last scroll position. If less then 0, set to 0 or set to current scroll position.
    }
}

export default HeaderScroll;