const Intersect = {
    options: {
        root: null,
        threshold: 0.2,
        rootMargin: "0%"
    },
    observer: new IntersectionObserver(function (entries, observer) {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                const payload = item.target.getAttribute('data-img');
                item.target.setAttribute('src', payload)
                observer.unobserve(item.target)
            }
        })
    }, this.options)
}

export default Intersect;