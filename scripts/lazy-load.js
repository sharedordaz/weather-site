let images = document.querySelectorAll('.images-grid img');
const config = {
    threshold: 0.8,
    rootMargin: "0px 0px 0px 0px"
}

const load = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                load(item.target);
                observer.unobserve(item.target);
            }
        });
    }, config);

    images.forEach((img) => {
        observer.observe(img);
    });
} else {
    images.forEach((img) => {
        load(img);
    });
}