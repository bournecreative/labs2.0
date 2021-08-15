import intersect from "../utilities/intersect";

const LazyLoad = {
    init() {
        this.images = Array.prototype.slice.call(document.querySelectorAll('img'))
        if (!this.images) {
            return
        }
        this.observeImages();
    },
    observeImages() {
        this.images.forEach((img) => {
            intersect.observer.observe(img);
        })
    }
}