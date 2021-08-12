let lastScrollPosition = 0 || document.documentElement.scrollTop;

const HeaderScroll = {
    init() {
        this.header = document.querySelector('.header--top-bar');
        if (!this.header) {
            return
        }
        this.header = document.querySelector('header');
        this.registerEventListeners()
    },
    getPosition() {
        const lastScrollPosition = 0 || window.pageYOffset
        console.log(lastScrollPosition)
        return lastScrollPosition
    },
    registerEventListeners() {
        window.addEventListener("scroll", this.checkPosition.bind(this), false)
    },
    checkPosition() {
        const current = window.pageYOffset || document.documentElement.scrollTop;
        if (current > lastScrollPosition) {
            console.log("scrolling down")
            this.header.classList.add("slide-out")
        } else {
            console.log("scrolling up")
            this.header.classList.remove("slide-out")

        }
        lastScrollPosition = current <= 0 ? 0 : current;
    },
}

export default HeaderScroll;